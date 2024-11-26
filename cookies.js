// Vérifie si le consentement a déjà été donné
if (!localStorage.getItem('cookies_accepted')) {
    document.getElementById('cookie-banner').style.display = 'block'; // Affiche la bannière
}

document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';  // Cache la bannière après acceptation
   <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QWJKS7VPFC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QWJKS7VPFC');
</script>
    gtag('consent', 'update', { 'analytics_storage': 'granted' });
});

document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookies_accepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';  // Cache la bannière après refus
    // Ne pas activer Google Analytics si l'utilisateur refuse
});
