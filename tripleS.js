document.querySelectorAll('nav a').forEach(function(link) {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
        link.classList.add('current');
    }
});