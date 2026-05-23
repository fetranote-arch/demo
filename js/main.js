/* ============================================================
   AL AQEEQ Glass & Aluminium — Main JS
   ============================================================ */

/* ── Navbar scroll effect ───────────────────────────────── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ── Active nav link ────────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ── Mobile menu ────────────────────────────────────────── */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu-close');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ── Scroll animations ──────────────────────────────────── */
const animEls = document.querySelectorAll('[data-animate]');
if (animEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  animEls.forEach(el => observer.observe(el));
}

/* ── Gallery filter + lightbox ──────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    galleryItems.forEach(item => {
      if (cat === 'all' || item.dataset.cat === cat) {
        item.style.display = '';
        setTimeout(() => item.style.opacity = '1', 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  });
});

/* Lightbox */
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
let currentIndex = 0;
const galleryImgs = [...galleryItems].map(item => item.querySelector('img'));

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    currentIndex = i;
    if (lightboxImg) lightboxImg.src = galleryImgs[i].src;
    if (lightbox) lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (lightbox) {
  lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
  lightbox.querySelector('.lb-prev')?.addEventListener('click', () => {
    const visible = galleryItems.length;
    currentIndex = (currentIndex - 1 + visible) % visible;
    lightboxImg.src = galleryImgs[currentIndex].src;
  });
  lightbox.querySelector('.lb-next')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') lightbox.querySelector('.lb-prev')?.click();
    if (e.key === 'ArrowRight') lightbox.querySelector('.lb-next')?.click();
  });
}

/* ── Devis form handling ────────────────────────────────── */
const devisForm = document.getElementById('devisForm');
if (devisForm) {
  devisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = devisForm.querySelector('[name="nom"]')?.value || '';
    const phone   = devisForm.querySelector('[name="tel"]')?.value || '';
    const service = devisForm.querySelector('[name="service"]')?.value || '';
    const message = devisForm.querySelector('[name="message"]')?.value || '';
    const text = `Bonjour AL AQEEQ,\n\nJe souhaite un devis :\n\nNom : ${name}\nTéléphone : ${phone}\nService souhaité : ${service}\nDétails : ${message}`;
    const url = `https://wa.me/261340223002?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
}

/* ── Counter animation ──────────────────────────────────── */
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCount(entry.target, parseInt(entry.target.dataset.count));
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObserver.observe(el));
}

/* ── Smooth scroll for anchor links ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
