// Function to handle form field completion validation
        function checkFormCompletion() {
            const form = document.getElementById("joiningLetterForm");
            const inputs = form.querySelectorAll("input[required]");
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

            const downloadBtn = document.getElementById("downloadBtn");
            if (allFilled) {
                downloadBtn.style.display = "block"; // Show button if form is filled
            } else {
                downloadBtn.style.display = "none"; // Hide button if form is incomplete
            }
        }

        // Function to generate the joining letter preview
        function generateLetter() {
            const companyName = document.getElementById("companyName").value.toUpperCase();
            const candidateName = document.getElementById("candidateName").value.toUpperCase();
            const lastName = document.getElementById("lastName").value.toUpperCase();
            const candidateAddress = document.getElementById("candidateAddress").value;
            const department = document.getElementById("department").value.toUpperCase();
            const designation = document.getElementById("designation").value.toUpperCase();
            const salary = document.getElementById("salary").value;
            const dateOfJoining = document.getElementById("dateOfJoining").value;
            const location = document.getElementById("location").value;
            const hrName = document.getElementById("hrName").value.toUpperCase();
            const officeAddress = document.getElementById("officeAddress").value;
            const phoneNo = document.getElementById("phoneNo").value;
            const emailId = document.getElementById("emailId").value;
            const probationPeriod = document.getElementById("probationPeriod").value;
            const probationNoticePeriod = document.getElementById("probationNoticePeriod").value;
            const postProbationNoticePeriod = document.getElementById("postProbationNoticePeriod").value;

            // Get the file input for the logo and convert it to an image URL
            const companyLogoFile = document.getElementById("companyLogo").files[0];
            const logoURL = URL.createObjectURL(companyLogoFile);

			// Get the current letter date in dd/mm/yy format
    const letterDate = formatDate(new Date().toISOString().split("T")[0]);

            // Generate letter content dynamically
            const letterContent = `
                <h2 style="text-align:center;">Joining Letter</h2>
				<div class="logo" style="text-align:center;">
                    <img src="${logoURL}" alt="Company Logo">
                </div>
                <p><strong>Date:</strong> ${letterDate}</p>
                <p>Mr. <strong>${lastName}</strong>,</p>
                <p>${candidateAddress}</p>
                <p>Dear Mr. <strong>${candidateName}</strong>,</p>
                <p>Welcome to <strong>${companyName}</strong>!</p>
                <p>
                    It gives us great pleasure to offer the role of <strong>${department}</strong>, <strong>${designation}</strong>, 
                    for our property <strong>${companyName}</strong> based in <strong>${location}</strong> for which you interviewed with us.
                </p>
                <p>
                    Compensation for the said <strong>${designation}</strong> will be <strong>${salary} INR</strong> per month.
                </p>
                <p>
                    Accordingly, we will arrange to issue you a detailed letter of appointment on the date of your joining us, 
                    which we agreed between us on or before <strong>${dateOfJoining}</strong>. After successful completion of 
                    <strong>${probationPeriod}</strong> months’ probation period, other benefits or compliance (as per eligibility or criteria) 
                    will be applicable.
                </p>
                <p>
                    We request you to go through the same and also note that providing resignation in the probation period, 
                    a <strong>${probationNoticePeriod}</strong> days’ notice period needs to be served. After the probation period, 
                    a <strong>${postProbationNoticePeriod}</strong> days’ notice period needs to be served.
                </p>
                <p>If someone leaves without giving notice period, their salary will be on hold.</p>
                <div style="border-bottom:1px solid black;"></div>
                <p>We look forward to you joining our team. We are sure that you will have a bright career with our company.</p>
                <p>Kind Regards,</p>
                <p><strong>HR Department</strong></p>
                <p><strong>${hrName}</strong></p>
                <div style="border-bottom:1px solid black;"></div>
                <p><strong>${companyName}</strong></p>
                <p>${officeAddress}</p>
                <p>${phoneNo} | ${emailId}</p>
            `;

            // Insert the generated content into the preview container
            document.getElementById("joiningLetterPreview").innerHTML = letterContent;

            // Call function to check if form is fully filled
            checkFormCompletion();
        }
		// Function to format date to dd/mm/yy
function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
}
		
        // Add event listener to track form changes
        const formInputs = document.querySelectorAll("input");
        formInputs.forEach(input => {
            input.addEventListener("input", checkFormCompletion);
        });