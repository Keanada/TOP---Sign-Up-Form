let errorStyle = "transition: 0.3s; background-color: rgb(255, 172, 172);";
let inputStyle = "background-color: white; filter: drop-shadow(0 0 0 gray); border: 0.121vw solid #212422;";

let fNameCheck = document.getElementById('fNameCheck');
let lNameCheck = document.getElementById('lNameCheck');
let phoneCheck = document.getElementById('phoneCheck');
let emailCheck = document.getElementById('emailCheck');
let passError = document.getElementById('passError');

let fName = document.querySelector('#fName');
let lName = document.querySelector('#lName');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let firstPass = document.querySelector('#passw');

function checkPass() {
    let password = document.getElementById('passw').value;
    let passConfirm = document.getElementById('passwCheck').value;
    let passwordInput = document.getElementById('passw');
    let passConfirmInput = document.getElementById('passwCheck');

    if (password != passConfirm) {
        passwordInput.style.cssText = errorStyle;
        passConfirmInput.style.cssText = errorStyle;
        passMatch.textContent = "Passwords do not match ";
    } else {
        passwordInput.style.cssText = inputStyle;
        passConfirmInput.style.cssText = inputStyle;
        passMatch.textContent = "";
    }
}

fName.addEventListener("input", function (event) {
    if (fName.value === "") {
        fNameCheck.textContent = "Please enter your name";
    } else {
        fNameCheck.textContent = "";
    }
});

lName.addEventListener("input", function (event) {
    if (lName.value === "") {
        lNameCheck.textContent = "Please enter your last name";
    } else {
        lNameCheck.textContent = "";
    }
});

email.addEventListener("input", function (event) {
    if (email.value === "") {
        emailCheck.textContent = "Please enter an email";
    } else {
        emailCheck.textContent = "";
    }
});

phone.addEventListener("input", function (event) {
    if (phone.value === "") {
        phoneCheck.textContent = "Please enter phone number";
    } else {
        phoneCheck.textContent = "";
    }
});

firstPass.addEventListener("input", function (event) {
    if (firstPass.value === "") {
        passError.textContent = "Please enter a password";
    } else {
        passError.textContent = "";
    }
});

checkPass();