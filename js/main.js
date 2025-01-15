document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    // Handle scroll events for navbar styling
    const handleScroll = () => {
      if (window.scrollY > 0) { // Cambiado de 20 a 0 para que aparezca inmediatamente al hacer scroll
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  
    // Llamar a handleScroll inicialmente para establecer el estado correcto
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });