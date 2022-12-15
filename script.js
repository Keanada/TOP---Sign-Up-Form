
let pass1Input = document.getElementById('pass1');
let pass2Input = document.getElementById('pass2');
let passP = document.getElementById("passwordCheck");


function checkPass() {
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    if (pass1 != pass2) {
        console.log('HELLO');
        pass1Input.style.cssText = "background-color: rgb(255, 172, 172);";
        pass2Input.style.cssText = "background-color: rgb(255, 172, 172);";
        passP.textContent = "Passwords do not match ";
        
    }  else {
        console.log('PEE');
        pass1Input.style.cssText = "background-color: white";
        pass2Input.style.cssText = "background-color: white; filter: drop-shadow(0.2rem 0.5rem 0.5rem gray);";
        passP.textContent = "";
    }
   
}

checkPass();