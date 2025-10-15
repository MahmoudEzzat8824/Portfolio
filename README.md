# Portfolio

[![Deploy to GitHub Pages](https://github.com/MahmoudEzzat8824/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/MahmoudEzzat8824/Portfolio/actions/workflows/deploy.yml)

Live: https://mahmoudezzat8824.github.io/Portfolio/

A React + Vite + TypeScript portfolio with Tailwind CSS and shadcn-style UI components.

## Prerequisites
- Node.js 18+
- npm 9+

## Install
```bash
npm install
```

## Develop
```bash
npm run dev
# open the printed Local URL (likely http://localhost:5173/Portfolio/)
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
- Vite base is set to `/Portfolio/` in `vite.config.ts` for GitHub Pages. Adjust if hosting elsewhere.
- TypeScript config (`tsconfig.json`) is scoped to app + used UI files to keep compile fast.
