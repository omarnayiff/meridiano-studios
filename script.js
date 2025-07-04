



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

 



window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 20);
  });





  const chatContainer = document.getElementById('chatContainer');
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');

    

    function sendOption(option) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user';
        userMessageDiv.textContent = option;
        chatBox.appendChild(userMessageDiv);

        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot';
        botMessageDiv.textContent = generateResponse(option);
        chatBox.appendChild(botMessageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateResponse(message) {
        if (message.includes('comprar')) {
            return 'Puedes comprar tu sitio web contactándonos directamente. Ofrecemos diseño personalizado y funcionalidades avanzadas.';
        } else if (message.includes('cuesta')) {
            return 'El costo de un sitio web depende de tus necesidades específicas. Contáctanos para una cotización personalizada.';
        } else if (message.includes('asistente virtual')) {
            return 'Nuestros asistentes virtuales incluyen respuestas automáticas, integración con WhatsApp y personalización según tu negocio.';
        } else {
            return 'No entendí tu mensaje. ¿Podrías ser más específico?';
        }
    }

    function redirectToWhatsApp() {
        window.open('https://wa.me/5548991850779?text=¡Hola! Estoy interesado en sus servicios de Meridiano Studios.', '_blank');
    }



    
document.addEventListener('DOMContentLoaded', () => {

  // 1. Seleccionar todos los cards que queremos animar
  const cards = document.querySelectorAll('.work-showcase-card');

  // 2. Configurar el Intersection Observer
  const observerOptions = {
    root: null, // Observa la intersección con el viewport
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando el 10% del card es visible
  };

  // 3. Crear el observador
  const observer = new IntersectionObserver((entries, observer) => {
    // entries es una lista de los elementos que están siendo observados
    entries.forEach(entry => {
      // Si el elemento (entry) está ahora visible en la pantalla...
      if (entry.isIntersecting) {
        // ...añade la clase 'is-visible' para activar la animación CSS
        entry.target.classList.add('is-visible');
        
        // Una vez que el card ha aparecido, dejamos de observarlo para mejorar el rendimiento
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 4. Iniciar la observación para cada card
  cards.forEach(card => {
    observer.observe(card);
  });

});


document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector(".arrow");

      // Expand or collapse the current answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        arrow.textContent = "+";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        arrow.textContent = "-";
      }
    });
  });
});





