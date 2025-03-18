// Script de VALIDATION DES CHAMPS du SIGN UP : 

const inputName = document.getElementById("nom");
const inputLname = document.getElementById("prenom");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputPasswordValidate = document.getElementById("validatePasswordInput");
// gestion du bouton inscription pour qu'il n'apparaisse que si les champs sont corrects :
const btnValid = document.getElementById("btn-validation-inscription");

inputName.addEventListener("keyup", () => {
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
});
inputLname.addEventListener("keyup", () => {
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
});
inputEmail.addEventListener("keyup", () => {
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
});
inputPassword.addEventListener("keyup", () => {
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
});
inputPasswordValidate.addEventListener("keyup", () => {
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
});

function validateForm(){
    const nameOk = validateRequired(inputName);
    const lnameOk = validateRequired(inputLname);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfOk = validateConfPassword(inputPassword, inputPasswordValidate);
    if(nameOk && lnameOk && mailOk && passwordOk && passwordConfOk){
        btnValid.disabled = false;
    }
    else {
        btnValid.disabled= true;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
        // c'est ok
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
        // ce n'est pas ok
    }
}

function validateMail(input) {
    // définir mon regex :
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    // définir mon regex :
    const passwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const mdpUser = input.value;
    if(mdpUser.match(passwRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfPassword(inputPassw, inputConfPassw){
    (inputPassw.value == inputConfPassw.value) ? (inputConfPassw.classList.add("is-valid"), inputConfPassw.classList.remove("is-invalid"), true)
    : (inputConfPassw.classList.add("is-invalid"), inputConfPassw.classList.remove("is-valid"), false);
       
}