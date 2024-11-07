var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("display-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var eamil = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experiance = document.getElementById("experiance").value;
    var skill = document.getElementById("skill").value;
    var resumeHtml = "\n    <h2><br>Resume</br></h2>\n    <h3>Perosnal Infomation</h3>\n    <p><b>Name :</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Eamil :</b> <span contenteditable=\"true\">").concat(eamil, "</span></p>\n    <p><b>Phone :</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p><span contenteditable=\"true\">").concat(education, "</span></p>\n    <h3>Experiance</h3>\n    <p><span contenteditable=\"true\">").concat(experiance, "</span></p>\n    <h3>Skill</h3>\n    <p><span contenteditable=\"true\">").concat(skill, "</span></p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("Resume display element not found");
    }
});
