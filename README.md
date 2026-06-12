# Atelier — Luxury Editorial E-commerce Template

A premium, minimalist e-commerce front-end inspired by the slow-fashion /
artisan-craft editorial aesthetic. Built with **Next.js 14 (App Router) +
TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

> Note: This is an original implementation and template — all copy, brand
> name ("Atelier"), data, and code are original. Replace the Unsplash
> placeholders with your own art-directed photography and your own brand
> content before launch.

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Design system

| Token     | Value     | Role                          |
| --------- | --------- | ----------------------------- |
| `ivory`   | `#FAF7F2` | Page background               |
| `cream`   | `#F3EEE6` | Alternate section background  |
| `sand`    | `#E5DCCD` | Hairline borders / dividers   |
| `clay`    | `#A98467` | Muted earth accent            |
| `moss`    | `#6B705C` | Secondary earth accent        |
| `ink`     | `#1C1B19` | Primary text                  |
| `smoke`   | `#6E6A63` | Secondary text                |

**Typography:** Cormorant Garamond (editorial serif display, incl. italics)
paired with Jost (spacious geometric sans for body/nav/UI). Both loaded via
`next/font` with `display: swap`.

**Motion language:** one shared easing (`cubic-bezier(0.22, 1, 0.36, 1)`),
long 0.6–1.2s reveals, viewport-triggered fade-and-lift, staggered grids,
hero parallax, and a slide-out cart. `prefers-reduced-motion` is respected
everywhere (CSS kill-switch + `useReducedMotion` in every animated component).

## Structure

```
app/
  layout.tsx          Fonts, Header/Footer chrome, skip link, page transitions
  page.tsx            Home: Hero → Collections → Featured → Philosophy
  shop/page.tsx       Shop listing (filterable via ?c=<collection-slug>)
  story/page.tsx      Editorial brand-story page
  globals.css         Tokens, .btn-ghost / .link-draw / .eyebrow utilities
components/
  layout/Header.tsx       Transparent→solid sticky nav, search bar, mobile menu
  layout/CartDrawer.tsx   Slide-out cart (scrim, Esc-to-close, scroll lock)
  layout/Footer.tsx       Multi-column footer + single-line newsletter input
  sections/Hero.tsx       Full-bleed parallax hero, staged headline entrance
  sections/CollectionsGrid.tsx  Asymmetric tall/standard/wide collection grid
  sections/FeaturedProducts.tsx Product grid on cream band
  sections/Philosophy.tsx Split image/text story section + craft markers
  sections/ShopGrid.tsx   Client grid with typographic filter pills
  ui/ProductCard.tsx      3:4 card, hover cross-fade to alternate shot
  motion/Reveal.tsx       Reveal / Stagger / StaggerItem primitives + EASE_LUXE
  motion/PageTransition.tsx  Route cross-fade via AnimatePresence
lib/
  data.ts             Typed products/collections + ZAR price-range formatter
```

## Wiring it to commerce

`lib/data.ts` is the single seam: swap the static arrays for Shopify
Storefront API, Medusa, or a CMS (Sanity/Payload). The `Product` and
`Collection` types document exactly what each component expects. The demo
cart in `CartDrawer.tsx` is intentionally stateless — connect it to your
cart context or commerce SDK.

## Accessibility & quality floor

- Skip-to-content link, visible focus outlines, labelled icon buttons
- 44px minimum touch targets on all interactive icons/pills
- Cart drawer: `role="dialog"`, scrim click + Escape close, body scroll lock
- Semantic headings (h1→h3), `aria-pressed` filter state, alt text throughout
- Reduced-motion respected at both CSS and Framer Motion levels
- Responsive from 360px mobile to wide desktop (`max-w-editorial` = 88rem)
