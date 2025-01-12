 // Admin saves hotel data in an array
        const hotels = [
            "Hotel Udaipur Palace",
            "The Royal Inn",
            "Lake View Resort",
            "City Garden Hotel",
            "Sunshine Guest House",
            "Rajasthan Heritage Hotel",
            "Luxury Hotel Udaipur",
			"Hotel Vishnupriya"
        ];
// Get the select element by its id
        const hotelSelect = document.getElementById('hotelName');
        const selectedHotelDisplay = document.getElementById('selectedHotel');

        // Dynamically populate the select options from the hotels array
        hotels.forEach(hotel => {
            const option = document.createElement('option');
            option.value = hotel;
            option.textContent = hotel;
            hotelSelect.appendChild(option);
        });

        // Display the selected hotel name
        hotelSelect.addEventListener('change', function() {
            const selectedHotel = hotelSelect.value;
            selectedHotelDisplay.textContent = 'Selected Hotel: ' + selectedHotel;
        });
		
		
	// Handle star rating interaction and save to data-rating attribute
document.querySelectorAll('.star-rating').forEach(function(ratingSection) {
    ratingSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('star')) {
            let selectedValue = event.target.getAttribute('data-value');
            let stars = ratingSection.querySelectorAll('.star');

            // Fill stars up to the selected one
            stars.forEach(function(star) {
                if (star.getAttribute('data-value') <= selectedValue) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });

            // Set the data-rating attribute on the parent section
            ratingSection.setAttribute('data-rating', selectedValue);
        }
    });
});

	// Initialize localStorage key for hotel reviews
const STORAGE_KEY = 'hotelReviews';

// Fetch hotel reviews from localStorage
const getHotelReviews = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
};

// Save hotel reviews to localStorage
const saveHotelReviews = (reviews) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
};

// Render hotel list with reviews count
function renderHotelList() {
    const hotelListContainer = document.getElementById("hotelList");
    const hotelReviews = getHotelReviews();

    hotelListContainer.innerHTML = '';

    Object.keys(hotelReviews).forEach(hotelName => {
        const hotel = hotelReviews[hotelName];
        const hotelBlock = document.createElement("div");
        hotelBlock.classList.add("hotel-block");
        hotelBlock.innerHTML = `
            <div class="hotel-name">${hotelName}</div>
            <div class="review-count">${hotel.reviews.length} Reviews</div>
        `;
        hotelBlock.addEventListener("click", () => displayReviews(hotelName));
        hotelListContainer.appendChild(hotelBlock);
    });
}

// Display reviews for a specific hotel
function displayReviews(hotelName) {
    const hotelReviews = getHotelReviews();
    if (!hotelReviews[hotelName]) {
        alert("No reviews found for this hotel.");
        renderHotelList();
        return;
    }

    const hotel = hotelReviews[hotelName];

    const hotelListContainer = document.getElementById("hotelList");
    hotelListContainer.innerHTML = `<h2>${hotelName}</h2>`;

    // Display the most recent reviews first
    hotel.reviews.slice().reverse().forEach((review, index) => {
        const reviewBlock = document.createElement("div");
        reviewBlock.classList.add("hotel-block");

        // Masked user name and email
        const maskedName = review.userName ? review.userName.replace(/.(?=.{2})/g, "*") : "Unknown";
        const maskedEmail = review.userEmail ? review.userEmail.replace(/(?!^).(?=.*@)/g, "*") : "Unknown";

        reviewBlock.innerHTML = `
            <div>Name: <b><span class="masked-name"><strong>${maskedName}</strong></span></b></div>
            <div>Email: <span class="masked-email">${maskedEmail}</span></div>
            <div>Work Status: ${getWorkStatusText(review.workStatus)}</div>
            <div>Salary Rating: ${review.rating.salary} Stars</div>
            <div>Behavior Rating: ${review.rating.behavior} Stars</div>
            <div>Working Environment Rating: ${review.rating.environment} Stars</div>
            <div>Owner Rating: ${review.rating.owner} Stars</div>
            <div>Recommended: ${review.recommend === "yes" ? "Yes" : "No"}</div>
            <div>Comments: ${review.comments}</div>
            <div>Access Requests: <span class="access-count" id="accessCount-${hotelName}-${index}">${getAccessCount(hotelName, index)}</span></div>
        `;

        // Access request button
        const requestButton = document.createElement("button");
        requestButton.textContent = "Request Access";
        requestButton.classList.add("request-button");
        requestButton.addEventListener("click", () => {
            reviewBlock.querySelector(".masked-name").textContent = review.userName;
            reviewBlock.querySelector(".masked-email").textContent = review.userEmail;
            incrementAccessCount(hotelName, index);
            updateAccessCountDisplay(hotelName, index);
            requestButton.disabled = true;
            requestButton.textContent = "Access Granted";
        });
        reviewBlock.appendChild(requestButton);

        hotelListContainer.appendChild(reviewBlock);
    });

    // Back button to return to the hotel list
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Hotel List";
    backButton.addEventListener("click", renderHotelList);
    hotelListContainer.appendChild(backButton);
}

// Function to get access count from localStorage
function getAccessCount(hotelName, reviewIndex) {
    const accessCounts = JSON.parse(localStorage.getItem("accessCounts")) || {};
    return accessCounts[`${hotelName}-${reviewIndex}`] || 0;
}

// Function to increment access count in localStorage
function incrementAccessCount(hotelName, reviewIndex) {
    const accessCounts = JSON.parse(localStorage.getItem("accessCounts")) || {};
    const key = `${hotelName}-${reviewIndex}`;
    accessCounts[key] = (accessCounts[key] || 0) + 1;
    localStorage.setItem("accessCounts", JSON.stringify(accessCounts));
}

// Function to update the displayed access count immediately
function updateAccessCountDisplay(hotelName, reviewIndex) {
    const accessCountElement = document.getElementById(`accessCount-${hotelName}-${reviewIndex}`);
    if (accessCountElement) {
        accessCountElement.textContent = getAccessCount(hotelName, reviewIndex);
    }
}



// Simulate checking user subscription status
function checkUserSubscription() {
    // Example data, replace with real logic to fetch user subscription status
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 2); // Simulate 2 days to expiry

    return {
        isSubscribed: true,
        isExpired: false,
        daysToExpiry: 2,
        expiryDate: expiryDate.toLocaleDateString()
    };
}

// Function to get access count from localStorage
function getAccessCount(hotelName, reviewIndex) {
    const accessCounts = JSON.parse(localStorage.getItem("accessCounts")) || {};
    return accessCounts[`${hotelName}-${reviewIndex}`] || 0;
}

// Function to increment access count in localStorage
function incrementAccessCount(hotelName, reviewIndex) {
    const accessCounts = JSON.parse(localStorage.getItem("accessCounts")) || {};
    const key = `${hotelName}-${reviewIndex}`;
    accessCounts[key] = (accessCounts[key] || 0) + 1;
    localStorage.setItem("accessCounts", JSON.stringify(accessCounts));

    // Update the displayed count
    const accessCountElement = document.getElementById(`accessCount-${reviewIndex}`);
    if (accessCountElement) {
        accessCountElement.textContent = accessCounts[key];
    }
}


// Helper function to convert work status values to text
function getWorkStatusText(workStatus) {
    switch (workStatus) {
        case "yes":
            return "Currently Working";
        case "no":
            return "Not an Employee";
        case "pastEmployee":
            return "Past Employee";
        default:
            return "No Information";
    }
}



// Handle star rating interaction
	// function setRating(section, rating) {
    // const stars = document.getElementById(section).querySelectorAll('.star');
    // stars.forEach((star, index) => {
    //   if (index < rating) {
    //        star.classList.add('selected');
    //    } else {
    //       star.classList.remove('selected');
     //  }
    // });
    // document.getElementById(section).setAttribute('data-rating', rating); }
// 

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather data from the form
    const hotelName = document.getElementById("hotelName").value;
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const comments = document.getElementById("comments").value;

    // Fetch ratings from data-rating attributes
    const rating = {
        salary: document.getElementById("salary").getAttribute("data-rating") || 0,
        behavior: document.getElementById("behavior").getAttribute("data-rating") || 0,
        environment: document.getElementById("environment").getAttribute("data-rating") || 0,
        owner: document.getElementById("owner").getAttribute("data-rating") || 0
    };

    // Get the recommendation value (yes/no)
    const recommend = document.querySelector('input[name="recommend"]:checked')?.value || "no";

    // Get the work status value (yes/no/pastEmployee)
    const workStatus = document.querySelector('input[name="workHere"]:checked')?.value || "no";

    // Get existing hotel reviews or initialize new
    const hotelReviews = getHotelReviews();
    if (!hotelReviews[hotelName]) {
        hotelReviews[hotelName] = { reviews: [] };
    }

    // Add new review
    hotelReviews[hotelName].reviews.push({ userName, userEmail, rating, comments, recommend, workStatus });

    // Save updated reviews to localStorage
    saveHotelReviews(hotelReviews);

    // Reset the form and refresh the hotel list
    document.getElementById("reviewForm").reset();
    renderHotelList();
});

// Initialize the page with hotel list
renderHotelList();

