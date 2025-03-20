const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById('passwordInput');
const btnLogin = document.getElementById('btnlogin');
// Script commun à toutes les pages ( => index.html)
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
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        mailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        //il faudra récuperer le vrai token :
        const token = "hdhmlikzdhhqjdzajklqji";
        setToken(token);
        // placer le TOKEN en COOKIE
        setCookie("role", "admin", 7);
        
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

























function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
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
