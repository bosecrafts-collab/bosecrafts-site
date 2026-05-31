/* ════════════════════════════════════════════════════════════
   BOSECRAFTS — Modern Interactive Engine
   Handles smooth animations, magnetic effects, and local time.
   ═══════════════════════════════════════════════════════════ */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* ─── STICKY NAV + HIDE ON DOWN SCROLL ─── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  let lastY = 0;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);
    if (y > lastY && y > 200) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();

  // Mobile menu drawer toggle
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.classList.toggle('no-scroll', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Active state highlighting for navigation links
  const path = window.location.pathname;
  document.querySelectorAll('.nav-menu a, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    
    // Exact match or base path match for routing
    const isHome = (href === '/' && path === '/') || (href === 'index.html' && path === '/');
    const isSubpage = href !== '/' && href !== 'index.html' && path.includes(href.replace('.html', ''));
    
    if (isHome || isSubpage) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => obs.observe(el));
}

/* ─── MAGNETIC BUTTONS ─── */
function initMagnetic() {
  if (reduceMotion || isTouch) return;
  document.querySelectorAll('.btn, .nav-cta').forEach(b => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      b.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
    });
    b.addEventListener('mouseleave', () => {
      b.style.transform = '';
    });
  });
}

/* ─── STAT COUNT-UP ANIMATION ─── */
function initCountUp() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\D*)(\d+)([^\d]*)$/);
    if (!m) return;
    const prefix = m[1] || '';
    const target = parseInt(m[2], 10);
    const suffix = m[3] || '';
    el.textContent = prefix + '0' + suffix;
    let played = false;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting && !played) {
          played = true;
          const t0 = performance.now();
          const dur = 1600;
          function step(now) {
            const p = Math.min(1, (now - t0) / dur);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + Math.floor(target * ease) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = raw;
          }
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ─── LIVE CLOCK (Siliguri, India Time) ─── */
function initClock() {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  function tick() {
    const now = new Date();
    const opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
    el.textContent = new Intl.DateTimeFormat('en-IN', opts).format(now) + ' IST';
  }
  tick();
  setInterval(tick, 30000);
}

/* ─── TOAST NOTIFICATIONS ─── */
export function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-dot"></span><span>${msg}</span>`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3000);
}

/* ─── COPY EMAIL TO CLIPBOARD ─── */
function initCopyEmail() {
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copied to clipboard');
        }).catch(() => {
          showToast('Could not copy — please copy manually');
        });
      } else {
        showToast('Copy: ' + email);
      }
    });
  });
}
/* ─── CONTACT FORM ─── */
function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const chips = form.querySelectorAll('.budget-chip');
  const budgetInput = form.querySelector('input[name="budget"]');
  chips.forEach(c => {
    c.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('selected'));
      c.classList.add('selected');
      if (budgetInput) budgetInput.value = c.getAttribute('data-value');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const submitBtn = form.querySelector('[type=submit]');
    if (status) { status.textContent = ''; status.className = 'form-status'; }

    let valid = true;
    form.querySelectorAll('.field').forEach(f => f.classList.remove('error'));
    form.querySelectorAll('[required]').forEach(input => {
      const field = input.closest('.field');
      if (!input.value.trim()) { valid = false; if (field) field.classList.add('error'); }
      if (input.type === 'email' && input.value.trim()) {
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        if (!ok) { valid = false; if (field) field.classList.add('error'); }
      }
    });
    if (!valid) {
      if (status) { status.textContent = 'Please fix the highlighted fields.'; status.className = 'form-status error'; }
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.6'; }
    if (status) status.textContent = 'Sending…';

    const data = {};
    const fd = new FormData(form);
    fd.forEach((val, key) => { data[key] = val; });

    const endpoint = form.getAttribute('data-endpoint');

    if (endpoint && endpoint.startsWith('http')) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => {
        if (res.ok) {
          if (status) { status.textContent = '✓ Message sent. We\'ll reply within 24 hours.'; status.className = 'form-status success'; }
          form.reset();
          chips.forEach(x => x.classList.remove('selected'));
          showToast('Message sent — thank you.');
        } else { doMailto(form, data, status); }
      }).catch(() => { doMailto(form, data, status); }).finally(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
      });
    } else {
      doMailto(form, data, status);
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
    }
  });
}

function doMailto(form, data, status) {
  const email = form.getAttribute('data-fallback-email') || 'bosecrafts@gmail.com';
  const subject = encodeURIComponent('New enquiry from ' + (data.name || 'website'));
  const body = encodeURIComponent(
    'Name: ' + (data.name || '') + '\n' +
    'Email: ' + (data.email || '') + '\n' +
    'Company: ' + (data.company || '') + '\n' +
    'Budget: ' + (data.budget || '') + '\n' +
    'Project Type: ' + (data['project-type'] || '') + '\n\n' +
    (data.message || '')
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  if (status) { status.textContent = 'Opening your email client…'; status.className = 'form-status success'; }
}

/* ─── INITIALIZE CLIENT ENGINE ─── */
export function boot() {
  initNav();
  initMagnetic();
  initClock();
  initCopyEmail();
  initReveal();
  initCountUp();
  initContactForm();
}

// Boot up once DOM is ready (standard in Astro)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// Re-run for view transitions or document updates if required
document.addEventListener('astro:after-swap', boot);
