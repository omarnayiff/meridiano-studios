



document.addEventListener('DOMContentLoaded', function() {
    // --- Código existente para el menú hamburguesa ---
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

    // --- CÓDIGO NUEVO PARA LAS TARJETAS DE VIDEO ---
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');

        card.addEventListener('mouseenter', () => {
            if (video) {
                video.play();
            }
        });

        card.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Opcional: Reiniciar el video al inicio al salir
            }
        });
    });
});


const swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".video-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Para não observar novamente
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => {
        observer.observe(card);
    });
});



window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
