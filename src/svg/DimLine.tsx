import { ReactNode } from 'react';
import { SVG_CLEARANCE, SVG_COLOR, SVG_STROKE, SVG_TEXT } from './tokens';

export interface DimLineProps {
  /** Witnessed edge start point (object edge the dimension refers to). */
  fromEdge: { x: number; y: number };
  /** Witnessed edge end point. */
  toEdge: { x: number; y: number };
  /**
   * Perpendicular offset of the dimension line from the witnessed edge.
   * Positive offsets follow the left-hand normal of (fromEdge → toEdge).
   * Defaults to 10 units.
   */
  offset?: number;
  /** Label text (usually the measured value). */
  label?: ReactNode;
  /** Override stroke colour — defaults to the dimension stroke token. */
  color?: string;
  /** Override label text colour — defaults to `var(--svg-dim-text)`. */
  labelColor?: string;
  /** Override label font size — defaults to 9. */
  labelSize?: number;
  /** Show arrowheads (`cui-arrow` markers must be in the enclosing SVG defs). Default true. */
  arrows?: boolean;
}

/**
 * Engineering dimension line with witness (extension) lines.
 *
 * Draws:
 *  - two extension lines from each edge point, leaving a 2-unit gap and
 *    overshooting the dimension line by 4 units (matches ISO 129 convention)
 *  - a dimension line between the two extension lines with arrowheads
 *  - an optional label centred above the dimension line
 *
 * Requires `<CuiDefs />` in the enclosing SVG for arrowhead markers.
 */
export function DimLine({
  fromEdge,
  toEdge,
  offset = SVG_CLEARANCE.dimOffset,
  label,
  color = SVG_COLOR.dim,
  labelColor = SVG_COLOR.dimText,
  labelSize = SVG_TEXT.dim,
  arrows = true,
}: DimLineProps) {
  const dx = toEdge.x - fromEdge.x;
  const dy = toEdge.y - fromEdge.y;
  const len = Math.hypot(dx, dy) || 1;
  // Left-hand unit normal
  const nx = -dy / len;
  const ny = dx / len;

  const gap = SVG_CLEARANCE.witnessGap;
  const over = SVG_CLEARANCE.witnessOvershoot;

  // Witness (extension) line endpoints: start `gap` off the edge, end `over`
  // past the dimension line.
  const e1x1 = fromEdge.x + nx * gap;
  const e1y1 = fromEdge.y + ny * gap;
  const e1x2 = fromEdge.x + nx * (offset + over);
  const e1y2 = fromEdge.y + ny * (offset + over);

  const e2x1 = toEdge.x + nx * gap;
  const e2y1 = toEdge.y + ny * gap;
  const e2x2 = toEdge.x + nx * (offset + over);
  const e2y2 = toEdge.y + ny * (offset + over);

  // Dimension line endpoints sit on the extension lines at the given offset.
  const d1x = fromEdge.x + nx * offset;
  const d1y = fromEdge.y + ny * offset;
  const d2x = toEdge.x + nx * offset;
  const d2y = toEdge.y + ny * offset;

  const mx = (d1x + d2x) / 2;
  const my = (d1y + d2y) / 2;
  // Push label 4 units further along the normal so it sits just above the line.
  const lx = mx + nx * 4;
  const ly = my + ny * 4;

  return (
    <g>
      {/* Witness lines */}
      <line
        x1={e1x1}
        y1={e1y1}
        x2={e1x2}
        y2={e1y2}
        stroke={color}
        strokeWidth={SVG_STROKE.hair}
      />
      <line
        x1={e2x1}
        y1={e2y1}
        x2={e2x2}
        y2={e2y2}
        stroke={color}
        strokeWidth={SVG_STROKE.hair}
      />
      {/* Dimension line with arrowheads */}
      <line
        x1={d1x}
        y1={d1y}
        x2={d2x}
        y2={d2y}
        stroke={color}
        strokeWidth={SVG_STROKE.light}
        markerStart={arrows ? 'url(#cui-arrow-rev)' : undefined}
        markerEnd={arrows ? 'url(#cui-arrow)' : undefined}
      />
      {label !== undefined && label !== null && (
        <text
          x={lx}
          y={ly}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={labelSize}
          fontWeight={700}
          fill={labelColor}
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {label}
        </text>
      )}
    </g>
  );
}
