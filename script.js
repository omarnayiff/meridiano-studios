



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





  const chatContainer = document.getElementById('chatContainer');
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');

    function toggleChat() {
        if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
            chatContainer.style.display = 'flex';
        } else {
            chatContainer.style.display = 'none';
        }
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Mostrar mensaje del usuario
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user';
        userMessageDiv.textContent = userMessage;
        chatBox.appendChild(userMessageDiv);
        userInput.value = '';

        // Respuesta del bot
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot';
            botMessageDiv.textContent = generateResponse(userMessage);
            chatBox.appendChild(botMessageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

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