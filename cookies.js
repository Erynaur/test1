document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    // Ajoutez ici la logique pour activer vos cookies
});

document.getElementById("decline-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "false");
    // Ajoutez ici la logique pour désactiver vos cookies si nécessaire
});

// Vérification du consentement précédent
if (localStorage.getItem("cookiesAccepted") === "true") {
    // Les cookies sont déjà acceptés
    // Activez les cookies ici si nécessaire
    document.getElementById("cookie-banner").style.display = "none";
} else if (localStorage.getItem("cookiesAccepted") === "false") {
    // Les cookies ont été refusés
    // Désactivez les cookies ici si nécessaire
    document.getElementById("cookie-banner").style.display = "none";
}
if (localStorage.getItem("cookiesAccepted") === "true") {
    // Charger Google Analytics ou tout autre service de suivi
    gtag('config', 'G-QWJKS7VPFC'); // Exemple de Google Analytics
}
