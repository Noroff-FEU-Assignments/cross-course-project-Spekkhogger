const contactForm = document.querySelector("#contact-form");
const selectSubject = document.querySelector("#contact-reason");
const formName = document.querySelector("#nameinput");
const formEmail = document.querySelector("#emailinput");
const formMessage = document.querySelector("#message");




function formValidation(event) {
    event.preventDefault();

    if (validateEmail(formEmail.value)) {
        formEmail.style.backgroundColor = "green"
    } else {
        formEmail.style.backgroundColor = "red"
    }
}

function validateEmail(emailToValidate) {
    const regEx = /\S+@\S+\.\S+/; 
    const matchPattern = regEx.test(emailToValidate); 
    return matchPattern;
}

function lengthValidation (name, reqLenght){
    return String(name).trim().length > reqLenght;
}

contactForm.addEventListener("submit", formValidation);