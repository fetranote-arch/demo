/* ============================================================
   AL AQEEQ - Main JS v2
   ============================================================ */

/* Gallery filter */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = cat === 'all' || item.dataset.cat === cat;
      item.style.transition = 'opacity .3s, transform .3s';
      if (show) {
        item.style.display = '';
        requestAnimationFrame(() => { item.style.opacity='1'; item.style.transform='scale(1)'; });
      } else {
        item.style.opacity='0'; item.style.transform='scale(.97)';
        setTimeout(() => { if (item.style.opacity==='0') item.style.display='none'; }, 310);
      }
    });
  });
});

/* Lightbox */
const lightbox = document.querySelector('.lightbox');
const lbImg    = lightbox?.querySelector('img');
const galleryItems = [...document.querySelectorAll('.gallery-item')];
let lbIndex = 0;

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    lbIndex = i;
    if (lbImg) lbImg.src = item.querySelector('img').src;
    lightbox?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (lightbox) {
  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLb);
  lightbox.querySelector('.lb-prev')?.addEventListener('click', () => navigate(-1));
  lightbox.querySelector('.lb-next')?.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLb(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

function closeLb() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}
function navigate(dir) {
  const visible = galleryItems.filter(i => i.style.display !== 'none');
  const idx = visible.indexOf(galleryItems[lbIndex]);
  const next = (idx + dir + visible.length) % visible.length;
  lbIndex = galleryItems.indexOf(visible[next]);
  if (lbImg) lbImg.src = visible[next].querySelector('img').src;
}

/* Devis form → WhatsApp */
const devisForm = document.getElementById('devisForm');
if (devisForm) {
  devisForm.addEventListener('submit', e => {
    e.preventDefault();
    const g = name => devisForm.querySelector(`[name="${name}"]`)?.value || '';
    const text = [
      'Bonjour AL AQEEQ Glass & Aluminium,',
      '',
      'Je souhaite recevoir un devis :',
      '',
      `Nom : ${g('nom')}`,
      `Téléphone : ${g('tel')}`,
      `Email : ${g('email')}`,
      `Service : ${g('service')}`,
      `Surface : ${g('surface')}`,
      `Ville : ${g('ville')}`,
      '',
      `Détails : ${g('message')}`,
    ].join('\n');
    window.open(`https://wa.me/261340223002?text=${encodeURIComponent(text)}`, '_blank');
    const msg = document.getElementById('successMsg');
    if (msg) msg.style.display = 'block';
    devisForm.reset();
  });
}

/* FAQ accordion */
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* Smooth anchor scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); }
  });
});
