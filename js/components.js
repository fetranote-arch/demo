/* ============================================================
   AL AQEEQ - Nav & Footer Injection v2
   ============================================================ */

/* SVG icons for WhatsApp social */
const WA_ICON = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

const NAV_HTML = `
<nav class="navbar transparent">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.webp" alt="Al Aqeeq" onerror="this.style.display='none'">
      
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="apropos.html">À Propos</a></li>
      <li><a href="produits.html">Produits &amp; Services</a></li>
      <li><a href="realisations.html">Réalisations</a></li>
      <li><a href="conseils.html">Nos Conseils</a></li>
      <li><a href="contact.html" class="nav-devis">Devis Gratuit</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Ouvrir le menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu">
  <button class="mobile-menu-close" aria-label="Fermer">&times;</button>
  <a href="index.html">Accueil</a>
  <a href="apropos.html">À Propos</a>
  <a href="produits.html">Produits &amp; Services</a>
  <a href="realisations.html">Réalisations</a>
  <a href="conseils.html">Nos Conseils</a>
  <a href="contact.html">Contact &amp; Devis</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-wrap">
          <img src="images/logo.webp" alt="Al Aqeeq" onerror="this.style.display='none'">
          <div class="footer-brand">AL AQEEQ<small>GLASS &amp; ALUMINIUM</small></div>
        </div>
        <p class="footer-desc">La qualité parle d'elle-même. Spécialiste malgache de la menuiserie aluminium et de la vitrerie depuis 2017. Certification CE.</p>
        <div class="social-row">
          <a href="https://web.facebook.com/profile.php?id=61560623292780" target="_blank" class="social-ico social-fb" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/alaqeeq110/" target="_blank" class="social-ico social-ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg>
          </a>
          <a href="https://wa.me/261340223002" target="_blank" class="social-ico social-wa" aria-label="WhatsApp">
            ${WA_ICON}
          </a>
        </div>
      </div>
      <div>
        <p class="footer-h">Navigation</p>
        <ul class="footer-links">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="apropos.html">À Propos</a></li>
          <li><a href="produits.html">Produits &amp; Services</a></li>
          <li><a href="realisations.html">Réalisations</a></li>
          <li><a href="conseils.html">Nos Conseils</a></li>
          <li><a href="contact.html">Contact &amp; Devis</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-h">Nos Spécialités</p>
        <ul class="footer-links">
          <li><a href="produits.html">Fenêtres Aluminium</a></li>
          <li><a href="produits.html">Portes Aluminium</a></li>
          <li><a href="produits.html">Vitrerie &amp; Miroiterie</a></li>
          <li><a href="produits.html">Vitrines Commerciales</a></li>
          <li><a href="produits.html">Garde-corps &amp; Rampes</a></li>
          <li><a href="produits.html">Grilles &amp; Cloisons</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-h">Contact</p>
        <ul class="footer-links">
          <li><a href="tel:+261340223002">034 02 230 02 (WhatsApp)</a></li>
          <li><a href="tel:+261389860802">038 98 608 02</a></li>
          <li><a href="mailto:alaqeeqglass@gmail.com">alaqeeqglass@gmail.com</a></li>
          <li style="color:rgba(255,255,255,.35);font-size:.84rem;margin-top:10px;line-height:1.6;">Saify Park, Anosizato<br>Entrepôt A3 - Antananarivo</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 AL AQEEQ Glass &amp; Aluminium. Tous droits réservés.</span>
      <span>Certification <strong style="color:#00B7F1">CE</strong> - Qualité Internationale</span>
    </div>
  </div>
</footer>

<a href="https://wa.me/261340223002" target="_blank" class="wa-fab" aria-label="WhatsApp">
  ${WA_ICON}
</a>`;

document.addEventListener('DOMContentLoaded', () => {
  const navTarget    = document.getElementById('navbar-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.innerHTML    = NAV_HTML;
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;

  /* Navbar scroll */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      const s = window.scrollY > 50;
      navbar.classList.toggle('scrolled', s);
      navbar.classList.toggle('transparent', !s);
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  /* Active link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Mobile menu */
  const ham   = document.querySelector('.nav-hamburger');
  const mob   = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu-close');
  if (ham && mob) {
    ham.addEventListener('click', () => { mob.classList.add('open'); document.body.style.overflow='hidden'; });
    const closeMenu = () => { mob.classList.remove('open'); document.body.style.overflow=''; };
    close?.addEventListener('click', closeMenu);
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  /* Hero bg parallax load */
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('loaded'), 100);

  /* Scroll animations */
  const els = document.querySelectorAll('[data-animate]');
  if (els.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold: 0.1});
    els.forEach(el => io.observe(el));
  }

  /* Counter animation */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.done) {
          e.target.dataset.done = '1';
          const target = +e.target.dataset.count;
          const suffix = e.target.dataset.suffix || '';
          let start = 0; const dur = 1600;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            e.target.textContent = Math.floor(ease * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {threshold: 0.5});
    counters.forEach(el => co.observe(el));
  }
});
