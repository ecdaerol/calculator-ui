import { SVG_CLEARANCE, SVG_COLOR, SVG_STROKE } from './tokens';

export interface RotationArrowProps {
  cx: number;
  cy: number;
  /** Outer radius of the body being rotated (e.g. gear outer radius). */
  bodyRadius: number;
  /** Direction of rotation. */
  clockwise: boolean;
  /**
   * Arc span in degrees. Defaults to 120°. Arc is centred on `baseAngleDeg`
   * so you can place it on the side away from any mating body.
   */
  spanDeg?: number;
  /**
   * Angle (deg, 0° = +x, CCW positive) around which the arc is centred.
   * Defaults to 90° (top of the circle).
   */
  baseAngleDeg?: number;
  /** Extra clearance beyond the minimum offset. Defaults to 0. */
  extraClearance?: number;
  /** Stroke colour — defaults to the dimension stroke. */
  color?: string;
}

/**
 * Rotation indicator drawn as a circular arc with an arrowhead.
 *
 * The arc sits at `bodyRadius + rotationClearance + extraClearance` from the
 * centre so it never cuts into the body it annotates or an adjacent mating
 * body. Caller should pass `baseAngleDeg` pointing away from any mating body
 * (e.g. for two gears meshing horizontally, use 90° on one and -90° on the
 * other so arrows arc above and below rather than through the mesh).
 *
 * Requires `<CuiDefs />` in the enclosing SVG for the `cui-arrow` marker.
 */
export function RotationArrow({
  cx,
  cy,
  bodyRadius,
  clockwise,
  spanDeg = 120,
  baseAngleDeg = 90,
  extraClearance = 0,
  color = SVG_COLOR.dim,
}: RotationArrowProps) {
  const r = bodyRadius + SVG_CLEARANCE.rotationClearance + extraClearance;
  const halfSpan = spanDeg / 2;

  const startAngle = clockwise ? baseAngleDeg - halfSpan : baseAngleDeg + halfSpan;
  const endAngle = clockwise ? baseAngleDeg + halfSpan : baseAngleDeg - halfSpan;
  const s = (startAngle * Math.PI) / 180;
  const e = (endAngle * Math.PI) / 180;

  // SVG y is flipped — negate so baseAngleDeg=90 is visually "top".
  const sx = cx + r * Math.cos(s);
  const sy = cy - r * Math.sin(s);
  const ex = cx + r * Math.cos(e);
  const ey = cy - r * Math.sin(e);

  // SVG arc sweep flag (1 = clockwise in screen space). Our baseAngleDeg
  // convention has y flipped, so mathematical "clockwise" matches SVG.
  const sweep = clockwise ? 1 : 0;

  const d = `M ${sx},${sy} A ${r},${r} 0 0 ${sweep} ${ex},${ey}`;

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={SVG_STROKE.light}
      markerEnd="url(#cui-arrow)"
    />
  );
}
