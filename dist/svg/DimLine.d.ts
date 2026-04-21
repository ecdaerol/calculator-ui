import { ReactNode } from 'react';
export interface DimLineProps {
    /** Witnessed edge start point (object edge the dimension refers to). */
    fromEdge: {
        x: number;
        y: number;
    };
    /** Witnessed edge end point. */
    toEdge: {
        x: number;
        y: number;
    };
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
export declare function DimLine({ fromEdge, toEdge, offset, label, color, labelColor, labelSize, arrows, }: DimLineProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DimLine.d.ts.map