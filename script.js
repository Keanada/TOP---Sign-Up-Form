

let fNameCheck = document.getElementById('fNameCheck');
let lNameCheck = document.getElementById('lNameCheck');
let phoneCheck = document.getElementById('phoneCheck');
let emailCheck = document.getElementById('emailCheck');
let passCheck = document.getElementById('passw');
let passError = documnet.getElementById('passCheck');
let passMatch = document.getElementById('passMatch');

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
        pass1Input.style.cssText = "background-color: white; filter: drop-shadow(0.2rem 0.5rem 0.5rem gray); border: 0.121vw solid #212422;";
        pass2Input.style.cssText = "background-color: white; filter: drop-shadow(0.2rem 0.5rem 0.5rem gray); border: 0.121vw solid #212422;";
        passMatch.textContent = "";
    }
   
}



let fName = document.querySelector('#fName');
let lName = document.querySelector('#lName');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let passC = document.querySelector('#passw')

fName.addEventListener("input", function (event) {
    if (fName.value === "") {
        fNameCheck.textContent = "Enter name";
    } else {
        fNameCheck.textContent = ""
    }
})

lName.addEventListener("input", function (event) {
    if (lName.value === "") {
        lNameCheck.textContent = "Enter last name";
    } else {
        lNameCheck.textContent = ""
    }
})

email.addEventListener("input", function (event) {
    if (email.value === "") {
        emailCheck.textContent = "Enter email";
    } else {
        emailCheck.textContent = ""
    }
})

phone.addEventListener("input", function (event) {
    if (phone.value === "") {
        phoneCheck.textContent = "Enter phone number";
    } else {
        phoneCheck.textContent = ""
    }
})
phone.addEventListener("input", function (event) {
    if (phone.value === "") {
        phoneCheck.textContent = "Enter phone number";
    } else {
        phoneCheck.textContent = ""
    }
})

passC.addEventListener("input", function (event) {
    if (passC.value === "") {
        passError.textContent = "Enter phone number";
    } else {
        passError.textContent = "";
    }
})


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

