# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router project for a responsive, print-ready resume. Route-level files live in `app/`: `page.tsx` is the entry point, `layout.tsx` defines document metadata and shared layout, and `globals.css` contains Tailwind v4 theme and A4 print rules. Resume content and controls are in `components/resume.tsx` and `components/resume-toolbar.tsx`; reusable shadcn-style primitives belong in `components/ui/`. Keep shared helpers in `lib/` and static assets such as `public/portrait.png` in `public/`. The `@/*` alias resolves from the repository root.

## Build, Test, and Development Commands

- `npm ci` — install exactly the versions recorded in `package-lock.json`.
- `npm run dev` — start the local development server at `http://localhost:3000`.
- `npm run lint` — run ESLint across the repository.
- `npm run build` — create the production build and catch Next.js or TypeScript integration errors.
- `npm start` — serve a completed production build.
- `npx tsc --noEmit` — run a focused strict TypeScript check.

## Coding Style & Naming Conventions

Use strict TypeScript, React function components, two-space indentation, semicolons, and double-quoted imports. Name components and exported React functions in PascalCase, local values in camelCase, and component files in kebab-case (for example, `resume-toolbar.tsx`). Prefer the `@/` alias over long relative imports. Reuse `components/ui/` primitives and `lib/utils.ts`'s `cn()` helper; keep styling in Tailwind utilities and shared design or print rules in `app/globals.css`. No separate formatter is configured, so match nearby code and rely on ESLint.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Every change must pass `npm run lint`, `npx tsc --noEmit`, and `npm run build`. For visual changes, inspect light and dark themes at desktop and narrow widths. Also use print preview with A4 paper, no margins, background graphics enabled, and 100% scale; confirm page breaks, portrait rendering, and the hidden toolbar. If tests are introduced, colocate them as `*.test.ts` or `*.test.tsx` and add the runner to `package.json`.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so no established subject pattern can be inferred. Use a concise, imperative, intent-first subject. Add decision trailers when useful, especially `Confidence:`, `Scope-risk:`, and `Tested:`. Pull requests should explain the user-visible result, list validation commands, link relevant issues, and include screenshots for UI changes plus print-preview evidence when pagination or styling changes. Keep commits focused and avoid committing `.next/`, local settings, or generated exports.
