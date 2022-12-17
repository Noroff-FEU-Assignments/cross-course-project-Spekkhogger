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

var counter = 0; 


function billingValidation (event){
    event.preventDefault(); 

    checkError(firstnameInput, firstnameError, 1);
    checkError(lastnameInput, lastnameError, 1);
    checkError(addressInput, addressError, 2);
    checkError(zipCodeInput, zipCodeError, 2);
    checkError(countryInput, countryError, 1);
    checkError(phoneNumberInput, phoneError, 7);

    if (validateEmail(emailInput.value)) {
        emailError.style.display = "none";
        emailInput.style.border = "2px solid green";
        counter += 1;
    } else {
        emailError.style.display = "block";
        emailInput.style.border = "2px solid red";
    }

    console.log(counter); 

    if (counter >= 7) {
        window.location.href = "checkoutsuccess.html"; 
    }
}

checkoutForm.addEventListener("submit", billingValidation);