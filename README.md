# devFullMates — Portfolio

The official website of **devFullMates**, a full-stack development studio founded by Larissa Oliveira and Raissa Toledo.

A fast, accessible, single-page portfolio presenting our services, projects, process and team — available in **English, Portuguese and Spanish**, with light and dark themes.

## Highlights

- **Multilingual by design** — every language is prerendered as static HTML at its own URL (`/en`, `/pt`, `/es`). Visitors hitting `/` are redirected to their browser language.
- **SEO-ready** — `hreflang` alternates, `sitemap.xml`, `robots.txt`, schema.org JSON-LD and a generated Open Graph image per language.
- **Light & dark themes** — with no flash of the wrong theme on load.
- **Fully static output** — served from the edge, no backend required.

## Tech stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI         | React 19, Tailwind CSS v4                   |
| Language   | TypeScript                                  |
| Tooling    | pnpm, ESLint                                |
| Hosting    | [Vercel](https://vercel.com)                |

## Getting started

### Prerequisites

- **Node.js** — version pinned in [`.node-version`](./.node-version)
- **pnpm** — version pinned in `package.json` (`packageManager`). Easiest via Corepack: `corepack enable`

### Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to your browser's language.

### Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Start the development server         |
| `pnpm build` | Create a production build            |
| `pnpm start` | Serve the production build locally   |
| `pnpm lint`  | Run ESLint                           |

## Environment variables

| Variable               | Required | Description                                                                                           |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Public URL without a trailing slash (e.g. `https://devfullmates.com`). On Vercel it is auto-detected. |

For local overrides, create a `.env.local` file (git-ignored).

## Project structure

```
src/
├── app/                      Routing only
│   ├── [locale]/             Root layout (<html lang>), page, share image
│   ├── layout.tsx            Pass-through (needed by not-found.tsx)
│   ├── not-found.tsx         Fallback 404
│   ├── icon.svg              Favicon
│   └── robots.ts · sitemap.ts
├── components/
│   ├── layout/               Header, mobile menu, footer, skip link, spotlight
│   ├── sections/             One file per page section
│   ├── preferences/          Language switcher, theme toggle + no-flash script
│   ├── seo/                  JSON-LD structured data
│   └── ui/                   Small building blocks (logo, icons, tags, links…)
├── config/site.ts            Company info, contact, section ids, site URL
├── content/                  All copy (en/pt/es): team, projects, services, process, ui
├── i18n/config.ts            Locales and the translation helper
├── styles/globals.css        Tailwind + theme tokens (brand palette, light/dark)
└── proxy.ts                  Redirects "/" to the visitor's language
```

## Editing content

| What                                  | Where                            |
| ------------------------------------- | -------------------------------- |
| Texts, team, projects, services       | `src/content/*.ts` (every string has `en`, `pt` and `es`) |
| Email, WhatsApp and company links     | `src/config/site.ts`             |
| Colors                                | Tokens at the top of `src/styles/globals.css` |
| Project screenshots                   | `public/projects/`               |
| Team photos                           | `public/team/`                   |

### Adding a language

Add it to `locales` and `localeConfig` in `src/i18n/config.ts` — TypeScript will then flag every string that needs a translation.

## Workflow

### Branches

| Branch      | Purpose                                         |
| ----------- | ----------------------------------------------- |
| `main`      | Production — what is live                       |
| `develop`   | Integration — the next release                  |
| `feat/*`, `fix/*` | Short-lived branches, opened as PRs into `develop` |

1. Branch off `develop`: `git checkout -b feat/my-change develop`
2. Open a pull request into `develop` and get a review from the other mate.
3. When `develop` is ready to ship, open a PR from `develop` into `main`.

Avoid pushing directly to `develop` or `main`.

### Commits

We follow [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`…

### Before opening a PR

```bash
pnpm lint && pnpm build
```

## Deployment

The site is hosted on Vercel through its GitHub integration:

- **Production** — every push to `main`.
- **Preview** — every other branch and pull request gets its own preview URL.

## License

Private and proprietary. © devFullMates. All rights reserved.
