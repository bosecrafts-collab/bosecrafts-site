# Bosecrafts — Studio Site

A modern, dark-editorial agency website. Static HTML/CSS/JS — no build step, no framework, no install.

## Stack

- **HTML5** semantic markup
- **Modern CSS** (custom properties, grid, container queries, mask-image, mix-blend-mode)
- **Vanilla JS** (ES modules)
- **Lenis** — buttery smooth scrolling (loaded via CDN)
- **Google Fonts** — Inter / Instrument Serif / JetBrains Mono

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing — hero, work bento, services, process, stats, testimonial, CTA |
| `work.html` | Filterable portfolio archive (filter actually works — all/branding/packaging/web/strategy) |
| `project.html?slug=…` | Project case study, dynamically rendered from the project data in `assets/js/main.js` |
| `about.html` | Studio story, principles, team grid |
| `contact.html` | Working contact form with validation, budget chips, FAQ |

## Features that work

- ✅ Custom cursor with hover labels (`data-cursor="…"`)
- ✅ Magnetic buttons (subtle physics on hover)
- ✅ Lenis smooth scroll
- ✅ Sticky nav with hide-on-scroll-down
- ✅ Scroll-triggered reveals
- ✅ Stat count-up animations
- ✅ Live IST clock in hero
- ✅ Word-by-word hero text reveal
- ✅ Working portfolio filter
- ✅ Working lightbox with keyboard nav (← → Esc)
- ✅ Working contact form with field-level validation
- ✅ Budget selector chips
- ✅ Copy-to-clipboard email button
- ✅ Toast notifications
- ✅ Mobile drawer menu
- ✅ Active-state nav links per page
- ✅ Prev/next project navigation
- ✅ Respects `prefers-reduced-motion`
- ✅ Auto-disables cursor/magnetic on touch devices

## Running locally

Just open `index.html` in any modern browser. That's it.

For best results (ES modules, fetch, etc.) serve over HTTP:

```bash
# Python 3
cd bosecrafts-site
python3 -m http.server 8080

# Or with npx (Node)
npx serve .
```

Then open <http://localhost:8080>.

## Deployment

**Drag & drop** to:
- [Netlify Drop](https://app.netlify.com/drop)
- [Vercel](https://vercel.com) — drag the folder into the dashboard
- [Cloudflare Pages](https://pages.cloudflare.com)
- Or any static host (S3, GitHub Pages, Surge, etc.)

No build command. Just publish the folder.

## Connecting the contact form

The form already validates and gracefully falls back to a `mailto:` link. To send to a service:

1. Sign up for [Formspree](https://formspree.io) (free tier: 50 submissions/month) or [Web3Forms](https://web3forms.com) (free tier: 250/month)
2. Get your form endpoint URL
3. In `contact.html`, replace:
   ```html
   data-endpoint=""
   ```
   with:
   ```html
   data-endpoint="https://formspree.io/f/YOUR_FORM_ID"
   ```

The form will POST as JSON. If the endpoint fails (or is empty), it falls back to opening the user's email client with all fields pre-filled.

## Editing content

### Add or edit projects

Open `assets/js/main.js` and edit the `projects` array near the top of the file. Each project has:

```js
{
  slug: 'unique-url-slug',
  title: 'Brand Name',
  italic: 'Word',              // word inside title to render italic
  category: 'Brand Identity',
  categorySlug: 'branding',     // must match a category in `categories` array
  year: '2026',
  client: 'Client Name',
  duration: '8 weeks',
  services: ['Strategy', 'Logo System'],
  tagline: 'One-line summary.',
  featured: true,               // shows on homepage if true
  accent: '#D9F65A',            // accent colour for placeholders
  cover: 'assets/img/projects/artisan-cover.jpg',
  excerpt: 'Card excerpt.',
  intro: '<p>HTML intro paragraph...</p>',
  h3: 'Section heading',
  body: '<p>More HTML body...</p>',
  images: ['p1-1', 'p1-2'],     // placeholder IDs, or real paths like `assets/img/projects/artisan-1.jpg`
}
```

### Add real images

Replace the gradient placeholders with actual photos. Put project images in `assets/img/projects/`, then add `cover` and `images` paths in the project data inside `assets/js/main.js`:

```js
cover: 'assets/img/projects/artisan-cover.jpg',
images: [
  'assets/img/projects/artisan-1.jpg',
  'assets/img/projects/artisan-2.jpg',
]
```

If `cover` is omitted, the first real image path in `images` is used as the card and hero image. If no real image path is present, the site keeps the existing styled placeholder block.

See `VISUAL_CHANGES.md` for the practical editing workflow.

### Change colours

Edit the `:root` block in `assets/css/main.css`:

```css
:root {
  --bg:     #0A0A0A;   /* page background */
  --accent: #D9F65A;   /* chartreuse — change to anything */
  --text:   #FAFAFA;
  ...
}
```

### Change fonts

Update the Google Fonts `<link>` in each HTML file's `<head>`, and the `--ff-*` family declarations in CSS.

## File map

```
bosecrafts-site/
├── index.html               Landing page
├── work.html                Portfolio archive (filterable)
├── project.html             Project detail template (driven by ?slug=)
├── about.html               Studio + team page
├── contact.html             Contact form + FAQ
├── README.md                This file
└── assets/
    ├── css/
    │   └── main.css         All styling (1300+ lines)
    └── js/
        ├── main.js          Interactions plus active project data
        └── projects.js      Legacy project data copy, not loaded by the current HTML pages
```

## Browser support

- Chrome / Edge / Safari / Firefox — latest versions
- Mobile Safari / Chrome — full support, cursor/magnetic auto-disabled on touch
- IE11 — not supported

## License

Yours.
