const checkoutForm = document.querySelector("#checkout-form");

const firstnameInput = document.querySelector("#firstname");
const lastnameInput = document.querySelector("#lastname");
const addressInput = document.querySelector("#address-field");
const zipCodeInput = document.querySelector("#zipcode");
const countryInput = document.querySelector("#country");
const phoneNumberInput = document.querySelector("#checkout-phone");
const emailInput = document.querySelector("#checkout-email");

const emailError = document.querySelector("#email-checkout-error");
const phoneError = document.querySelector("#phone-checkout-error");
const countryError = document.querySelector("#country-checkout-error");
const zipCodeError = document.querySelector("#zipcode-checkout-error");
const addressError = document.querySelector("#address-checkout-error");
const lastnameError = document.querySelector("#lastname-checkout-error");
const firstnameError = document.querySelector("#firstname-checkout-error");

function billingValidation (event){
    event.preventDefault(); 

    checkError(firstnameInput, firstnameError, 2);
    checkError(lastnameInput, lastnameError, 2);
    checkError(addressInput, addressError, 3);
    checkError(zipCodeInput, zipCodeError, 3);
    checkError(countryInput, countryError, 2);
    checkError(phoneNumberInput, phoneError, 8);

    if (validateEmail(emailInput.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    
}

checkoutForm.addEventListener("submit", billingValidation);


