// Mock Data
        const candidates = [
            {
                img: 'imge/logo.jpg',
                name: 'AUGEST SONI',
                department: 'FRONT OFFICE',
                location: 'UDAIPUR',
                designation: 'ASSOCIATE',
                languages: ['ENGLISH', 'HINDI'],
                skills: ['SEO', 'Content Marketing'],
                documents: ['Aadhar Card', 'PAN Card'],
                experience: '3 years',
                phone: '+919079268663',
                resumeUrl: 'resumes/jane_smith_resume.pdf'
            },
			{
                img: 'imge/logo.jpg',
                name: 'AKASH SONI',
                department: 'HUMAN RESOURCE',
                location: 'UDAIPUR',
                designation: 'EXECUTIVE',
                languages: ['ENGLISH', 'HINDI'],
                skills: ['TRANING', 'RECURTMENT', 'PAYROLL'],
                documents: ['Aadhar Card', 'PAN Card', 'Resume', 'Marksheet'],
                experience: '4 year',
                phone: '+919462542454',
                resumeUrl: 'RESU/AKASH.PDF'
            }
            
        ];

        // Populate Candidate List
        const candidateList = document.getElementById('candidateList');
        candidates.forEach((candidate, index) => {
            const candidateDiv = document.createElement('div');
            candidateDiv.className = 'candidate';

            candidateDiv.innerHTML = `
                <img src="${candidate.img}" alt="${candidate.name}">
                <div class="info">
                    <h3>${candidate.name}</h3>
                    <p><strong>Department:</strong> ${candidate.department}</p>
                    <p><strong>Location:</strong> ${candidate.location}</p>
                    <p><strong>Designation:</strong> ${candidate.designation}</p>
                    <p><strong>Languages Known:</strong> ${candidate.languages.join(', ')}</p>
                    <p><strong>Skills:</strong> ${candidate.skills.join(', ')}</p>
                    <p><strong>Experience:</strong> ${candidate.experience}</p>
                    <p><strong>Documents:</strong> ${candidate.documents.join(', ')}</p>
                    <p><strong>Phone:</strong> <span id="phone-${index}" style="display:none">${candidate.phone}</span></p>
                </div>
                <div class="actions">
                    <button onclick="viewPhone(${index})">View Phone No</button>
                    <button onclick="sendMessage('${candidate.phone}')">Send Message</button>
                    <button onclick="downloadResume('${candidate.resumeUrl}')">Download Resume</button>
                </div>
            `;

            candidateList.appendChild(candidateDiv);
        });

        // Search Functionality
        function searchData() {
            const searchName = document.getElementById('searchName').value.toLowerCase();
            const searchDepartment = document.getElementById('searchDepartment').value.toLowerCase();
            const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
            const resultsDiv = document.getElementById('searchResults');
            resultsDiv.innerHTML = '';

            const filteredCandidates = candidates.filter(candidate =>
                (searchName && candidate.name.toLowerCase().includes(searchName)) ||
                (searchDepartment && candidate.department.toLowerCase().includes(searchDepartment)) ||
                (searchLocation && candidate.location.toLowerCase().includes(searchLocation))
            );

            if (filteredCandidates.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            } else {
                filteredCandidates.forEach(candidate => {
                    const resultDiv = document.createElement('div');
                    resultDiv.className = 'candidate';

                    resultDiv.innerHTML = `
                        <img src="${candidate.img}" alt="${candidate.name}">
                        <div class="info">
                            <h3>${candidate.name}</h3>
                            <p><strong>Department:</strong> ${candidate.department}</p>
                            <p><strong>Location:</strong> ${candidate.location}</p>
                            <p><strong>Designation:</strong> ${candidate.designation}</p>
                            <p><strong>Languages Known:</strong> ${candidate.languages.join(', ')}</p>
                            <p><strong>Skills:</strong> ${candidate.skills.join(', ')}</p>
                            <p><strong>Experience:</strong> ${candidate.experience}</p>
                            <p><strong>Documents:</strong> ${candidate.documents.join(', ')}</p>
                            <p><strong>Phone:</strong> <span style="display:none">${candidate.phone}</span></p>
                        </div>
                        <div class="actions">
                            <button onclick="viewPhone(${candidates.indexOf(candidate)})">View Phone No</button>
                            <button onclick="sendMessage('${candidate.phone}')">Send Message</button>
                            <button onclick="downloadResume('${candidate.resumeUrl}')">Download Resume</button>
                        </div>
                    `;

                    resultsDiv.appendChild(resultDiv);
                });
            }
        }

        // View Phone Number
        function viewPhone(index) {
            document.getElementById(`phone-${index}`).style.display = 'inline';
        }

        // Send Message
        function sendMessage(phone) {
            window.open(`https://wa.me/${phone}`, '_blank');
        }

        // Download Resume
        function downloadResume(resumeUrl) {
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = resumeUrl.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Logout
        function logout() {
            alert('You have been logged out.');
            // Redirect to login page logic
        }

        // Simulate login name fetch
        document.getElementById('guestName').innerText = 'AKASH SONI';