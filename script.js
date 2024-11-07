// Get references to the form and display area
var form = document.getElementById("resume-form");
var displayResume = document.getElementById("display-resume");
var shareableLinkContainer = document.getElementById(
  "shareable-link-container"
);
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf-button");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  // Collect input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var education = document.getElementById("education").value;
  var experiance = document.getElementById("experiance").value;
  var skill = document.getElementById("skill").value;

  // Generate the resume content dynamically
  var resumeHTML = `
        <div style="
            padding: 20px;
            background-color: white;
            width: 80%;
            margin: 0px auto;
            box-shadow: 0 0 20px rgba(0, 0, 0, 1);
            border-radius: 10px;"   
            class="resume">
            <h1 
            >Resume</h1>
            <div class="personal-info">
                <h3 style="font-size: 22px;
                    padding: 2%;
                    text-align: center;
                    margin: 20px 0px 10px;
                    color: black;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(93, 93, 93, 0.5);
                    margin-top: 5%;
                    text-align: left;"
                    >Personal Information :</h3>

                <ul style="font-size: 18px;">
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                </ul>
            </div>
            <div class="education">

                <h3 style="font-size: 22px;
                    padding: 2%;
                    text-align: center;
                    margin: 20px 0px 10px;
                    color: black;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(93, 93, 93, 0.5);
                    margin-top: 5%;
                    text-align: left;"
                    >Education :</h3>
                    <ul style="font-size: 18px;">
                        <li> <strong>Education :</strong> ${education}</li>
                    </ul>
            </div>
            <div class="experiance">
                <h3 style="font-size: 22px;
                    padding: 2%;
                    text-align: center;
                    margin: 20px 0px 10px;
                    color: black;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(93, 93, 93, 0.5);
                    margin-top: 5%;
                    text-align: left;"
                    >Experiance :</h3>
                    <ul style="font-size: 18px;">
                        <li> <strong>Experiance :</strong> ${experiance}</li>
                    </ul>
            </div>
            <div class="skills">
                    <h3 style="font-size: 22px;
                    padding: 2%;
                    text-align: center;
                    margin: 20px 0px 10px;
                    color: black;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(93, 93, 93, 0.5);
                    margin-top: 5%;
                    text-align: left;"
                    >Skills :</h3>
                    <ul style="font-size: 18px;">
                        <li > <strong>Skills :</strong> ${skill}</li>
                    </ul>
            </div>
        </div>
    `;

  // Display the generated resume
  displayResume.innerHTML = resumeHTML;

  // Show download button and link container
  shareableLinkContainer.style.display = "block";

  // Generate shareable link
  var shareableURL = window.location.href + "#resume";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener("click", function () {
  // Get the resume content
  var resumeContent = displayResume.innerHTML;

  // Create a new window for printing
  var printWindow = window.open("", "", "width=800,height=600");
  printWindow.document.open();

  // Add content and basic styling to the print window
  printWindow.document.write(`
        <html>
            <head>
                <title>Resume</title>
                <style>
                    body { font-family: Poppins,Arial, sans-serif; padding: 20px; }
                    .resume { max-width: 800px; margin: 0 auto; }
                    h2 { color: #333; }
                    h3 { color: #666; border-bottom: 1px solid #ccc; }
                    .personal-info, .education, .experiance, .skills { margin-bottom: 20px; }
                </style>
            </head>
            <body>
                ${resumeContent}
            </body>
        </html>
    `);

  printWindow.document.close();

  // Wait for content to load then print
  setTimeout(function () {
    printWindow.print();
    printWindow.close();
  }, 250);
});

// Load resume from URL if present
window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash === "#resume") {
    var savedResume = localStorage.getItem("lastResume");
    if (savedResume) {
      displayResume.innerHTML = savedResume;
      shareableLinkContainer.style.display = "block";
    }
  }
});
