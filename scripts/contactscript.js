const contactForm = document.querySelector("#contact-form");
const selectSubject = document.querySelector("#contact-reason");
const formName = document.querySelector("#nameinput");
const formEmail = document.querySelector("#emailinput");
const formMessage = document.querySelector("#message");

const emailError = document.querySelector("#email-form-error");
const nameError = document.querySelector("#name-form-error");


function formValidation(event) {
    event.preventDefault();

    checkError(formName, nameError, 2);

    if (validateEmail(formEmail.value)) {
        formEmail.style.backgroundColor = "ligthgreen";
    } else {
        formEmail.style.backgroundColor = "ligthcoral";
        emailError.style.display = "block";
    }
}

contactForm.addEventListener("submit", formValidation);