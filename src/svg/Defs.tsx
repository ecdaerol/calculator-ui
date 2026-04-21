import { SVG_COLOR } from './tokens';

/**
 * Shared <defs> block for calculator diagrams.
 *
 * Renders markers with consistent geometry:
 *  - `cui-arrow`      — filled triangle for the end of a line (refX at tip)
 *  - `cui-arrow-rev`  — same, for line starts (refX at base)
 *  - `cui-tick`       — short perpendicular tick for dimension-line ends
 *
 * Markers default to the --svg-dim-stroke colour. Pass `color` to override.
 *
 * Usage:
 *
 * ```tsx
 * <svg viewBox="0 0 400 280">
 *   <CuiDefs />
 *   <line markerEnd="url(#cui-arrow)" …/>
 * </svg>
 * ```
 */
export interface CuiDefsProps {
  /** Override marker colour. Defaults to the dimension stroke. */
  color?: string;
}

export function CuiDefs({ color = SVG_COLOR.dim }: CuiDefsProps) {
  return (
    <defs>
      <marker
        id="cui-arrow"
        markerWidth={8}
        markerHeight={6}
        refX={7}
        refY={3}
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <polygon points="0 0, 8 3, 0 6" fill={color} />
      </marker>
      <marker
        id="cui-arrow-rev"
        markerWidth={8}
        markerHeight={6}
        refX={1}
        refY={3}
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <polygon points="8 0, 0 3, 8 6" fill={color} />
      </marker>
      <marker
        id="cui-tick"
        markerWidth={6}
        markerHeight={6}
        refX={3}
        refY={3}
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <line x1={3} y1={0} x2={3} y2={6} stroke={color} strokeWidth={0.6} />
      </marker>
    </defs>
  );
}
