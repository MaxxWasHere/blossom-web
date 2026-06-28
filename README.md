# Blossom website

The official marketing website for **Blossom**, a Roblox macro. This site is built
from Blossom's real Material 3 design system, tokens, themes, fonts, and app-shell
components, so it looks and feels like the desktop app.

- Live site: https://maxxwashere.github.io/blossom-web
- App repo (read-only source of tokens/themes/changelog): https://github.com/MaxxWasHere/Blossom
- License: Apache 2.0

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, static export (`output: 'export'`)
- [Tailwind CSS](https://tailwindcss.com) v3, with Blossom's M3 tokens mapped to CSS variables
- shadcn-style primitives (Button, Card, Accordion) authored to match Blossom's tokens
- [next-themes](https://github.com/pacocoursey/next-themes) for the `data-theme` switcher
- [lucide-react](https://lucide.dev) icons (the app uses Lucide too)
- Fonts: Google Sans Flex (display + body) + JetBrains Mono (mono), loaded the same way as the app

## Getting started

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # produces ./out (static export)
npm run lint
```

## basePath and custom domains

The site is a static export and is served from a project-pages URL by default
(`https://maxxwashere.github.io/blossom-web`), so it needs a base path of `/blossom-web`.

`NEXT_PUBLIC_BASE_PATH` controls this and is read by `next.config.mjs`:

- Project Pages URL (default): `NEXT_PUBLIC_BASE_PATH=/blossom-web`
- Custom domain / root (`https://your-domain/`): `NEXT_PUBLIC_BASE_PATH=` (empty)

Next.js automatically applies `basePath` to `next/link`, `next/image`, and metadata
assets (favicon, etc.). Raw `<img>`/`<a>` to public assets use the `withBasePath()`
helper in `src/lib/utils.ts`. See `.env.example`.

The GitHub Actions workflow builds with `NEXT_PUBLIC_BASE_PATH=/blossom-web`.

### Switching to a custom domain

1. In `next.config.mjs` (or the workflow env), set `NEXT_PUBLIC_BASE_PATH` to an empty string.
2. Add a `public/CNAME` file containing your custom domain.
3. In GitHub repo Settings -> Pages, set the custom domain.
4. Update `SITE_URL` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`
   to your domain so OpenGraph, sitemap, and robots URLs are correct.

## Themes

Themes switch via a `data-theme` attribute on `<html>`, exactly like the app. The
canonical tokens and all theme blocks live in `src/app/globals.css`. Available themes:

`pink` (default), `sakura`, `midnight`, `oled`, `forest`, `light`, `dark`, `system`.

The theme is persisted in `localStorage` (`blossom-web-theme`) via next-themes. Motion
is gated on `@media (prefers-reduced-motion: reduce)`.

## Changelog sourcing

`content/changelog.txt` is a verbatim copy of the Blossom app's in-app Notice tab source
of truth: `assets/noticetabcontents.txt` in the app repo. It is parsed at build time by
`src/lib/changelog.ts` and rendered on `/changelog`. To update the changelog, re-copy
that file from the app repo.

Current version is read from `src/lib/site.ts` (`APP_VERSION`) and mirrored from the
app's `src/blossom_build_info.py` (`APP_VERSION = "2.3.6"`). Branding assets
(`public/blossom.png`, `public/favicon.ico`, `public/og.png`) are also copied from the
app repo.

## Deploy (GitHub Pages via Actions)

`.github/workflows/deploy.yml` builds the static export on every push to `main` and
deploys it with `actions/deploy-pages`. Pages must be enabled with the "GitHub Actions"
build type:

```bash
gh api -X POST repos/MaxxWasHere/blossom-web/pages -f build_type=workflow
```

The workflow builds with `NEXT_PUBLIC_BASE_PATH=/blossom-web` and uploads `out/`.

## Project structure

```
src/
  app/                # App Router pages + globals.css (design system) + sitemap/robots
    layout.tsx        # fonts, metadata, ThemeProvider, AppShell
    page.tsx          # Home (Aurora hero, CTAs, feature teaser, mock window, latest release)
    features/         # full feature grid
    showcase/         # live theme switcher + mock app window
    changelog/        # parses content/changelog.txt
    download/         # bootstrapper CTA, requirements, tutorials
    faq/              # accordions
    sitemap.ts        # /sitemap.xml
    robots.ts         # /robots.txt
  components/         # AppShell, Titlebar, Sidebar, Footer, ThemeSwitcher, MockAppWindow, ...
    ui/               # Button, Card, Accordion primitives
  lib/                # site config, theme metadata, changelog parser, utils
content/changelog.txt # copied from the app repo
public/               # blossom.png, favicon.ico, og.png
```

## License

Apache 2.0. See [LICENSE](./LICENSE). Blossom is an independent fork of Noteab / Coteab
and is not affiliated with or endorsed by Roblox Corporation.
