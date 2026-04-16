# @ecdaerol/calculator-ui

Shared design tokens, Tailwind preset, and React chrome components for the
`@ecdaerol` engineering calculator suite. One source of truth for colours,
typography, cards, badges, and dimension lines — so all 22 calculators stay
visually consistent and the dark embed mode keeps working out of the box.

> **Status:** v0.1.0 — private, not published to npm. Consume via local `npm
> pack` tarball or a `file:` dependency. The pilot tool is
> `fastener-torque-calculator`.

## Install

```bash
# From the calculator-ui repo
npm install
npm run build
npm pack          # produces ecdaerol-calculator-ui-0.1.0.tgz
```

In the consumer calculator:

```bash
npm install ../calculator-ui/ecdaerol-calculator-ui-0.1.0.tgz
```

## Usage

### 1. Import the design tokens

In your global stylesheet (e.g. `src/index.css`), replace the local
`:root { ... }` and `.embed-dark { ... }` blocks with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@ecdaerol/calculator-ui/tokens.css";
```

That single import provides every token the components and the Tailwind
preset reference: `--bg`, `--panel`, `--ink`, `--muted`, `--line`, `--brand`,
`--brand-2`, `--ok`, `--ok-bg`, `--warn`, `--warn-bg`, `--danger`,
`--danger-bg`, `--info`, `--info-bg`, `--bar-track`, plus the dark overrides
under `.embed-dark`.

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
- Package stays `private: true` until visual regression CI (Plan 3) lands
  and broader rollout is approved.
