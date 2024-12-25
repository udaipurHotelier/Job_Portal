const jobs = [
            {
                hotelName: "Hotel Paradise",
                department: "Front Office",
                designation: "Manager",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "25,000 - 30,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel Padmini Palace",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "15,000 - 17,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel GreenMoon",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "10,000 - 17,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel Beyond The Bar",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "10,000 - 15,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel Moon",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "10,000 - 17,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel Castle IN",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "10,000 - 15,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
			{
                hotelName: "Hotel Green View",
                department: "Front Office",
                designation: "Associate",
                location: "Udaipur, India",
                jobType: "Full Time",
                salary: "10,000 - 17,000",
                expiryDate: "2024-12-24",
                applyLink: "#"
            },
            {
                hotelName: "Hotel Luxury Stay",
                department: "Front Office",
                designation: "Executive",
                location: "Udaipur, India",
                jobType: "Part Time",
                salary: "18,000 - 22,000",
                expiryDate: "2024-12-22",
                applyLink: "#"
            }
        ];

        const jobContainer = document.getElementById('job-container');

        const createJobPost = (job) => {
            const today = new Date();
            const expiryDate = new Date(job.expiryDate);
            const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
            const hiddenClass = expiryDate <= today ? 'hidden' : '';
            const expiryClass = diffDays <= 2 ? 'expired' :  '';

            return `
                <div class="job-post ${hiddenClass}">
                    <div class="job-details">
                        <div class="job-heading">${job.hotelName}</div>
                        <div class="department">Department: ${job.department}</div>
                        <div class="designation">Designation: ${job.designation}</div>
                        <div class="location">Location: ${job.location}</div>
                        <div class="job-type">Job Type: ${job.jobType}</div>
                        <div class="salary">Salary: ${job.salary}</div>
                        <div class="expiry-date ${expiryClass}">Expiry Date: ${job.expiryDate} </div>
						<br>
                    </div>
                    <div class="action-buttons">
                        <button class="apply-btn" onclick="window.location.href='${job.applyLink}'">Apply</button>
                        <button class="know-more-btn" onclick="alert('Redirecting to Job Details Page!' )">More</button>
						 <button class="favorite" onclick="saveJob(this)">Save</button>
                        
                    </div>
                </div>
            `;
        };
		
		function saveJob(button) {
    button.innerHTML = "Saved";
    button.disabled = true;
    button.style.color = "black";
}

        const toggleFavorite = (heartElement) => {
            heartElement.classList.toggle('saved');
        };

        const renderJobs = () => {
            jobContainer.innerHTML = jobs.map(createJobPost).join('');
        };
        renderJobs();

        setInterval(() => {
            renderJobs();
        }, 60 * 1000); // Refresh every minute to check for expired jobs