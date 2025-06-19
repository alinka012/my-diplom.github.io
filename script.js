document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
  
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 10;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        // Закрываем меню после клика
        nav.classList.remove('open');
      });
    });
    // Бургер кнопка
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
  });
  