import { ReactNode } from 'react';
import { SVG_COLOR, SVG_TEXT } from './tokens';

export type LabelVariant = 'title' | 'label' | 'dim' | 'caption';

const SIZE: Record<LabelVariant, number> = {
  title: SVG_TEXT.title,
  label: SVG_TEXT.label,
  dim: SVG_TEXT.dim,
  caption: SVG_TEXT.caption,
};

const WEIGHT: Record<LabelVariant, number> = {
  title: 700,
  label: 600,
  dim: 700,
  caption: 400,
};

export interface SvgLabelProps {
  x: number;
  y: number;
  /** Visual variant determining size and weight. */
  variant?: LabelVariant;
  /** Text anchor. Defaults to `middle`. */
  anchor?: 'start' | 'middle' | 'end';
  /** Fill colour. Defaults depend on variant (title/label → ink, dim → dim, caption → muted). */
  color?: string;
  /** Optional rotation (degrees) around (x, y). */
  rotate?: number;
  children: ReactNode;
}

const DEFAULT_COLOR: Record<LabelVariant, string> = {
  title: SVG_COLOR.ink,
  label: SVG_COLOR.ink,
  dim: SVG_COLOR.dimText,
  caption: SVG_COLOR.muted,
};

/**
 * Typography primitive for calculator diagrams. Fixes font-family, size, and
 * weight to the design tokens so labels read consistently across every tool.
 */
export function SvgLabel({
  x,
  y,
  variant = 'label',
  anchor = 'middle',
  color,
  rotate,
  children,
}: SvgLabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={SIZE[variant]}
      fontWeight={WEIGHT[variant]}
      fill={color ?? DEFAULT_COLOR[variant]}
      style={{ fontFamily: 'var(--font-mono)' }}
      transform={rotate ? `rotate(${rotate}, ${x}, ${y})` : undefined}
    >
      {children}
    </text>
  );
}
