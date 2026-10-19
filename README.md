# our-portfolio

Portfolio of **devFullMates** (Larissa Oliveira & Raissa Toledo): a single page with About, Services, Projects, Team and Contact, in English, Portuguese and Spanish, with light and dark themes.

Next.js 16 (App Router) + Tailwind CSS v4. Every language is prerendered as static HTML at its own URL (`/en`, `/pt`, `/es`) for SEO, with hreflang alternates, sitemap, robots.txt, schema.org JSON-LD and a generated share image per language.

## Getting started

```bash
pnpm install
pnpm dev       # http://localhost:3000 (redirects to your browser's language)
pnpm build     # production build
pnpm lint
```

## Environment variables

| Variable               | Purpose                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, no trailing slash (e.g. `https://devfullmates.com`). Optional on Vercel (auto-detected). |

## Project structure

```
src/
├── app/                      Routing only
│   ├── [locale]/             Real root layout (<html lang>), page, share image
│   ├── layout.tsx            Pass-through (needed by not-found.tsx)
│   ├── not-found.tsx         Fallback 404
│   ├── icon.svg              Favicon
│   └── robots.ts · sitemap.ts
├── components/
│   ├── layout/               Header (logo, nav), footer, skip link, spotlight
│   ├── sections/             One file per page section
│   ├── preferences/          Language switcher, theme toggle + no-flash script
│   ├── seo/                  JSON-LD structured data
│   └── ui/                   Small building blocks (logo, icons, tags, links…)
├── config/site.ts            Company info, contact, section ids, site URL
├── content/                  All copy, in en/pt/es: team, projects, services, ui
├── i18n/config.ts            Locales and the translator helper
├── styles/globals.css        Tailwind + theme tokens (logo palette, light/dark)
└── proxy.ts                  Redirects "/" to the visitor's language
```

## Editing content

- Texts, team, projects and services: `src/content/*.ts` (every string has `en`, `pt` and `es`).
- Email, WhatsApp and company links: `src/config/site.ts`.
- Colors: the tokens at the top of `src/styles/globals.css`.
- Project screenshots: `public/projects/` · team photos: `public/team/`.

## Adding a language

Add it to `locales` and `localeConfig` in `src/i18n/config.ts`; TypeScript then points to every string that needs a translation.
