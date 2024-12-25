document.addEventListener("DOMContentLoaded", () => {
        const jobs = [
            {
                hotelName: "Lake Palace Hotel",
                department: "Housekeeping",
                designation: "Manager",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "30,000 - 40,000",
                expiryDate: "2024-12-20",
                submitUrl: "#"
            },
            {
                hotelName: "Royal Retreat",
                department: "Housekeeping",
                designation: "Executive",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "20,000 - 25,000",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
            {
                hotelName: "The Oberoi Udaivilas",
                department: "Housekeeping",
                designation: "Supervisor",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "20,000 - 27,000",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
            {
                hotelName: "Trident Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "3,000 - 5,500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Vishnupriya Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Padmini Palace Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "The Castle Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Rani Palace Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Sagar Palace Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Rajpal Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            },
			{
                hotelName: "Florence Continental Hotel",
                department: "Housekeeping",
                designation: "Trainee",
                location: "Udaipur (Rajasthan)",
                jobType: "Full Time",
                jobLocation: "Work From Office",
                salaryRange: "5,000 - 7500",
                expiryDate: "2025-1-30",
                submitUrl: "#"
            }
        ];

        let currentIndex = 0;
        const jobsPerLoad = 8;
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
                        <p><strong>Salary:</strong> ${job.salaryRange}</p>
                        <p><strong>applyLast Date:</strong> <span class="expiry-date ${isWarning ? 'warning' : ''}" title="Post expires on ${job.expiryDate}">${job.expiryDate}</span></p>
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