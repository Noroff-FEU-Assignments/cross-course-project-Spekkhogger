function validateEmail(emailToValidate) {
    const regEx = /\S+@\S+\.\S+/; 
    const matchPattern = regEx.test(emailToValidate); 
    return matchPattern;
}


function validateLength(input, reqLen){
    return String(input).trim().length > reqLen;
}

function checkError(input, error, length){
    if (validateLength(input.value, length)){
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}