 const candidates = [
            // Sample candidate data
            { name: "John Doe", status: "NEW", salary: "5000", language: "English", location: "Udaipur", skills: ["JavaScript", "HTML"], documents: ["Resume"], experience: ["2 years"], phone: "1234567890", whatsapp: "whatsapp://send?phone=1234567890", email: "john@example.com" },
            // Add more candidates as needed
        ];

        let displayedCount = 0;
        const displayLimit = 20;

        function displayCandidates() {
            const candidateList = document.getElementById('candidateList');
            for (let i = displayedCount; i < Math.min(displayedCount + displayLimit, candidates.length); i++) {
                const candidate = candidates[i];
                const candidateDiv = document.createElement('div');
                candidateDiv.className = 'candidate';
                candidateDiv.innerHTML = `
                    <img src="path/to/image.jpg" alt="${candidate.name}" style="width: 50px; height: 50px;">
                    <h3>${candidate.name} (${candidate.status})</h3>
                    <p>Salary: ${candidate.salary} / Per Month</p>
                    <p>Language: ${candidate.language}</p>
                    <p>Location: ${candidate.location}</p>
                    <p>Skills: ${candidate.skills.join(', ')}</p>
                    <p>Documents: ${candidate.documents.join(', ')}</p>
                    <p>Experience: ${candidate.experience.join(', ')}</p>
                    <div class="actions">
                        <button onclick="viewPhone('${candidate.phone}')">View Phone Number</button>
                        <button onclick="sendMessage('${candidate.whatsapp}')">Send Message</button>
                        <button onclick="inviteInterview('${candidate.email}')">Invite for Interview</button>
                        <button onclick="removeCandidate(${i})">Remove Candidate</button>
                    </div>
                `;
                candidateList.appendChild(candidateDiv);
            }
            displayedCount += displayLimit;
            if (displayedCount >= candidates.length) {
                document.getElementById('showMore').classList.add('hidden');
            }
        }

        function showMore() {
            displayCandidates();
        }

        function viewPhone(phone) {
            alert(`Phone Number: ${phone}`);
        }

        function sendMessage(whatsapp) {
            window.open(whatsapp);
        }

        function inviteInterview(email) {
            window.location.href = `mailto:${email}`;
        }

        function removeCandidate(index) {
            candidates.splice(index, 1);
            document.getElementById('candidateList').innerHTML = '';
            displayedCount = 0;
            displayCandidates();
        }

        // Initial display
        displayCandidates();

        function logout() {
            // Logout logic here
            alert("Logged out successfully.");
        }