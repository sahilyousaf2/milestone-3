const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("display-resume") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const eamil = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experiance = (document.getElementById("experiance") as HTMLInputElement).value;
    const skill = (document.getElementById("skill") as HTMLInputElement).value;
    const resumeHtml = `
    <h2><br>Resume</br></h2>
    <h3>Perosnal Infomation</h3>
    <p><b>Name :</b> <span contenteditable="true">${name}</span></p>
    <p><b>Eamil :</b> <span contenteditable="true">${eamil}</span></p>
    <p><b>Phone :</b> <span contenteditable="true">${phone}</span></p>
    <h3>Education :</h3>
    <p><span contenteditable="true">${education}</span></p>
    <h3>Experiance :</h3>
    <p><span contenteditable="true">${experiance}</span></p>
    <h3>Skill :</h3>
    <p><span contenteditable="true">${skill}</span></p>
    `
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    } else {
        console.error("Resume display element not found");
    }
})