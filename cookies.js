// Vérifie si le consentement a déjà été donné
if (!localStorage.getItem('cookies_accepted')) {
    document.getElementById('cookie-banner').style.display = 'block'; // Affiche la bannière
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';  // Cache la bannière après acceptation
    // Ajoute ici le code Google Analytics pour activer le suivi
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
});

document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_accepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';  // Cache la bannière après refus
    // Ne pas activer Google Analytics si l'utilisateur refuse
});
