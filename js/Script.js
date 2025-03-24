// Script commun à toutes les pages ( => index.html)
// Gestion des COOKIES :
const ApiUrl = "http://127.0.0.1:8000/api/";
const tokenCookieName = "accesstoken";

const btnLogout = document.getElementById("btn-logout");
const roleCookieName = "role";


btnLogout.addEventListener("click", ( ) => {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload();
})
export function getRole(){
    return getCookie(roleCookieName);
}

export function setToken(token){
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
export function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else return true;
}



export function showHideElemForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElem = document.querySelectorAll("[data-show]");

    allElem.forEach(element => {
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");    
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");    
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");    
                }
                break;
            case 'client':
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");    
                }
                break;
        }
    })
}

// fonction pour sécuriser l'injection du titre de la photo sous format string :
function sanitizeHtml(text){
    const tempHtml = document.createElement("div");
    tempHtml.innerHTML = text;
    return tempHtml.innerHTML;
}

// Fonction fetch pour gérer la récup des données d'utilisateur :
function getInfoUser(){
    console.log("récup des données user");

    let myHeaders = new Headers();
    myHeaders.append("H-AUTH-TOKEN", getToken());
    // pas de body, car pas de paramètres nécessaire à la requête GET user info
    let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(ApiUrl+"account/me", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else {
            alert("Impossible de récupérer les informations demandées !")
        }
    })
    .then(result => {
        return result;
    })
    .catch(error => {
        console.error("erreur lors de la récupération des données", error);
    });
}