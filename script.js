/* =========================================
   Jyang Santos — Portfolio interactions
   ========================================= */

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Typing effect for the hero
const words = [
  'web experiences.',
  'mobile apps.',
  'clean UIs.',
  'real client products.',
  'with Flutter.',
  'with React.'
];
const typedEl = document.getElementById('typed');
let wi = 0, ci = 0, deleting = false;

function tick() {
  const word = words[wi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(tick, 1600); return; }
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
  }
  setTimeout(tick, deleting ? 40 : 90);
}
if (typedEl) tick();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.glass, .section-head, .hero-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  io.observe(el);
});

// Contact form — Formspree integration with AJAX + fallback
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fb = document.getElementById('formFeedback');
    const submitBtn = form.querySelector('button[type="submit"]');
    const original = submitBtn.textContent;

    // If Formspree isn't configured yet, fall back to opening the user's mail client
    // (mailto: with pre-filled subject + body). Always works, no signup required.
    if (form.action.includes('REPLACE_WITH_YOUR_FORMSPREE_ID')) {
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      const subject = encodeURIComponent(`Portfolio contact from ${name || 'someone'}`);
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
      window.location.href = `mailto:contact.jyangsantos@gmail.com?subject=${subject}&body=${body}`;
      fb.style.color = '#86efac';
      fb.textContent = '✅ Opening your email client...';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    fb.textContent = '';
    fb.style.color = '';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        fb.style.color = '#86efac';
        fb.textContent = '✅ Thanks! Your message is on its way.';
        form.reset();
      } else {
        throw new Error('Network error');
      }
    } catch (err) {
      fb.style.color = '#fca5a5';
      fb.textContent = '❌ Something went wrong. Email me directly at contact.jyangsantos@gmail.com';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
      setTimeout(() => { fb.textContent = ''; fb.style.color = ''; }, 6000);
    }
  });
}
