// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // prevent the default jump
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Show alert on form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent actual submission (for now)
  alert("Thank you! Your message has been sent.");
  contactForm.reset(); // Optional: clear the form
});
