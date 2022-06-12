const form = document.querySelector("#contactform");
const fullName = document.querySelector("#fullName");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");


function validateForm() {
    event.preventDefault();

    if(checkLength(fullName.value, 2) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }


    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }


    if(checkLength(adress.value, 25) === true) {
        adressError.style.display = "none";
    }
    else {
        adressError.style.display = "block";
    }


    if(checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }


    console.log("hello");

}

form.addEventListener("submit", validateForm)

function checkLength(value, len) {

    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


