const contactForm = document.querySelector("#contact-form");
const selectSubject = document.querySelector("#contact-reason");
const formName = document.querySelector("#nameinput");
const formEmail = document.querySelector("#emailinput");
const formMessage = document.querySelector("#message");

const emailError = document.querySelector("#email-form-error");
const nameError = document.querySelector("#name-form-error");



function formValidation(event) {
    event.preventDefault();

    if (formName.value.trim().length > 2) {
        formName.style.backgroundColor = "green"; 
    } else {
        nameError.style.display = "block"; 
    }

    if (validateEmail(formEmail.value)) {
        formEmail.style.backgroundColor = "ligthgreen";
    } else {
        formEmail.style.backgroundColor = "ligthcoral";
        emailError.style.display = "block";
    }
}

function validateEmail(emailToValidate) {
    const regEx = /\S+@\S+\.\S+/; 
    const matchPattern = regEx.test(emailToValidate); 
    return matchPattern;
}

contactForm.addEventListener("submit", formValidation);