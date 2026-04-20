# @ecdaerol/calculator-ui

Shared design tokens, Tailwind preset, and React chrome components for the
`@ecdaerol` engineering calculator suite. One source of truth for colours,
typography, cards, badges, and dimension lines — so all 22 calculators stay
visually consistent and the dark embed mode keeps working out of the box.

> **Status:** v0.1.0 — public GitHub repo, not yet on npm. Consume directly
> as a git dep. All 22 calculators now consume the package — migrations
> merged, visual regression pixel-identical across the board.

## Install

In the consumer calculator:

```bash
npm install --save-exact "github:ecdaerol/calculator-ui#main"
```

The package ships a pre-built `dist/` on `main`, so no build step or
`prepare` script runs on the consumer side.

## Usage

### 1. Import the design tokens

In your entry point (`src/main.tsx` or similar), import the tokens **before**
your own stylesheet so local rules can build on the tokens:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@ecdaerol/calculator-ui/tokens.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

Then delete the local `:root { ... }`, `.embed-dark { ... }`, and
`.embed-dark select/summary/details/scrollbar` blocks from your local
`src/index.css`. The package provides all of them.

> Importing from `main.tsx` (JS-side) rather than via CSS `@import` avoids
> the standard-CSS rule that `@import` must precede every other statement —
> Vite's postcss pipeline doesn't always lift `@import` past `@tailwind`
> directives.

The tokens exported: `--bg`, `--panel`, `--ink`, `--muted`, `--line`,
`--brand`, `--brand-2`, `--ok`, `--ok-bg`, `--warn`, `--warn-bg`, `--danger`,
`--danger-bg`, `--info`, `--info-bg`, `--bar-track`, `--shadow`, `--on-brand`,
`--disabled-text`, `--na-bg`, `--alert-*`, plus the `.embed-dark` overrides
and the form/scrollbar/summary/details embed rules.

### 2. Adopt the Tailwind preset

In `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require('@ecdaerol/calculator-ui/tailwind-preset')],
};
```

This wires utilities like `bg-panel`, `text-ink`, `border-line`,
`text-brand`, `bg-ok-bg`, `text-warn`, `bg-bar-track`, etc.

### 3. Wire embed mode

```tsx
import { useEmbedMode } from '@ecdaerol/calculator-ui';

export default function App() {
  const { isEmbed, isDark } = useEmbedMode();
  // The hook automatically toggles `embed-dark` on document.body when
  // ?embed=dark is present, so token switching is automatic.
  return <main>{/* ... */}</main>;
}
```

### 4. Use the components

```tsx
import {
  Card,
  HeroCard,
  KpiTile,
  StatusBadge,
  InfoChip,
  DimensionLine,
} from '@ecdaerol/calculator-ui';

<HeroCard
  eyebrow="VDI 2230"
  title="M10 × 1.5 — Property class 10.9"
  subtitle="Friction class B, lubricated thread"
  aside={
    <KpiTile label="Utilisation" value="78" unit="%" tone="ok" />
  }
/>;

<Card>
  <StatusBadge variant="warn">Re-check preload</StatusBadge>
  <InfoChip label="Material" tone="info">42CrMo4</InfoChip>
</Card>;

<svg viewBox="0 0 200 100">
  <DimensionLine x1={20} y1={60} x2={180} y2={60} label="160 mm" />
</svg>;
```

## Components

| Component       | Purpose                                                              |
| --------------- | -------------------------------------------------------------------- |
| `Card`          | Base panel surface; `padding` prop (`none`/`sm`/`md`/`lg`).          |
| `HeroCard`      | Full-width hero w/ optional `eyebrow`, `title`, `subtitle`, `aside`. |
| `KpiTile`       | Compact KPI box; `tone` controls value colour and tinted bg.         |
| `StatusBadge`   | Pill indicator with `ok`/`warn`/`danger`/`info`/`na` variants.       |
| `InfoChip`      | Key/value chip for auxiliary metadata.                               |
| `DimensionLine` | SVG `<g>` with end ticks + midpoint label, for diagram dimensioning. |

All components:
- Accept a `className` prop merged via the inline `cx()` helper.
- Forward refs.
- Are tree-shakeable (named exports).
- Use **only** the tokens defined in `tokens.css` — no hardcoded colours.

## Hooks

| Hook            | Purpose                                                              |
| --------------- | -------------------------------------------------------------------- |
| `useEmbedMode`  | Parses `?embed=` and toggles `embed-dark` on `document.body`.        |

## Build / develop

```bash
npm install
npm run build       # vite library build → dist/index.js + dist/tokens.css + dist/index.d.ts
npm run typecheck   # tsc --noEmit
```

## Constraints

- No CSS-in-JS, no styled-components, no heavy chrome dependencies — keep
  the bundle ~10 KB gzipped.
- React and React DOM are externalised peer dependencies.
- Visual regression CI landed across all 22 calculator repos, so migrations
  are safe: any token drift fails the consumer's visual job immediately.
