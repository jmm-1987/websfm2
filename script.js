document.addEventListener('DOMContentLoaded', () => {
    // Menú de navegación
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-items');

    // Función para cambiar el estilo del menú al hacer scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Añadir el evento de scroll
    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al cargar para establecer el estado inicial
    handleScroll();

    // Toggle del menú hamburguesa
    if (hamburger && navItems) {
        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Cerrar el menú al hacer click en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navItems.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Observer para las tarjetas de servicios
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
});

// Cookie Notice
document.addEventListener('DOMContentLoaded', function() {
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');
    const cookiePolicyLink = document.getElementById('cookiePolicyLink');

    // Check if user has already made a choice
    if (!localStorage.getItem('cookieChoice')) {
        setTimeout(() => {
            cookieNotice.classList.add('show');
        }, 2000);
    }

    // Handle accept button
    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'accepted');
        cookieNotice.classList.remove('show');
    });

    // Handle reject button
    rejectCookies.addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'rejected');
        cookieNotice.classList.remove('show');
    });

    // Handle cookie policy link
    cookiePolicyLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your cookie policy page URL here
        window.location.href = '/politica-cookies.html';
    });
});

// Cookie Notice
const cookieNotice = document.getElementById('cookieNotice');
const acceptCookies = document.getElementById('acceptCookies');
const rejectCookies = document.getElementById('rejectCookies');
const cookiePolicyLink = document.getElementById('cookiePolicyLink');

// Mostrar el aviso de cookies después de 2 segundos si no se ha hecho una elección
setTimeout(() => {
    if (!localStorage.getItem('cookieChoice')) {
        cookieNotice.style.transform = 'translateY(0)';
    }
}, 2000);

// Manejar la aceptación de cookies
acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'accepted');
    cookieNotice.style.transform = 'translateY(100%)';
});

// Manejar el rechazo de cookies
rejectCookies.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'rejected');
    cookieNotice.style.transform = 'translateY(100%)';
});

// Enlace a la política de cookies
cookiePolicyLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para mostrar la política de cookies
    console.log('Mostrar política de cookies');
});

// Manejo del modal de cotización
document.addEventListener('DOMContentLoaded', function() {
    const cotizaModal = document.getElementById('cotizaModal');

    if (cotizaModal) {
        // Cerrar modal al hacer clic fuera
        cotizaModal.addEventListener('click', function(e) {
            if (e.target === cotizaModal) {
                cotizaModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        // Cerrar modal con la tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cotizaModal.classList.contains('show')) {
                cotizaModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        // Prevenir que el clic en los enlaces cierre el modal
        const contactOptions = document.querySelectorAll('.contact-option');
        contactOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    }
});