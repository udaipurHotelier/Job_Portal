	document.addEventListener("DOMContentLoaded", () => {
        const jobs = [
            {
                hotelName: "Lake Palace Hotel",
                department: "Human Resource",
                designation: "Manager",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 50,000 - \u20B9 70,000",
                expiryDate: "2024-12-24",
                submitUrl: "#"
            },
			{
                hotelName: "Lake Pichola Hotel",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 15,000 - \u20B9 20,000",
                expiryDate: "2024-12-24",
                submitUrl: "#"
            },
			{
                hotelName: "Green View Hotel",
                department: "Human Resource",
                designation: "Manager",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 20,000 - \u20B9 30,000",
                expiryDate: "2024-12-24",
                submitUrl: "#"
            },
            {
                hotelName: "Royal Retreat",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 30,000 - \u20B9 50,000",
                expiryDate: "2024-12-31",
                submitUrl: "#"
            },
			{
                hotelName: "Hotel Fateh Prakesh",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 20,000 - \u20B9 30,000",
                expiryDate: "2024-12-31",
                submitUrl: "#"
            },
			{
                hotelName: "Soul Bistro & Lounge",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 20,000 - \u20B9 30,000",
                expiryDate: "2024-12-31",
                submitUrl: "#"
            },
			{
                hotelName: "Hotel Fateh Niwas",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 20,000 - \u20B9 30,000",
                expiryDate: "2024-12-31",
                submitUrl: "#"
            },
			{
                hotelName: "The Chronicles Hotel",
                department: "Human Resource",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "\u20B9 15,000 - \u20B9 20,000",
                expiryDate: "2024-12-31",
                submitUrl: "#"
            },
        ];

        let currentIndex = 0;
        const jobsPerLoad = 20;
        const jobList = document.getElementById("job-list");
        const loadMoreBtn = document.getElementById("load-more");

        function loadJobs() {
            const slice = jobs.slice(currentIndex, currentIndex + jobsPerLoad);
            slice.forEach(job => {
                const jobDiv = document.createElement("div");
                jobDiv.className = "job";

                const expiryDate = new Date(job.expiryDate);
                const currentDate = new Date();
                const daysLeft = Math.ceil((expiryDate - currentDate) / (1000 * 60 * 60 * 24));
                const isWarning = daysLeft <= 2;

                jobDiv.innerHTML = `
                    <h2>${job.hotelName}</h2>
                    <div class="job-details">
                        <p><strong>Department:</strong> ${job.department}</p>
                        <p><strong>Designation:</strong> ${job.designation}</p>
                        <p><strong>Location:</strong> ${job.location}</p>
                        <p><strong>Job Type:</strong> ${job.jobType}</p>
                        <p><strong>Job Location:</strong> ${job.jobLocation}</p>
                        <p><strong>Salary Range:</strong> ${job.salaryRange}</p>
                        <p><strong>Expire Date:</strong> <span class="expiry-date ${isWarning ? 'warning' : ''}" title="Post expires on ${job.expiryDate}">${job.expiryDate}</span></p>
                    </div>
                    <div class="job-actions">
                        <button class="submit-btn" onclick="window.open('${job.submitUrl}', '_blank')">Submit</button>
                        <button class="save-btn">&#10084;</button>
                    </div>
                `;

                const saveBtn = jobDiv.querySelector(".save-btn");
                saveBtn.addEventListener("click", () => {
                    saveBtn.classList.toggle("saved");
                    if (saveBtn.classList.contains("saved")) {
                        saveBtn.textContent = "Favorite";
                    } else {
                        saveBtn.innerHTML = "&#10084;";
                    }
                });

                jobList.appendChild(jobDiv);
            });

            currentIndex += jobsPerLoad;
            if (currentIndex >= jobs.length) {
                loadMoreBtn.style.display = "none";
            }
        }

        loadMoreBtn.addEventListener("click", loadJobs);
        loadJobs();
    });