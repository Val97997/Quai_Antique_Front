const galerieimg = document.getElementById("allImages");// on récupère le conteneur des images
// récupérer les infos des images :
let monImg = getImage("titre", "../images/Food.png");
// on insère l'image dans le conteneur HTML :
galerieimg.innerHTML = sanitizeHtml(monImg);

// fonction pour sécuriser l'injection du titre de la photo sous format string :
function sanitizeHtml(text){
    const tempHtml = document.createElement("div");
    tempHtml.innerHTML = text;
    return tempHtml.innerHTML;
}

function getImage(title, urlimg){
    return `
        <div class="col p-3">
            <div class="image-card text-white"> 
                <img class="rounded w-100" src="${urlimg}" alt="Un plat typique">
                <p class="titre-image">${title}</p>
                <div class="action-image-buttons" data-show="admin" >
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    <button data-bs-toggle="modal" data-bs-target="#EditionPhotoModal" type="button" class="btn btn-outline-light"><i class="bi bi-pencil-square"></i></button>
                </div>
            </div>
        </div> `;
}