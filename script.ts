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
    <p><b>Name :</b> ${name}</p>
    <p><b>Eamil :</b> ${eamil}</p>
    <p><b>Phone :</b> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experiance</h3>
    <p>${experiance}</p>
    <h3>kill</h3>
    <p${skill}</p>
    `
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    } else {
        console.error("Resume display element not found");
    }
})