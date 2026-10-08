# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for Ventura Software (production domain: `venturasoftware.dev`). Vite + React 19 + TypeScript + Tailwind CSS 3 single-page app, deployed on Vercel. Package manager is Yarn (`yarn.lock`).

## Commands

- `yarn dev` — dev server on port 3000 (bound to `0.0.0.0`)
- `yarn build` — production build into `out/` (not `dist/`), with sourcemaps
- `yarn preview` — serve the built output
- `yarn lint` — ESLint over `src`, zero warnings allowed
- `yarn type-check` — `tsc --noEmit` against `tsconfig.app.json`

There is no test suite.

## Architecture

- **Routing**: `src/router/config.tsx` holds the route table (`/`, `/portfolio`, `*` → NotFound), consumed via `useRoutes` in `src/router/index.ts`. That module also exposes the router's `navigate` globally as `window.REACT_APP_NAVIGATE` and as `navigatePromise` for use outside React components. `BrowserRouter` uses `__BASE_PATH__` (from the `BASE_PATH` env var at build time, defined in `vite.config.ts`).
- **Pages** live in `src/pages/<name>/page.tsx` with page-local `components/`. The portfolio page reuses `Navbar` and `Footer` from `src/pages/home/components/`.
- **Auto-imports**: `unplugin-auto-import` injects React hooks, common `react-router-dom` exports (`Link`, `useNavigate`, …) and `useTranslation`/`Trans` globally; see `vite.config.ts` and the generated `auto-imports.d.ts`. Explicit imports also work.
- **Path alias**: `@/` → `src/`.
- **TypeScript is non-strict** (`strict`, `strictNullChecks`, `noImplicitAny` all off in `tsconfig.app.json`).
- **i18n**: i18next is initialized (`src/i18n/`), loading translation files via `import.meta.glob('./*/*.ts')` under `src/i18n/local/<lang>/`, but no language files exist yet and components currently use hardcoded English text.
- **Portfolio** (`src/pages/portfolio/`): project content is data-driven from `data.ts` (`PROJECTS`); images are served from `public/portfolio/`. The "Download PDF" feature renders a hidden `PdfRoot` component (elements with class `.page`, links as `a.link[href]`) and `pdf.ts` rasterizes each page with html2canvas + jsPDF, both lazy-loaded from cdnjs at click time, preserving clickable links in the PDF. The download button is hidden below the desktop breakpoint.
- **Contact form** (`src/pages/home/components/Contact.tsx`) sends via EmailJS and requires `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in `.env`. "Book a call" CTAs link to Calendly.
- **SEO metadata** (canonical URL, Open Graph tags, JSON-LD) is hardcoded in `index.html`.
- **Vercel**: `vercel.json` rewrites all paths except `/portfolio/*` static assets to `index.html` for client-side routing.

Several dependencies (`@supabase/supabase-js`, `firebase`, `@stripe/react-stripe-js`, `recharts`) are installed but not used in `src`.
