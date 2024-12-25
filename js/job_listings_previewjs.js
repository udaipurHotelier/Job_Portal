// Sample data for job listings
        const jobData = [
            {
                title: "Front Desk Receptionist",
                location: "Hotel Sunshine, Los Angeles, CA",
                description: "Responsible for greeting guests, managing reservations, and handling inquiries.",
                applyLink: "#"
            },
            {
                title: "Housekeeping Supervisor",
                location: "Ocean View Resort, Miami, FL",
                description: "Oversee housekeeping operations, ensuring cleanliness standards are met.",
                applyLink: "#"
            },
            {
                title: "Executive Chef",
                location: "Mountain Retreat Lodge, Denver, CO",
                description: "Lead kitchen operations, menu planning, and supervise kitchen staff.",
                applyLink: "#"
            },
            {
                title: "Event Manager",
                location: "Grand Royal Hotel, New York, NY",
                description: "Plan and execute events, coordinate with clients, and manage budgets.",
                applyLink: "#"
            }
        ];

        // Dynamically populate job list
        const jobList = document.getElementById('jobList');
        jobData.forEach(job => {
            const jobItem = document.createElement('li');
            jobItem.classList.add('job-item');

            jobItem.innerHTML = `
                <div class="job-title">${job.title}</div>
                <div class="job-details">${job.location}</div>
                <div class="job-description">${job.description}</div>
                <a href="${job.applyLink}" class="apply-btn">Applied List</a>
            `;

            jobList.appendChild(jobItem);
        });