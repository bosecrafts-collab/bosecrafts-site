# Visual Change Guide

This site is static HTML/CSS/JS, so visual edits are direct file edits. There is no build step.

## Preview locally

Run this from the project folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Where to edit text

- Homepage text: `index.html`
- Work archive intro and CTA: `work.html`
- About page: `about.html`
- Contact page, form labels, FAQ: `contact.html`
- Project names, descriptions, services, years, categories: `assets/js/main.js`

Project data is inside the `projects` array near the top of `assets/js/main.js`.

## Where to put images

- Project images: `assets/img/projects/`
- General site images, logos, team photos, backgrounds: `assets/img/site/`

Recommended formats:

- `.webp` for most photos
- `.jpg` for broad compatibility
- `.png` for transparent artwork
- `.svg` for simple logos or icons

## How to use real project images

Add files such as:

```text
assets/img/projects/artisan-cover.webp
assets/img/projects/artisan-detail-1.webp
assets/img/projects/artisan-detail-2.webp
```

Then edit the matching project in `assets/js/main.js`:

```js
{
  slug: 'artisan-collective',
  title: 'Artisan Collective',
  cover: 'assets/img/projects/artisan-cover.webp',
  images: [
    'assets/img/projects/artisan-cover.webp',
    'assets/img/projects/artisan-detail-1.webp',
    'assets/img/projects/artisan-detail-2.webp',
  ],
}
```

If no real image path is provided, the site keeps using the current styled placeholder blocks.

## Common visual edits

- Colors: edit the `:root` variables in `assets/css/main.css`
- Accent theme swatches: edit the `html[data-theme="..."]` blocks in `assets/css/main.css`
- Fonts: update the Google Fonts link in each HTML file and the font-family rules in `assets/css/main.css`
- Spacing, layout, cards, buttons: edit `assets/css/main.css`
- Navigation/footer text: edit each HTML file, because the nav/footer is repeated per page

## Best request format

```text
Change the homepage hero headline to:
"..."

Replace the Artisan Collective cover with:
assets/img/projects/artisan-cover.webp

Update the contact email everywhere to:
hello@example.com
```
