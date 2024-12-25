 let candidates = [
            {
                name: "John Doe",
                department: "IT",
                lastSalary: 60000,
                languages: "English, Spanish",
                location: "New York",
                education: "B.Sc in Computer Science",
                skills: "JavaScript, HTML, CSS",
                phoneNumber: "123-456-7890",
                email: "john@example.com",
                resume: "resume-john.pdf",
                clickCount: 0
            },
            {
                name: "Jane Smith",
                department: "HR",
                lastSalary: 50000,
                languages: "English",
                location: "California",
                education: "MBA",
                skills: "Recruitment, Communication",
                phoneNumber: "987-654-3210",
                email: "jane@example.com",
                resume: "resume-jane.pdf",
                clickCount: 0
            }
        ];

        function loginSignup() {
            document.getElementById('auth-panel').style.display = 'none';
            document.getElementById('employer-panel').style.display = 'block';
        }

        function showPostJobForm() {
            const panelContent = document.getElementById('panel-content');
            panelContent.innerHTML = `
                <h3>Post a Job</h3>
                <div class="form-group">
                    <label for="job-title">Job Title:</label>
                    <input type="text" id="job-title" placeholder="Enter job title">
                </div>
                <div class="form-group">
                    <label for="job-description">Job Description:</label>
                    <textarea id="job-description" placeholder="Enter job description"></textarea>
                </div>
                <div class="form-group">
                    <button onclick="postJob()">Post Job</button>
                </div>
            `;
        }

        function showSearchCandidates() {
            const panelContent = document.getElementById('panel-content');
            panelContent.innerHTML = '<h3>Search Candidates</h3>';
            candidates.forEach((candidate, index) => {
                panelContent.innerHTML += `
                    <div class="candidate">
                        <p><strong>Name:</strong> ${candidate.name}</p>
                        <p><strong>Department:</strong> ${candidate.department}</p>
                        <p><strong>Last Salary:</strong> $${candidate.lastSalary}</p>
                        <p><strong>Languages:</strong> ${candidate.languages}</p>
                        <p><strong>Location:</strong> ${candidate.location}</p>
                        <p><strong>Education:</strong> ${candidate.education}</p>
                        <p><strong>Skills:</strong> ${candidate.skills}</p>
                        <button onclick="viewPhoneNumber(${index})">View Phone Number</button>
                        <button onclick="sendWhatsapp(${index})">Send Message (WhatsApp)</button>
                        <button onclick="inviteForInterview(${index})">Invite for Interview</button>
                        <a href="${candidate.resume}" download>Download Resume</a>
                        <p><strong>View Count:</strong> ${candidate.clickCount}</p>
                    </div>
                `;
            });
        }

        function postJob() {
            alert('Job posted successfully!');
        }

        function viewPhoneNumber(index) {
            alert(`Phone Number: ${candidates[index].phoneNumber}`);
            candidates[index].clickCount++;
            showSearchCandidates();
        }

        function sendWhatsapp(index) {
            alert(`WhatsApp message sent to ${candidates[index].name}`);
        }

        function inviteForInterview(index) {
            alert(`Interview invite sent to ${candidates[index].email}`);
        }