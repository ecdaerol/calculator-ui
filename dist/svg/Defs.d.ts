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
export declare function CuiDefs({ color }: CuiDefsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Defs.d.ts.map