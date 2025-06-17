document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Alterna la clase 'active' en el menú
            hamburgerBtn.classList.toggle('active'); // Alterna la clase 'active' en el botón para la animación
        });

        // Opcional: Cerrar el menú al hacer clic en un enlace (para mejorar la UX móvil)
        const navLinks = document.querySelectorAll('.nav-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        });
    }
});