
// Assuming adsData is already loaded from adsData.js

// Function to handle form submission for creating/editing ads
document.getElementById('ad-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const adTitle = document.getElementById('ad-title').value;
    const adDescription = document.getElementById('ad-description').value;
    const adHref = document.getElementById('ad-href').value;
    const adImage = document.getElementById('ad-image').files[0];
    const adTargetPage = document.getElementById('ad-target-page').value;
    const adVisibility = parseInt(document.getElementById('ad-visibility').value);
    const adStatus = document.getElementById('ad-status').value;
    const currentDate = new Date();

    // Calculate expiration date based on visibility period
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + adVisibility);

    const newAd = {
        id: Date.now(),
        title: adTitle,
        description: adDescription,
        href: adHref,
        image: adImage.name,  // Store image name for simplicity
        targetPage: adTargetPage,
        visibility: adVisibility,
        expirationDate: expirationDate,
        status: adStatus,
        clicks: 0,
        reach: 0,
        createdAt: currentDate
    };

    // Add new ad to adsData array
    adsData.push(newAd);
    alert('Ad Created Successfully!');
    renderAdsTable();
});

// Function to render ads table
function renderAdsTable() {
    const adsTable = document.getElementById('ads-table').getElementsByTagName('tbody')[0];
    adsTable.innerHTML = ''; // Clear current table rows

    adsData.forEach(ad => {
        const row = adsTable.insertRow();
        row.innerHTML = `
            <td>${ad.title}</td>
            <td>${ad.description}</td>
            <td>${ad.status}</td>
            <td>
                <button onclick="editAd(${ad.id})">Edit</button>
                <button onclick="deleteAd(${ad.id})">Delete</button>
            </td>
        `;
    });
}

// Function to delete an ad
function deleteAd(adId) {
    adsData = adsData.filter(ad => ad.id !== adId);  // Remove the ad from array
    renderAdsTable();  // Re-render the ads table
}

// Load ads data when the page is loaded
window.onload = function() {
    renderAdsTable();  // Render ads on page load
}
