// Script de VALIDATION DES CHAMPS du SIGN UP : 
const ApiUrl = "http://127.0.0.1:8000/api/";
const inputName = document.getElementById("nom");
const inputLname = document.getElementById("prenom");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputPasswordValidate = document.getElementById("validatePasswordInput");
// gestion du bouton inscription pour qu'il n'apparaisse que si les champs sont corrects :
const btnValid = document.getElementById("btn-validation-inscription");

const formInscr = document.getElementById("login-form");

btnValid.addEventListener("click", InscrireUtilisateur);

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
    if(inputPassw.value == inputConfPassw.value){
        inputConfPassw.classList.add("is-valid");
        inputConfPassw.classList.remove("is-invalid");
        return true
    }
     else {
        inputConfPassw.classList.add("is-invalid");
        inputConfPassw.classList.remove("is-valid");
        return false;
     }   
       
}



// le Fetch pour envoyer les données vers l'API du projet, et enregistrer dans la BDD les données users :

function InscrireUtilisateur(){
    // on récupère les données du formulaire d'inscription de manière organisée dans un FormData :
    let dataForm = new FormData(formInscr);

    // on définit le type de données et leur format, et le header :
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    // on initialise le body, avec le contenu :
    const raw = JSON.stringify({
      "firstName": dataForm.get("name"),
      "lastName": dataForm.get("lname"),
      "email": dataForm.get("email"),
      "password": dataForm.get("password")
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(ApiUrl + "registration", requestOptions)
      .then(response =>{
        if(response.ok){
            return response.json();
        } else {
            alert("Erreur lors de l'inscription");
        }
      })
      .then(result => {
        // si l'inscription est un succès, redirection vers la page de login :
        alert("Bravo" + dataForm.get("name") +", vous êtes inscrit, connectez-vous.")
        document.location.href="/login";  
        console.log(result);
      })
      .catch((error) => console.error(error));
}