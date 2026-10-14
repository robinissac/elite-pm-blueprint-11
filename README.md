# robinissac.com

Source for robinissac.com — a Vite + React + TypeScript site styled with Tailwind CSS and shadcn/ui.

Hosted on Netlify, building from the `main` branch on GitHub. Lovable is retired for this project — do not edit via Lovable.

## Getting started

Requires Node.js 22 and npm.

```sh
npm install
npm run dev
```

The dev server runs with auto-reload at the URL printed in the terminal.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build (output in `dist/`)
- `npm run build:dev` — development-mode build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) client (`src/integrations/supabase`)

## Project structure

```
src/
  pages/        route-level page components
  components/   shared components (components/ui holds shadcn/ui primitives)
  hooks/        custom React hooks
  lib/          utilities
  integrations/ third-party clients (Supabase)
```

Routes are declared in [src/App.tsx](src/App.tsx). New routes must be added above the catch-all `*` route.

## Deployment

Netlify builds `main` automatically (see [netlify.toml](netlify.toml)): `npm run build`, publishing `dist/`. GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs lint, a TypeScript check, the build, a dependency audit, and a secret scan on every push and pull request against `main`.

## Contributing

- Work on a feature branch; never commit directly to `main`.
- Run `npm run lint` and `npm run build` before committing.
- Keep changes minimal — avoid unrelated restyling or copy rewrites.
- Never commit `.env` files, tokens, or keys.

See [CLAUDE.md](CLAUDE.md) for the full set of rules followed when editing this repo with AI assistance.
