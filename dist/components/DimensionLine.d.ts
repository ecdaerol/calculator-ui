import { SVGProps, ReactNode } from 'react';
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
export declare const DimensionLine: import("react").ForwardRefExoticComponent<Omit<DimensionLineProps, "ref"> & import("react").RefAttributes<SVGGElement>>;
//# sourceMappingURL=DimensionLine.d.ts.map