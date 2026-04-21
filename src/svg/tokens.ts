/**
 * Numeric SVG design tokens — mirror the values in tokens.css.
 * Use inside TSX so stroke-widths/font-sizes never drift per diagram.
 */

export const SVG_STROKE = {
  heavy: 1.5,
  medium: 1,
  light: 0.6,
  hair: 0.4,
} as const;

export const SVG_TEXT = {
  title: 12,
  label: 10,
  dim: 9,
  caption: 8,
} as const;

export const SVG_DASH = {
  pitch: '3 2',
  construction: '2 2',
} as const;

/** CSS var names — prefer inline `style={{ fill: SVG_COLOR.dim }}`. */
export const SVG_COLOR = {
  ink: 'var(--svg-ink)',
  muted: 'var(--svg-muted)',
  dim: 'var(--svg-dim-stroke)',
  dimText: 'var(--svg-dim-text)',
  accent: 'var(--svg-accent)',
  accent2: 'var(--svg-accent-2)',
  fillNeutral: 'var(--svg-fill-neutral)',
  fillAccent: 'var(--svg-fill-accent)',
  fillAccent2: 'var(--svg-fill-accent-2)',
} as const;

/** Minimum clearance between rotation arrows and adjacent geometry. */
export const SVG_CLEARANCE = {
  /** Extension-line gap from the witnessed object edge. */
  witnessGap: 2,
  /** How far past the dimension line the extension continues. */
  witnessOvershoot: 4,
  /** Offset from object edge to dimension line. */
  dimOffset: 10,
  /** Rotation-arrow clearance from mating body. */
  rotationClearance: 6,
} as const;
