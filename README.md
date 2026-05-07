# IT Solutions Portfolio

Premium, modern developer portfolio built with:

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Architecture

```txt
src/
  app/                 # App Router pages, layout, loading
  components/
    common/            # Reusable UI atoms (button, card, heading)
    layout/            # Navbar, footer, theme, scroll-to-top
    sections/          # Main portfolio section blocks
  data/                # Mock/static JSON-like content
  services/            # API-shaped data access layer
  types/               # Shared TypeScript models
  lib/                 # Utility helpers
```

## Easy Future API Integration

All UI consumes data from `src/services/api.ts`, not directly from components.

To switch from mock data to backend:

1. Keep component props unchanged.
2. Replace mock returns inside `portfolioApi` with real `fetch()` calls.
3. Add auth/database logic without rewriting section UI.

## Current Features

- Responsive modern dark/light UI
- Sticky navbar with active section highlighting
- Hero typing animation and animated counters
- Skills progress bars and timeline experience
- Project filtering
- Testimonials carousel
- Contact form validation
- Scroll-to-top button
- Loading skeleton state
