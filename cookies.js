// Vérifiez si l'utilisateur a déjà donné son consentement
if (!localStorage.getItem("cookiesAccepted")) {
    // Afficher la bannière si l'utilisateur n'a pas encore accepté ou refusé
    document.getElementById("cookie-banner").style.display = "block";
}

// Lorsque l'utilisateur accepte les cookies
document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    // Ajoutez ici le code pour activer vos cookies
});

// Lorsque l'utilisateur refuse les cookies
document.getElementById("decline-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "false");
    // Ajoutez ici le code pour ne pas activer les cookies ou désactiver les cookies non essentiels
});
