const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById('passwordInput');
const btnLogin = document.getElementById('btnlogin');
const loginForm = document.getElementById("login-form");
const ApiUrl = "http://127.0.0.1:8000/api/";

loginForm.addEventListener("click", checkCredentials);
// Gestion des COOKIES :

const tokenCookieName = "accesstoken";

const btnLogout = document.getElementById("btn-logout");
const roleCookieName = "role";

btnLogout.addEventListener("click", ( ) => {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload();
})
function getRole(){
    return getCookie(roleCookieName);
}


btnLogin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //il faudra appeler l'API pour vérifier les credentials en BDD !

    // on récupère les données du formulaire d'inscription de manière organisée dans un FormData :
    let dataForm = new FormData(loginForm);

    // on définit le type de données et leur format, et le header :
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    // on initialise le body, avec le contenu :
    const raw = JSON.stringify({
      "username": dataForm.get("email"), // l'email devient l'identifiant name nécessaire à la connexion
      "password": dataForm.get("password")
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(ApiUrl + "login", requestOptions)
      .then(response =>{
        if(response.ok){
            return response.json();
        } else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
      })
      .then(result => {
        mailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        //il faudra récuperer le vrai token :
        const token = result.apiToken;
        setToken(token);
        // placer le TOKEN en COOKIE
        setCookie(roleCookieName, result.roles[0], 7);
        window.location.replace("/"); 
      })
      .catch((error) => console.error(error));
}

























function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Gestion de la connexion :
function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else return true;
}
