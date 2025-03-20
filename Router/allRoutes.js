import Route from "./Route.js";

// Définir ici vos routes avec l'ajout des nouvelles pages :
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/carte", "La carte", "/pages/carte.html", [], "/js/galerie.js"),
    new Route("/login", "Sign in", "/pages/auth/login.html", ["disconnected"], "/js/login.js"),
    new Route("/signup", "Sign up", "/pages/auth/signup.html", ["disconnected"], "/js/signup.js"),
    new Route("/compte", "Mon compte", "/pages/auth/compte.html", ["client", "admin"], "/js/compte.js"),
    new Route("/editPassword", "Modif MDP", "/pages/auth/editPassword.html", ["client", "admin"], "/js/editPassword.js"),
    new Route("/allRes", "Mes réservations", "/pages/reservations/allRes.html", ["client"], "/js/allRes.js"),
    new Route("/reserver", "Faire une réservation", "/pages/reservations/reserver.html", ["client"], "/js/reserver.js"),
];

// le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai_Antique";