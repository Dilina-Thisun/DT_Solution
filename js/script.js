document.addEventListener('DOMContentLoaded', () => {

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 100);
  });

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Parallax Effect
  const heroVisual = document.getElementById('hero-visual');
  const floatingShapes = document.querySelectorAll('.floating-shape');

  function handleParallax() {
    const scrollY = window.scrollY;
    
    if (heroVisual) {
      heroVisual.style.transform = `translateY(${scrollY * 0.25}px)`;
    }

    floatingShapes.forEach((shape, index) => {
      const speed = 0.15 + (index * 0.05);
      shape.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  window.addEventListener('scroll', handleParallax);

  // Intersection Observer for Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -80px 0px"
  });

  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-animate');
    observer.observe(section);
  });

  // Observe cards with staggered effect
  setTimeout(() => {
    document.querySelectorAll('.service-card, .project-card').forEach((card, index) => {
      card.style.transitionDelay = `${index * 80 + 100}ms`; // Better stagger
      observer.observe(card);
    });
  }, 400);

  // Active Navigation Link
  const navLinkItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ==================== BACK TO TOP BUTTON ====================
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});