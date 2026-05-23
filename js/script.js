document.addEventListener('DOMContentLoaded', () => {

  /* ===================================== */
  /* PRELOADER */
  /* ===================================== */

  const preloader = document.getElementById('preloader');

  window.addEventListener('load', () => {

    setTimeout(() => {

      preloader.style.opacity = '0';

      preloader.style.visibility = 'hidden';

    }, 700);

  });

  /* ===================================== */
  /* CUSTOM CURSOR */
  /* ===================================== */

  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';

    cursor.style.top = e.clientY + 'px';

  });

  /* ===================================== */
  /* NAVBAR SCROLL EFFECT */
  /* ===================================== */

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {

      navbar.classList.add('scrolled');

    } else {

      navbar.classList.remove('scrolled');

    }

  });

  /* ===================================== */
  /* HAMBURGER MENU */
  /* ===================================== */

  const hamburger = document.getElementById('hamburger');

  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {

    hamburger.addEventListener('click', () => {

      hamburger.classList.toggle('active');

      navLinks.classList.toggle('active');

    });

    document.querySelectorAll('.nav-links a').forEach(link => {

      link.addEventListener('click', () => {

        hamburger.classList.remove('active');

        navLinks.classList.remove('active');

      });

    });

  }

  /* ===================================== */
  /* SCROLL PROGRESS BAR */
  /* ===================================== */

  const progressBar = document.querySelector('.progress-bar');

  window.addEventListener('scroll', () => {

    const totalHeight =
      document.body.scrollHeight - window.innerHeight;

    const progress =
      (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + '%';

  });

  /* ===================================== */
  /* PARALLAX EFFECT */
  /* ===================================== */

  const heroVisual = document.getElementById('hero-visual');

  const floatingShapes =
    document.querySelectorAll('.floating-shape');

  function handleParallax() {

    const scrollY = window.scrollY;

    if (heroVisual) {

      heroVisual.style.transform =
        `translateY(${scrollY * 0.18}px)`;

    }

    floatingShapes.forEach((shape, index) => {

      const speed = 0.08 + (index * 0.03);

      shape.style.transform =
        `translateY(${scrollY * speed}px)`;

    });

  }

  window.addEventListener('scroll', handleParallax);

  /* ===================================== */
  /* INTERSECTION OBSERVER ANIMATION */
  /* ===================================== */

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

      }

    });

  }, {

    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'

  });

  document.querySelectorAll('.section-animate').forEach(section => {

    observer.observe(section);

  });

  /* ===================================== */
  /* STAGGER CARD EFFECT */
  /* ===================================== */

  const cards = document.querySelectorAll(
    '.service-card, .project-card'
  );

  cards.forEach((card, index) => {

    card.style.transitionDelay =
      `${index * 120}ms`;

    observer.observe(card);

  });

  /* ===================================== */
  /* ACTIVE NAVIGATION */
  /* ===================================== */

  const sections = document.querySelectorAll('section');

  const navItems =
    document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 200) {

        current = section.getAttribute('id');

      }

    });

    navItems.forEach(link => {

      link.classList.remove('active');

      if (link.getAttribute('href') === `#${current}`) {

        link.classList.add('active');

      }

    });

  });

  /* ===================================== */
  /* BACK TO TOP BUTTON */
  /* ===================================== */

  const backToTop =
    document.getElementById('backToTop');

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

  /* ===================================== */
  /* DARK MODE */
  /* ===================================== */

  const darkModeBtn =
    document.getElementById('darkModeBtn');

  const body = document.body;

  // Load Saved Mode

  if (localStorage.getItem('darkMode') === 'enabled') {

    body.classList.add('dark-mode');

    darkModeBtn.innerHTML =
      '<i class="fas fa-sun"></i>';

  }

  darkModeBtn.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {

      localStorage.setItem('darkMode', 'enabled');

      darkModeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

    } else {

      localStorage.setItem('darkMode', 'disabled');

      darkModeBtn.innerHTML =
        '<i class="fas fa-moon"></i>';

    }

  });

  /* ===================================== */
  /* TYPING EFFECT */
  /* ===================================== */

  const typingText =
    document.getElementById('typing-text');

  const words = [

    'Code Meets Creativity.',
    'Professional Web Development.',
    'Modern Software Solutions.',
    'Premium UI/UX Experiences.',
    'Smart IoT Innovations.'

  ];

  let wordIndex = 0;

  let charIndex = 0;

  let isDeleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

      typingText.textContent =
        currentWord.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1600);

        return;

      }

    } else {

      typingText.textContent =
        currentWord.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

          wordIndex = 0;

        }

      }

    }

    setTimeout(typeEffect, isDeleting ? 45 : 90);

  }

  typeEffect();

  /* ===================================== */
  /* BUTTON RIPPLE EFFECT */
  /* ===================================== */

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {

    button.addEventListener('click', function (e) {

      const ripple = document.createElement('span');

      ripple.classList.add('ripple');

      this.appendChild(ripple);

      const x =
        e.clientX - e.target.offsetLeft;

      const y =
        e.clientY - e.target.offsetTop;

      ripple.style.left = `${x}px`;

      ripple.style.top = `${y}px`;

      setTimeout(() => {

        ripple.remove();

      }, 600);

    });

  });

  /* ===================================== */
  /* IMAGE TILT EFFECT */
  /* ===================================== */

  const tiltCards =
    document.querySelectorAll('.project-card');

  tiltCards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

      const rect = card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 10;

      const rotateX =
        ((y / rect.height) - 0.5) * -10;

      card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener('mouseleave', () => {

      card.style.transform =
        'perspective(1000px) rotateX(0) rotateY(0)';

    });

  });

  /* ===================================== */
  /* CONTACT FORM DEMO */
  /* ===================================== */

  const contactForm =
    document.querySelector('.contact-form');

  if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

      e.preventDefault();

      alert(
        'Message Sent Successfully 🚀'
      );

      contactForm.reset();

    });

  }

});