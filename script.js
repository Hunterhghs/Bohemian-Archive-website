// ========================================
// Bohemian Archive — Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll effect
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Scroll animations
  const fadeEls = document.querySelectorAll(
    '.section-label, .section-title, .manifesto-text, .topic-card, .dispatch-card, .about-text, .about-stats, .communities-label, .communities-list'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // Symbol grid
  const symbols = [
    '\u25BD', '\u25B3', '\u25B7', '\u25C1', '\u25C6', '\u25C7',
    '\u25CB', '\u25CF', '\u25A1', '\u25A0', '\u25CA', '\u2662',
    '\u2023', '\u25B5', '\u25BF', '\u25B9', '\u25C3', '\u2606',
    '\u25E2', '\u25E3', '\u25E4', '\u25E5'
  ];
  const grid = document.getElementById('symbols-grid');
  if (grid) {
    for (let i = 0; i < 120; i++) {
      const span = document.createElement('span');
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      grid.appendChild(span);
    }
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
