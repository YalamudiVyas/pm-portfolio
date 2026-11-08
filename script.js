/* ══════════════════════════════════════════════
   YALAMUDI VYAS — PM PORTFOLIO v2
   script.js — Interactions & Animations
   ══════════════════════════════════════════════ */

/* ── Cursor glow ── */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

/* ── Nav scroll effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Mobile nav ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ── Active nav link ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
function updateActiveNav() {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav);

/* ── Smooth scroll with nav offset ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});

/* ── Scroll reveal ── */
function addReveal(selector, delayClass) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal', `reveal-delay-${Math.min((i % 4) + 1, 4)}`);
  });
}
addReveal('.td-card', true);
addReveal('.feat-card', true);
addReveal('.info-tile', true);
addReveal('.cert-tile', true);
addReveal('.res-exp-card, .res-edu-card', true);
addReveal('.rm-phase', true);
addReveal('.contact-tile', true);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Hero entrance animation ── */
const heroEls = ['.hero-badge', '.hero-name', '.hero-role-wrapper', '.hero-desc', '.hero-domains', '.hero-ctas', '.hero-stats-row'];
heroEls.forEach((sel, i) => {
  const el = document.querySelector(sel);
  if (!el) return;
  el.style.cssText = `opacity:0; transform:translateY(24px); transition:opacity .7s ease ${i * .12}s, transform .7s ease ${i * .12}s`;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }));
});

/* ── Typing effect for hero role ── */
const roleEl = document.querySelector('.hero-role');
if (roleEl) {
  const text = roleEl.textContent;
  roleEl.textContent = '';
  let i = 0;
  const cursor = document.createElement('span');
  cursor.style.cssText = 'display:inline-block; width:2px; height:1.1em; background:#6366F1; border-radius:1px; vertical-align:middle; margin-left:2px; animation:blink .9s infinite';
  roleEl.appendChild(cursor);
  const style = document.createElement('style');
  style.textContent = '@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }';
  document.head.appendChild(style);
  setTimeout(() => {
    const type = () => {
      if (i < text.length) {
        roleEl.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        setTimeout(type, 45);
      } else {
        setTimeout(() => cursor.remove(), 1500);
      }
    };
    type();
  }, 900);
}

/* ── Number count-up for stats ── */
function countUp(el, target, duration = 1800) {
  const isDecimal = target % 1 !== 0;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = ease * target;
    el.textContent = isDecimal ? val.toFixed(2) : Math.floor(val);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isDecimal ? target.toFixed(2) : target;
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.h-stat-num').forEach(numEl => {
        const raw = numEl.dataset.val;
        if (raw) countUp(numEl, parseFloat(raw));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsRow = document.querySelector('.hero-stats-row');
if (statsRow) {
  // Store original values
  document.querySelectorAll('.h-stat-num').forEach(el => {
    el.dataset.val = parseFloat(el.textContent.replace('+', ''));
    el.textContent = '0';
  });
  statsObserver.observe(statsRow);
}

console.log('%c⚡ Yalamudi Vyas — PM Portfolio', 'color:#6366F1; font-size:16px; font-weight:900;');
console.log('%cHybrid Product & Project Manager | SaaS · ERP · FinTech', 'color:#94A3B8; font-size:12px;');
console.log('%c📧 yalamudi.mail@gmail.com', 'color:#3B82F6; font-size:11px;');
