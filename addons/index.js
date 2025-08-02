const navbar = document.getElementById('navbar');
const logo = document.getElementById('navbar-logo');
const title = document.getElementById('navbar-title');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-fixed'); 
        navbar.classList.remove('bg-white');
        logo.src = './assets/aja-icon-small.png'; // Logo claro
        title.classList.remove('text-white');
        title.classList.add('text-black');
        links.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-black');
        });
    } else {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.add('bg-white');
        logo.src = './assets/aja-icon-small-black.png'; // Logo oscuro
        title.classList.add('text-white');
        title.classList.remove('text-black');
        links.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-black');
        });
    }
});

// Menú móvil
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Scroll suave para todos los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Ajuste para la navbar fija
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const messageDiv = document.getElementById('form-message');
    
    // Simulación de envío (en un caso real, aquí enviarías los datos a tu servidor)
    messageDiv.className = 'mt-4 p-4 rounded-lg bg-green-100 border border-green-300 text-green-700';
    messageDiv.textContent = '¡Mensaje enviado correctamente! Te contactaremos pronto.';
    messageDiv.classList.remove('hidden');
    
    // Limpiar formulario
    this.reset();
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 5000);
});