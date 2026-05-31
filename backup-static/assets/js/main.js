/* ════════════════════════════════════════════════════════════
   BOSECRAFTS — Interactive Engine
   Works on file:// and HTTP — no build step required.
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────── */
var projects = [
  {
    slug: 'artisan-collective',
    title: 'Artisan Collective',
    italic: 'Collective',
    category: 'Brand Identity',
    categorySlug: 'branding',
    year: '2026',
    client: 'Artisan Collective',
    duration: '8 weeks',
    services: ['Brand Strategy', 'Logo System', 'Print Collateral', 'Packaging'],
    tagline: 'A new visual identity for a slow-craft furniture brand rooted in Himalayan timber and quiet luxury.',
    featured: true,
    accent: '#D9F65A',
    excerpt: 'Repositioning a 20-year-old furniture maker for a younger, design-led clientele.',
    intro: '<p><strong>Artisan Collective</strong> approached us six months into a brand crisis. The next generation had inherited the business but the visual identity belonged to their father — heavy serifs, gold filigree, a market that no longer existed.</p><p>We rebuilt the brand from the lumber up. The new wordmark draws from the geometry of dovetail joinery. The colour palette pulls from Himalayan cedar at four times of day. Every printed touchpoint is set on uncoated stock the texture of raw timber.</p>',
    h3: 'Strategy before pixels',
    body: '<p>Three weeks of workshops with the founders, customers, and craftspeople. We mapped what the brand stood for, what it could never be, and where the white space sat in a market crowded by mass-produced furniture importers.</p><p>The conclusion: stop competing on price, stop competing on speed. Compete on permanence.</p>',
    images: ['p1-1', 'p1-2', 'p1-3', 'p1-4', 'p1-5'],
  },
  {
    slug: 'bloom-skincare',
    title: 'Bloom',
    italic: 'Skincare',
    category: 'Packaging & Web',
    categorySlug: 'packaging',
    year: '2026',
    client: 'Bloom Botanicals',
    duration: '12 weeks',
    services: ['Packaging Design', 'Web Design', 'Photography Direction', 'Launch Campaign'],
    tagline: 'Plant-forward skincare that launched on shelves in 14 cities — packaging that travels and tells.',
    featured: true,
    accent: '#FF8FA3',
    excerpt: 'A startup skincare line built around a single hero ingredient — Himalayan saffron.',
    intro: '<p><strong>Bloom</strong> needed packaging that worked on Instagram and inside a chemist shop. We designed a system of soft botanical illustrations on apothecary glass, with a clear ingredient-led hierarchy that felt scientific without feeling clinical.</p>',
    h3: 'A modular packaging system',
    body: '<p>Eleven SKUs share a common typographic structure but each is colour-coded to its hero botanical. The result: a shelf presence that reads as a family at a glance, with enough distinction at three feet to navigate without confusion.</p>',
    images: ['p2-1', 'p2-2', 'p2-3', 'p2-4'],
  },
  {
    slug: 'northfield-foods',
    title: 'Northfield',
    italic: 'Foods',
    category: 'Full Branding',
    categorySlug: 'branding',
    year: '2025',
    client: 'Northfield Premium Foods',
    duration: '16 weeks',
    services: ['Brand Strategy', 'Identity System', 'Packaging', 'Marketing Collateral'],
    tagline: 'From regional dairy producer to a premium pan-India FMCG brand — across 47 SKUs.',
    featured: true,
    accent: '#FFC857',
    excerpt: 'A wholesale rebrand for a 30-year-old dairy co-operative aiming for retail.',
    intro: '<p>Northfield is a 30-year-old dairy co-operative with operations across the foothills. The brand was unrecognisable on shelves next to multinationals. We rebuilt the identity around the geometry of their cattle ear-tag — a single repeating mark that scales from a 2cm sticker to a billboard.</p>',
    h3: 'Designing for the cold chain',
    body: '<p>Every packaging spec had to survive a -4°C cold chain, a 2,000km truck journey, and a fluorescent-lit chiller cabinet. We tested 47 substrates before specifying the final stock — a high-tack metallised polypropylene that holds ink without bleed.</p>',
    images: ['p3-1', 'p3-2', 'p3-3', 'p3-4', 'p3-5', 'p3-6'],
  },
  {
    slug: 'shorewood-developers',
    title: 'Shorewood',
    italic: 'Developers',
    category: 'Brand & Web',
    categorySlug: 'web',
    year: '2025',
    client: 'Shorewood Developers',
    duration: '10 weeks',
    services: ['Brand Refresh', 'Website', 'Sales Collateral'],
    tagline: 'A boutique real estate developer positioned for the post-luxury Tier-II market.',
    featured: false,
    accent: '#7BC4C4',
    excerpt: 'A digital-first refresh and conversion-led website for a regional developer.',
    intro: '<p>Shorewood builds 4-6 boutique residential projects a year, but their digital presence read like a national mass-builder. We tightened the brand to feel like the projects they actually deliver — bespoke, slow, considered.</p>',
    h3: 'A website built around floor plans',
    body: '<p>The new site lives or dies on three pages: project overview, floor plans, and sales contact. We obsessed over those three. Loading time on a 3G connection dropped from 8.4s to 1.2s. Floor plan downloads grew 6×.</p>',
    images: ['p4-1', 'p4-2', 'p4-3'],
  },
  {
    slug: 'cascade-coffee',
    title: 'Cascade',
    italic: 'Coffee',
    category: 'Packaging',
    categorySlug: 'packaging',
    year: '2025',
    client: 'Cascade Coffee Co.',
    duration: '6 weeks',
    services: ['Packaging Design', 'Bag Engineering', 'Retail POS'],
    tagline: 'Single-origin specialty coffee for cafés that take their menu seriously.',
    featured: false,
    accent: '#E76F51',
    excerpt: 'Specialty coffee packaging that prints in two colours but reads in five.',
    intro: '<p>Cascade is a small-batch roastery serving 30 cafés across the region. Their previous bags were beautiful but unprintable at scale. We rebuilt the system around a two-colour offset spec that holds across kraft, foil, and recycled card.</p>',
    h3: 'Constraints as a feature',
    body: '<p>The new packaging system uses overprinting and ink density to suggest a five-colour palette while only specifying two PMS inks. Result: print runs that come in 40% under the old budget, with no loss in shelf presence.</p>',
    images: ['p5-1', 'p5-2', 'p5-3', 'p5-4'],
  },
  {
    slug: 'venture-consult',
    title: 'Venture',
    italic: 'Consult',
    category: 'Brand & Strategy',
    categorySlug: 'strategy',
    year: '2024',
    client: 'Venture Consulting Partners',
    duration: '14 weeks',
    services: ['Brand Strategy', 'Identity', 'Pitch System', 'Annual Report'],
    tagline: 'A mid-tier consulting firm rebranded to compete with the Big Four — in pitch rooms.',
    featured: false,
    accent: '#9C89B8',
    excerpt: 'A pitch deck system that closed three Fortune-500 mandates in its first quarter.',
    intro: '<p>Consulting is sold in pitch rooms. We rebuilt the deck system around a modular component library — 84 page templates, drag-and-drop in PowerPoint, that automatically respect the brand grid even when a junior associate fills it at 2am the night before a pitch.</p>',
    h3: 'Brand as a product',
    body: '<p>We treated the brand system like a software product — versioned, documented, with a help portal. Six months in, the design adoption rate inside the firm sits at 94% — measured by the proportion of client-facing decks built on the system.</p>',
    images: ['p6-1', 'p6-2', 'p6-3'],
  },
];

var categories = [
  { slug: 'all',       label: 'All Work' },
  { slug: 'branding',  label: 'Branding' },
  { slug: 'packaging', label: 'Packaging' },
  { slug: 'web',       label: 'Web Design' },
  { slug: 'strategy',  label: 'Strategy' },
];

function getProject(slug) {
  return projects.find(function(p) { return p.slug === slug; });
}

function getAdjacent(slug) {
  var i = projects.findIndex(function(p) { return p.slug === slug; });
  return {
    prev: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
}

function countByCategory(slug) {
  if (slug === 'all') return projects.length;
  return projects.filter(function(p) { return p.categorySlug === slug; }).length;
}

/* ─────────────────────────────────────────
   FEATURE DETECTION
───────────────────────────────────────── */
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* ─────────────────────────────────────────
   STICKY NAV + HIDE ON DOWN SCROLL
───────────────────────────────────────── */
function initNav() {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var lastY = 0;
  var ticking = false;

  function update() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);
    if (y > lastY && y > 200) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', function() {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();

  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.querySelector('.mobile-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function() {
      var open = drawer.classList.toggle('open');
      toggle.classList.toggle('open', open);
      document.body.classList.toggle('no-scroll', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Mark active nav link based on pathname
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-drawer a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === './')) {
      a.classList.add('active');
    }
  });
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function(el) { obs.observe(el); });
}

/* ─────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────── */
function initCursor() {
  if (reduceMotion || isTouch) return;
  document.body.classList.add('has-cursor');

  var cursor = document.createElement('div'); cursor.className = 'cursor';
  var dot    = document.createElement('div'); dot.className    = 'cursor-dot';
  document.body.append(cursor, dot);

  var mx = -100, my = -100, cx = -100, cy = -100;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate3d(' + (mx - 2) + 'px, ' + (my - 2) + 'px, 0)';
  });
  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = 'translate3d(' + (cx - 16) + 'px, ' + (cy - 16) + 'px, 0)';
    requestAnimationFrame(loop);
  })();

  var hoverSel = 'a, button, .work-card, .service-card, .filter-btn, .budget-chip, [data-cursor]';
  document.addEventListener('mouseover', function(e) {
    var t = e.target.closest(hoverSel);
    if (!t) return;
    cursor.classList.add('hover');
    var label = t.getAttribute('data-cursor');
    if (label) { cursor.classList.add('labeled'); cursor.textContent = label; }
  });
  document.addEventListener('mouseout', function(e) {
    var t = e.target.closest(hoverSel);
    if (!t) return;
    cursor.classList.remove('hover', 'labeled');
    cursor.textContent = '';
  });
  document.addEventListener('mouseleave', function() { cursor.style.opacity = 0; dot.style.opacity = 0; });
  document.addEventListener('mouseenter', function() { cursor.style.opacity = 1; dot.style.opacity = 1; });
}

/* ─────────────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────────────── */
function initMagnetic() {
  if (reduceMotion || isTouch) return;
  document.querySelectorAll('.btn, .nav-cta').forEach(function(b) {
    b.addEventListener('mousemove', function(e) {
      var r = b.getBoundingClientRect();
      var x = e.clientX - r.left - r.width / 2;
      var y = e.clientY - r.top  - r.height / 2;
      b.style.transform = 'translate(' + (x * 0.22) + 'px, ' + (y * 0.32) + 'px)';
    });
    b.addEventListener('mouseleave', function() { b.style.transform = ''; });
  });
}

/* ─────────────────────────────────────────
   STAT COUNT-UP ANIMATION
───────────────────────────────────────── */
function initCountUp() {
  document.querySelectorAll('[data-count]').forEach(function(el) {
    var raw = el.textContent.trim();
    var m = raw.match(/^(\D*)(\d+)([^\d]*)$/);
    if (!m) return;
    var prefix = m[1] || '', target = parseInt(m[2], 10), suffix = m[3] || '';
    el.textContent = prefix + '0' + suffix;
    var played = false;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(en) {
        if (en.isIntersecting && !played) {
          played = true;
          var t0 = performance.now(), dur = 1600;
          (function step(now) {
            var p = Math.min(1, (now - t0) / dur);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + Math.floor(target * ease) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = raw;
          })(t0);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

/* ─────────────────────────────────────────
   LIVE CLOCK (hero status)
───────────────────────────────────────── */
function initClock() {
  var el = document.querySelector('[data-clock]');
  if (!el) return;
  function tick() {
    var now = new Date();
    var opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
    el.textContent = new Intl.DateTimeFormat('en-IN', opts).format(now) + ' IST';
  }
  tick();
  setInterval(tick, 30000);
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function escapeWords(title, italic) {
  if (!italic) return title;
  return title.replace(italic, '<span class="italic">' + italic + '</span>');
}

function escapeAttr(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function isImagePath(value) {
  return /^(https?:|data:image\/|assets\/|\/).+\.(avif|webp|png|jpe?g|gif|svg)(\?.*)?$/i.test(value || '');
}

function getCoverImage(p) {
  if (isImagePath(p.cover)) return p.cover;
  return (p.images || []).find(isImagePath);
}

function renderProjectPlaceholder(p, label) {
  return '<div class="work-placeholder" style="background: linear-gradient(135deg, ' + p.accent + '22 0%, ' + p.accent + '08 100%); color: ' + p.accent + ';">' + label + '</div>';
}

function renderWorkCard(p, span) {
  var cover = getCoverImage(p);
  var media = cover
    ? '<img class="work-card-img" src="' + escapeAttr(cover) + '" alt="' + escapeAttr(p.title + ' project preview') + '" loading="lazy">'
    : renderProjectPlaceholder(p, p.title.charAt(0));

  return '<a href="project.html?slug=' + p.slug + '" class="work-card ' + (span || '') + '" data-cat="' + p.categorySlug + '" data-cursor="View">' +
    media +
    '<div class="work-card-overlay"></div>' +
    '<div class="work-card-year">' + p.year + '</div>' +
    '<div class="work-card-cta">↗</div>' +
    '<div class="work-card-meta">' +
      '<div class="work-card-cat">' + p.category + '</div>' +
      '<div class="work-card-title">' + escapeWords(p.title, p.italic) + '</div>' +
    '</div>' +
  '</a>';
}

/* ─────────────────────────────────────────
   WORK GRID RENDER + FILTER
───────────────────────────────────────── */
function renderHomeWork() {
  var grid = document.querySelector('[data-home-work]');
  if (!grid) return;
  var featured = projects.filter(function(p) { return p.featured; }).slice(0, 3);
  var spans = ['span-7', 'span-5', 'span-12'];
  grid.innerHTML = featured.map(function(p, i) { return renderWorkCard(p, spans[i] || 'span-6'); }).join('');
}

function renderArchiveWork() {
  var grid = document.querySelector('[data-archive-grid]');
  var bar  = document.querySelector('[data-filter-bar]');
  if (!grid) return;

  if (bar) {
    bar.innerHTML = categories.map(function(c, i) {
      return '<button class="filter-btn ' + (i === 0 ? 'active' : '') + '" data-filter="' + c.slug + '">' +
        '<span class="dot"></span> ' + c.label + ' <span class="count">' + countByCategory(c.slug) + '</span>' +
      '</button>';
    }).join('');
  }

  grid.innerHTML = projects.map(function(p) { return renderWorkCard(p); }).join('');

  if (bar) {
    bar.querySelectorAll('.filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        bar.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        var cards = grid.querySelectorAll('.work-card');
        cards.forEach(function(card) {
          var show = f === 'all' || card.getAttribute('data-cat') === f;
          if (show) {
            card.classList.remove('is-hidden');
            requestAnimationFrame(function() { card.classList.remove('is-fading'); });
          } else {
            card.classList.add('is-fading');
            setTimeout(function() { card.classList.add('is-hidden'); }, 280);
          }
        });
      });
    });
  }
}

/* ─────────────────────────────────────────
   PROJECT DETAIL PAGE
───────────────────────────────────────── */
function renderProjectPage() {
  var root = document.querySelector('[data-project-root]');
  if (!root) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  var p = getProject(slug);

  if (!p) {
    root.innerHTML = '<section class="section container" style="text-align:center;padding-top:200px;">' +
      '<div class="eyebrow accent" style="justify-content:center;">404</div>' +
      '<h1 class="archive-h1">Project <span class="italic">not</span> found</h1>' +
      '<p class="archive-sub" style="margin:24px auto;">The project you\'re looking for doesn\'t exist. Browse our other work instead.</p>' +
      '<a href="work.html" class="btn btn-primary" style="margin-top:24px;">All Work <span class="icon">↗</span></a>' +
    '</section>';
    return;
  }

  document.title = p.title + ' — Bosecrafts';
  var adj = getAdjacent(slug);
  var prev = adj.prev, next = adj.next;

  var servicesHtml = p.services.map(function(s) { return '<li>' + s + '</li>'; }).join('');
  var cover = getCoverImage(p);
  var heroHtml = cover
    ? '<img src="' + escapeAttr(cover) + '" alt="' + escapeAttr(p.title + ' project hero') + '">'
    : '<div style="font-family:\'Instrument Serif\',serif;font-style:italic;font-size:clamp(120px,20vw,400px);color:' + p.accent + ';opacity:0.4;line-height:1;">' + p.title.charAt(0) + '</div>';

  var galleryHtml = p.images.map(function(img, i) {
    var spans = ['span-4', 'span-2', 'span-3', 'span-3', 'span-6', 'span-4'];
    var span = spans[i % spans.length];
    if (isImagePath(img)) {
      return '<a class="g-item ' + span + '" data-lightbox href="' + escapeAttr(img) + '">' +
        '<img src="' + escapeAttr(img) + '" alt="' + escapeAttr(p.title + ' gallery image ' + (i + 1)) + '" loading="lazy">' +
      '</a>';
    }
    return '<a class="g-item ' + span + '" data-lightbox href="#" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(' + ((i * 47) % 360) + 'deg, ' + p.accent + '30 0%, ' + p.accent + '08 100%);">' +
        '<span style="font-family:\'JetBrains Mono\',monospace;color:' + p.accent + ';font-size:11px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.6;">Frame ' + (i + 1).toString().padStart(2, '0') + '</span>' +
      '</a>';
  }).join('');

  root.innerHTML =
    '<section class="section container project-hero">' +
      '<div class="project-meta-top reveal">' +
        '<a href="work.html" class="btn-text">← All Work</a>' +
        '<span class="eyebrow accent">' + p.category + ' — ' + p.year + '</span>' +
      '</div>' +
      '<h1 class="project-title reveal">' + escapeWords(p.title, p.italic) + '</h1>' +
      '<p class="project-tagline reveal">' + p.tagline + '</p>' +
      '<div class="project-info reveal">' +
        '<div class="info-row"><div class="info-label">Client</div><div class="info-value">' + p.client + '</div></div>' +
        '<div class="info-row"><div class="info-label">Year</div><div class="info-value">' + p.year + '</div></div>' +
        '<div class="info-row"><div class="info-label">Duration</div><div class="info-value">' + p.duration + '</div></div>' +
        '<div class="info-row"><div class="info-label">Category</div><div class="info-value">' + p.category + '</div></div>' +
      '</div>' +
      '<div class="project-hero-img reveal" style="background: linear-gradient(135deg, ' + p.accent + '22 0%, ' + p.accent + '10 50%, ' + p.accent + '05 100%); display:flex;align-items:center;justify-content:center;">' +
        heroHtml +
      '</div>' +
      '<div class="project-body">' +
        '<aside class="reveal"><h4>Services</h4><ul>' + servicesHtml + '</ul></aside>' +
        '<div class="project-content reveal">' + p.intro + '<h3>' + p.h3 + '</h3>' + p.body + '</div>' +
      '</div>' +
      '<div class="project-gallery reveal" data-gallery>' + galleryHtml + '</div>' +
    '</section>' +
    '<div class="project-nav-bar">' +
      '<a class="pn-link prev" href="project.html?slug=' + prev.slug + '">' +
        '<span class="pn-label">← Previous</span>' +
        '<span class="pn-title">' + escapeWords(prev.title, prev.italic) + '</span>' +
      '</a>' +
      '<a class="pn-link next" href="project.html?slug=' + next.slug + '">' +
        '<span class="pn-label">Next →</span>' +
        '<span class="pn-title">' + escapeWords(next.title, next.italic) + '</span>' +
      '</a>' +
    '</div>';
}

/* ─────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────── */
function initLightbox() {
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">×</button>' +
    '<button class="lb-prev"  aria-label="Previous">‹</button>' +
    '<button class="lb-next"  aria-label="Next">›</button>' +
    '<div class="lightbox-stage" data-stage></div>' +
    '<div class="lb-counter"></div>';
  document.body.appendChild(lb);

  var stage = lb.querySelector('[data-stage]');
  var ctr   = lb.querySelector('.lb-counter');
  var items = Array.from(triggers);
  var i = 0;

  function open(idx) {
    i = (idx + items.length) % items.length;
    var trig = items[i];
    var inner = trig.cloneNode(true);
    inner.removeAttribute('href');
    inner.style.cursor = 'auto';
    inner.style.width = '70vw';
    inner.style.maxWidth = '900px';
    inner.style.aspectRatio = '4/3';
    inner.style.borderRadius = '16px';
    inner.style.fontSize = '24px';
    stage.innerHTML = '';
    stage.appendChild(inner);
    ctr.textContent = (i + 1).toString().padStart(2, '0') + ' / ' + items.length.toString().padStart(2, '0');
    lb.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  triggers.forEach(function(t, idx) {
    t.addEventListener('click', function(e) { e.preventDefault(); open(idx); });
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function() { open(i - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function() { open(i + 1); });
  lb.addEventListener('click', function(e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function(e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  open(i - 1);
    if (e.key === 'ArrowRight') open(i + 1);
  });
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function initContactForm() {
  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var chips = form.querySelectorAll('.budget-chip');
  var budgetInput = form.querySelector('input[name="budget"]');
  chips.forEach(function(c) {
    c.addEventListener('click', function() {
      chips.forEach(function(x) { x.classList.remove('selected'); });
      c.classList.add('selected');
      if (budgetInput) budgetInput.value = c.getAttribute('data-value');
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('[type=submit]');
    if (status) { status.textContent = ''; status.className = 'form-status'; }

    var valid = true;
    form.querySelectorAll('.field').forEach(function(f) { f.classList.remove('error'); });
    form.querySelectorAll('[required]').forEach(function(input) {
      var field = input.closest('.field');
      if (!input.value.trim()) { valid = false; if (field) field.classList.add('error'); }
      if (input.type === 'email' && input.value.trim()) {
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        if (!ok) { valid = false; if (field) field.classList.add('error'); }
      }
    });
    if (!valid) {
      if (status) { status.textContent = 'Please fix the highlighted fields.'; status.className = 'form-status error'; }
      return;
    }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.6'; }
    if (status) status.textContent = 'Sending…';

    var data = {};
    var fd = new FormData(form);
    fd.forEach(function(val, key) { data[key] = val; });

    var endpoint = form.getAttribute('data-endpoint');

    if (endpoint && endpoint.indexOf('http') === 0) {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      }).then(function(res) {
        if (res.ok) {
          if (status) { status.textContent = '✓ Message sent. We\'ll reply within 24 hours.'; status.className = 'form-status success'; }
          form.reset();
          chips.forEach(function(x) { x.classList.remove('selected'); });
          showToast('Message sent — thank you.');
        } else { doMailto(form, data, status); }
      }).catch(function() { doMailto(form, data, status); }).finally(function() {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
      });
    } else {
      doMailto(form, data, status);
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
    }
  });
}

function doMailto(form, data, status) {
  var email = form.getAttribute('data-fallback-email') || 'bosecrafts@gmail.com';
  var subject = encodeURIComponent('New enquiry from ' + (data.name || 'website'));
  var body = encodeURIComponent(
    'Name: ' + (data.name || '') + '\n' +
    'Email: ' + (data.email || '') + '\n' +
    'Company: ' + (data.company || '') + '\n' +
    'Budget: ' + (data.budget || '') + '\n' +
    'Project Type: ' + (data['project-type'] || '') + '\n\n' +
    (data.message || '')
  );
  window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  if (status) { status.textContent = 'Opening your email client…'; status.className = 'form-status success'; }
}

/* ─────────────────────────────────────────
   TOAST NOTIFICATIONS
───────────────────────────────────────── */
function showToast(msg) {
  var t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = '<span class="toast-dot"></span><span>' + msg + '</span>';
  document.body.appendChild(t);
  requestAnimationFrame(function() { t.classList.add('show'); });
  setTimeout(function() {
    t.classList.remove('show');
    setTimeout(function() { t.remove(); }, 400);
  }, 3000);
}

/* ─────────────────────────────────────────
   COPY EMAIL TO CLIPBOARD
───────────────────────────────────────── */
function initCopyEmail() {
  document.querySelectorAll('[data-copy-email]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var email = btn.getAttribute('data-copy-email');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function() {
          showToast('Email copied to clipboard');
        }).catch(function() {
          showToast('Could not copy — please copy manually');
        });
      } else {
        showToast('Copy: ' + email);
      }
    });
  });
}

/* ═════════════════════════════════════════
   BOOT
═════════════════════════════════════════ */
function boot() {
  initNav();
  initCursor();
  initMagnetic();
  initClock();
  renderHomeWork();
  renderArchiveWork();
  renderProjectPage();
  initLightbox();
  initContactForm();
  initCopyEmail();
  initReveal();
  initCountUp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
