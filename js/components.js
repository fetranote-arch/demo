/* ============================================================
   AL AQEEQ — Nav & Footer Injection
   ============================================================ */

const NAV_HTML = `
<nav class="navbar transparent">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.webp" alt="Al Aqeeq Glass & Aluminium" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div style="display:none;align-items:center;gap:8px;">
        <div style="width:40px;height:40px;background:linear-gradient(135deg,#00B7F1,#0D2C54);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <span style="font-family:'Syne',sans-serif;font-weight:800;font-size:.95rem;color:white;line-height:1.2;">AL AQEEQ<br><span style="font-size:.72rem;font-weight:600;color:#00B7F1;">GLASS & ALUMINIUM</span></span>
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="apropos.html">À Propos</a></li>
      <li><a href="produits.html">Produits & Services</a></li>
      <li><a href="realisations.html">Réalisations</a></li>
      <li><a href="conseils.html">Nos Conseils</a></li>
      <li><a href="contact.html" class="nav-cta">Devis Gratuit</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Menu">
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
        <div class="footer-logo">
          <img src="images/logo.webp" alt="Al Aqeeq" onerror="this.style.display='none'" style="height:48px;">
          <span style="font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;color:white;line-height:1.25;">AL AQEEQ<br><span style="font-size:.75rem;color:#00B7F1;font-weight:600;">GLASS & ALUMINIUM</span></span>
        </div>
        <p class="footer-desc">La qualité parle d'elle-même. Spécialiste malgache de la menuiserie aluminium et de la vitrerie depuis 2017.</p>
        <div style="display:flex;gap:12px;margin-top:20px;">
          <a href="https://web.facebook.com/profile.php?id=61560623292780" target="_blank" class="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/alaqeeq110/" target="_blank" class="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a href="https://wa.me/261340223002" target="_blank" class="social-btn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
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
        <p class="footer-h">Nos Services</p>
        <ul class="footer-links">
          <li><a href="produits.html">Portes &amp; Fenêtres</a></li>
          <li><a href="produits.html">Vitrerie &amp; Miroiterie</a></li>
          <li><a href="produits.html">Vitrines &amp; Présentoirs</a></li>
          <li><a href="produits.html">Menuiserie Aluminium</a></li>
          <li><a href="produits.html">Rampes &amp; Balcons</a></li>
          <li><a href="produits.html">Grilles de Protection</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-h">Contact</p>
        <ul class="footer-links">
          <li><a href="tel:+261340223002">034 02 230 02</a></li>
          <li><a href="tel:+261389860802">038 98 608 02</a></li>
          <li><a href="mailto:alaqeeqglass@gmail.com">alaqeeqglass@gmail.com</a></li>
          <li style="color:rgba(255,255,255,.5);font-size:.85rem;margin-top:8px;">Saify Park, Anosizato<br>Entrepôt A3, Antananarivo</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2024 AL AQEEQ Glass &amp; Aluminium. Tous droits réservés.</span>
      <span>Certification <strong style="color:#00B7F1">CE</strong> &mdash; Qualité Internationale</span>
    </div>
  </div>
</footer>

<a href="https://wa.me/261340223002" target="_blank" class="whatsapp-fab" aria-label="Contactez-nous sur WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
</a>`;

/* Inject nav and footer */
document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('navbar-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget) navTarget.innerHTML = NAV_HTML;
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;

  /* Re-run main.js logic after injection */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      navbar.classList.toggle('transparent', window.scrollY <= 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu-close');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; });
    const close = () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; };
    mobileClose?.addEventListener('click', close);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }
});
