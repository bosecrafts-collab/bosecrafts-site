# Bosecrafts — Design Studio Website

A design-led brand consultancy site for **Bosecrafts**, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Pages

| Route       | Purpose                          |
| ----------- | -------------------------------- |
| `/`         | Home — hero, work, services, CTA |
| `/work`     | Project portfolio                |
| `/studio`   | About the team and values        |
| `/contact`  | Project enquiry form             |

## Editing content (no coding needed)

Most site copy lives in one file:

```
lib/data.ts
```

Edit there to change:

- Contact email and phone
- Project names and descriptions
- Services, team bios, stats
- Navigation labels

Then ask Cursor to apply the changes, or run `npm run dev` to preview locally.

## Deploy

Configured for **Netlify** via `netlify.toml`. Connect your repo or drag the folder to [Netlify Drop](https://app.netlify.com/drop).

## Design

- **Fonts:** Instrument Serif + Inter
- **Accent:** Chartreuse `#D9F65A`
- **Motion:** Subtle scroll reveals; respects `prefers-reduced-motion`
