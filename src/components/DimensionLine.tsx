import { forwardRef, SVGProps, ReactNode } from 'react';

export interface DimensionLineProps extends Omit<SVGProps<SVGGElement>, 'x1' | 'y1' | 'x2' | 'y2'> {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Optional text rendered at the midpoint of the line. */
  label?: ReactNode;
  /** Length of the perpendicular tick marks at either end. */
  tickSize?: number;
  /** Stroke colour — defaults to `var(--muted)`. */
  stroke?: string;
  /** Stroke width — defaults to 1. */
  strokeWidth?: number;
  /** Pixel offset of the label from the line — positive pushes "above". */
  labelOffset?: number;
  /** Colour of the label text — defaults to `var(--ink)`. */
  labelColor?: string;
  /** Font size for the label — defaults to 11. */
  labelSize?: number;
}

/**
 * SVG dimension line with perpendicular end ticks and an optional midpoint
 * label. Intended for use inside engineering diagrams (e.g. assembly or
 * joint schematics). Renders as an `<g>` so it can be composed into any SVG.
 */
export const DimensionLine = forwardRef<SVGGElement, DimensionLineProps>(
  function DimensionLine(
    {
      x1,
      y1,
      x2,
      y2,
      label,
      tickSize = 6,
      stroke = 'var(--muted)',
      strokeWidth = 1,
      labelOffset = 10,
      labelColor = 'var(--ink)',
      labelSize = 11,
      ...rest
    },
    ref,
  ) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    // Perpendicular unit vector
    const nx = -dy / len;
    const ny = dx / len;
    const tx = nx * (tickSize / 2);
    const ty = ny * (tickSize / 2);

    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const lx = mx + nx * labelOffset;
    const ly = my + ny * labelOffset;

    return (
      <g ref={ref} {...rest}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} />
        <line
          x1={x1 - tx}
          y1={y1 - ty}
          x2={x1 + tx}
          y2={y1 + ty}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <line
          x1={x2 - tx}
          y1={y2 - ty}
          x2={x2 + tx}
          y2={y2 + ty}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        {label !== undefined && label !== null && (
          <text
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={labelSize}
            fill={labelColor}
          >
            {label}
          </text>
        )}
      </g>
    );
  },
);
