import Route from "./Route.js";

// Définir ici vos routes avec l'ajout des nouvelles pages :
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
    new Route("/carte", "La carte", "/pages/carte.html", "/js/galerie.js"),
    new Route("/login", "Sign in", "/pages/auth/login.html", "/js/login.js"),
    new Route("/signup", "Sign up", "/pages/auth/signup.html", "/js/signup.js"),
    new Route("/compte", "Mon compte", "/pages/auth/compte.html", "/js/compte.js"),
    new Route("/editPassword", "Modif MDP", "/pages/auth/editPassword.html", "/js/editPassword.js"),
    new Route("/allRes", "Mes réservations", "/pages/reservations/allRes.html", "/js/allRes.js"),
    new Route("/reserver", "Faire une réservation", "/pages/reservations/reserver.html", "/js/reserver.js"),
];

// le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai_Antique";