# robinissac.com — rules for AI edits
Stack: Vite + React + TypeScript + Tailwind + shadcn/ui. Package manager: npm only.
Hosting: Netlify builds from GitHub main. Lovable is retired — do not edit for Lovable.

Every change:
- Work on a feature branch, never on main.
- Run `npm run lint` and `npm run build` before committing. Report real results.
- Keep changes minimal. Do not restyle or rewrite copy unless asked.
- Never commit .env files, tokens, or keys.

Every NEW page:
- Add route in src/App.tsx above the "*" route.
- Unique title, meta description, canonical URL.
- Add to navigation only if asked.
