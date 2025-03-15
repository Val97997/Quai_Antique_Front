import Route from "./Route.js";

// Définir ici vos routes avec l'ajout des nouvelles pages :
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
    new Route("/carte", "La carte", "/pages/carte.html", "/js/galerie.js"),
];

// le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai_Antique";