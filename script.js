/* ── Navigation ─────────────────────────────────────────────────────────── */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  document.body.classList.toggle('nav-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  document.body.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}));

/* ── WhatsApp icon ──────────────────────────────────────────────────────── */
document.querySelectorAll('.whatsapp').forEach(link => {
  link.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M13.6 2.3A7.85 7.85 0 0 0 8 0a7.93 7.93 0 0 0-6.88 11.89L0 16l4.2-1.1a7.93 7.93 0 0 0 3.79.96H8a7.93 7.93 0 0 0 5.6-13.56ZM8 14.53a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25A6.56 6.56 0 0 1 1.4 7.93 6.6 6.6 0 1 1 8 14.53Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.65-.18-.06-.32-.1-.45.1-.13.2-.51.65-.63.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.59-.99-.59-.52-.99-1.17-1.1-1.37-.12-.2-.02-.31.08-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.07-.61-1.47-.16-.39-.32-.33-.45-.34h-.38a.73.73 0 0 0-.53.25c-.18.2-.69.68-.69 1.65 0 .98.71 1.92.81 2.05.1.13 1.39 2.13 3.38 2.99.47.2.84.33 1.13.42.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.09-.18-.13-.38-.23Z"/></svg>';
});

/* ── Scroll-reveal ──────────────────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Contact form ───────────────────────────────────────────────────────── */
document.querySelectorAll('.contact-form').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const status = form.querySelector('.form-status');
  if (!form.checkValidity()) {
    status.textContent = 'Please complete all required fields.';
    status.className = 'form-status error';
    form.reportValidity();
    return;
  }
  status.textContent = "Thank you. Your enquiry has been prepared. Connect this form to UVCOA's approved email service before launch.";
  status.className = 'form-status success';
  form.reset();
}));

/* ── Footer year ────────────────────────────────────────────────────────── */
document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear());
