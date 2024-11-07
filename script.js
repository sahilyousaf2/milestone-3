// Get references to the form and display area
var form = document.getElementById('resume-form');
var displayResume = document.getElementById('display-resume');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf-button');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skill = document.getElementById('skill').value;

    // Generate the resume content dynamically
    var resumeHTML = `
        <div class="resume">
            <h2 style="font-size: 30px; font-weight: bold;">Resume</h2>
            <div class="personal-info">
                <h3 style="font-size: 20px;">Personal Information :</h3>
                <p><strong style="font-size: 20px;">Name:</strong> <span style="font-size: 20px;">${name}</span></p>
                <p><strong style="font-size: 20px;">Email:</strong> <span style="font-size: 20px;">${email}</span></p>
                <p><strong style="font-size: 20px;">Phone:</strong> <span style="font-size: 20px;">${phone}</span></p>
            </div>
            <div class="education">
                <h3 style="font-size: 20px;">Education :</h3>
                <p><span style="font-size: 20px;">${education}</span></p>
            </div>
            <div class="experiance">
                <h3 style="font-size: 20px;">Experience :</h3>
                <p> <span style="font-size: 20px;">${experiance}</span></p>
            </div>
            <div class="skills">
                <h3 style="font-size: 20px;">Skills :</h3>
                <p> <span style="font-size: 20px;">${skill}</span></p>
            </div>
        </div>
    `;

    // Display the generated resume
    displayResume.innerHTML = resumeHTML;
    
    // Show download button and link container
    shareableLinkContainer.style.display = 'block';
    
    // Generate shareable link
    var shareableURL = window.location.href + '#resume';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', function() {
    // Get the resume content
    var resumeContent = displayResume.innerHTML;
    
    // Create a new window for printing
    var printWindow = window.open('', '', 'width=800,height=600');
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
    setTimeout(function() {
        printWindow.print();
        printWindow.close();
    }, 250);
});

// Load resume from URL if present
window.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash === '#resume') {
        var savedResume = localStorage.getItem('lastResume');
        if(savedResume) {
            displayResume.innerHTML = savedResume;
            shareableLinkContainer.style.display = 'block';
        }
    }
});
