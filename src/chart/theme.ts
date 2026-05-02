/**
 * Shared Recharts theming for the @ecdaerol calculator suite.
 *
 * Spread these objects into Recharts component props so axis ticks, labels,
 * tooltips, and reference-line labels stay visually consistent across every
 * tool. Colour-via-tokens (`var(--ink)`, `var(--line)`, `var(--panel)`) means
 * the same chart automatically flips between light and dark embeds.
 */

export const chartTheme = {
  axisTick: { fontSize: 10, fill: 'currentColor', opacity: 0.65 },
  axisLabel: { fontSize: 11, fill: 'currentColor', opacity: 0.7 },
  refLineLabel: { fontSize: 10, fontWeight: 600 },
  tooltipContent: {
    fontSize: 12,
    backgroundColor: 'var(--panel)',
    border: '1px solid var(--line)',
    borderRadius: 8,
    color: 'var(--ink)',
  },
  grid: {
    stroke: 'var(--line)',
    strokeDasharray: '3 3',
    opacity: 0.5,
  },
  axis: {
    stroke: 'currentColor',
    strokeOpacity: 0.4,
    tickMargin: 8,
  },
} as const;

/**
 * Canonical series palette. Use semantic slots — `primary`, `secondary` —
 * not raw hex. Status colours (`ok`/`warn`/`danger`) live on tokens and are
 * reserved for pass/fail signalling, never for distinguishing series.
 */
export const seriesPalette = {
  primary: '#3b82f6',
  secondary: '#f59e0b',
  tertiary: '#10b981',
  quaternary: '#a855f7',
  brand: 'var(--brand)',
  muted: 'var(--muted)',
  line: 'var(--line)',
} as const;

export type SeriesPalette = typeof seriesPalette;
