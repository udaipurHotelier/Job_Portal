// User Login Form Validation
document.getElementById("userLoginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation and redirection logic for user
  if (username === "user" && password === "user123") {
    window.location.href = "index.html"; // Redirect to user home page
  } else {
    alert("Invalid login credentials.");
  }
});

// Employer Login Form Validation
document.getElementById("employerLoginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation and redirection logic for employer
  if (username === "employer" && password === "employer123") {
    window.location.href = "Employer.html"; // Redirect to employer home page
  } else {
    alert("Invalid login credentials.");
  }
});

// Admin Login Form Validation
document.getElementById("adminLoginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation and redirection logic for admin
  if (username === "admin" && password === "admin123") {
    window.location.href = "Admin_Dashboard.html"; // Redirect to admin dashboard
  } else {
    alert("Invalid login credentials.");
  }
});
