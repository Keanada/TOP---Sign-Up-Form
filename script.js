

let pass1Input = document.getElementById('passw');
let pass2Input = document.getElementById('passwCheck');


function checkPass() {
    let pass1 = document.getElementById('passw').value;
    let pass2 = document.getElementById('passwCheck').value;
    if (pass1 != pass2) {
        console.log('HELLO');
        pass1Input.style.cssText = "background-color: rgb(255, 172, 172);";
        pass2Input.style.cssText = "background-color: rgb(255, 172, 172);";
        passMatch.textContent = "Passwords do not match ";
        
    }  else {
        console.log('PEE');
        pass1Input.style.cssText = "background-color: white; filter: drop-shadow(0 0 0 gray); border: 0.121vw solid #212422;";
        pass2Input.style.cssText = "background-color: white; filter: drop-shadow(0 0 0 gray); border: 0.121vw solid #212422;";
        passMatch.textContent = "";
    }
   
}
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


// function checkInput() {
//     if (fName == "") {
//         fNameCheck.textContent = "First name is empty";
//     } else {
//         fNameCheck.textContent = "";
//     }

//     if (lNameCheck == "") {
//         lNameCheck.textContent = "Last name is empty";
//     } else {
//         lNameCheck.textContent = "";
//     }


// }

