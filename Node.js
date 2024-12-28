// server.js (Node.js backend with Express)
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post("/submit-form", (req, res) => {
  const { username, email, message } = req.body;
  
  // Save the data to a file or database (example with JSON file)
  const formData = { username, email, message, timestamp: new Date() };

  fs.readFile("submissions.json", (err, data) => {
    const submissions = err ? [] : JSON.parse(data);
    submissions.push(formData);
    fs.writeFile("submissions.json", JSON.stringify(submissions), (err) => {
      if (err) {
        return res.status(500).send("Error saving data");
      }
      res.status(200).json({ message: "Form submitted successfully" });
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
