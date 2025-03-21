const inputEmail = document.getElementById("emailInput");
const inputPassword= document.getElementById("validatePasswordInput");
const btnValid = document.getElementById("btn-validation-inscription");


btnValid.addEventListener("click", checkCredentials);



function checkCredentials(){
    //il faudra appeler l'API pour vérifier les credentials en BDD !
    
    if(inputEmail.value == "test@mail.com" && inputPassword.value == "123"){
        inputEmail.classList.remove("is-invalid");
        inputPassword.classList.remove("is-invalid");
    }
    else {
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}
