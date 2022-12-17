const contactForm = document.querySelector("#contact-form");
const selectSubject = document.querySelector("#contact-reason");
const formName = document.querySelector("#nameinput");
const formEmail = document.querySelector("#emailinput");
const formMessage = document.querySelector("#message");

const emailError = document.querySelector("#email-form-error");
const nameError = document.querySelector("#name-form-error");

let counter = 0; 

function formValidation(event) {
    event.preventDefault();

    checkError(formName, nameError, 1);

    if (validateEmail(formEmail.value)) {
        formEmail.style.border = "2px solid green"
        counter += 1; 
    } else {
        formEmail.style.border = "2px solid red"
        emailError.style.display = "block";
    }

    if (counter >= 2) {
        window.location.href = "messagesent.html"; 
    }
} 

contactForm.addEventListener("submit", formValidation);