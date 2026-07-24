# He Ning Resume — Next.js + shadcn/ui

A responsive, print-ready Chinese resume rebuilt with Next.js App Router, TypeScript, Tailwind CSS v4, and local shadcn/ui-style components.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Export PDF

Use the **导出 PDF** button or browser print (`Ctrl/Cmd + P`). Select A4, no margins, enable background graphics, and use 100% scale.

## Main files

- `app/page.tsx` — page entry
- `components/resume.tsx` — resume layout and content
- `components/resume-toolbar.tsx` — print and theme controls
- `components/ui/*` — local shadcn-style components
- `app/globals.css` — Tailwind v4 theme and A4 print rules
- `public/portrait.png` — portrait asset
