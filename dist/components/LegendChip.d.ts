import { HTMLAttributes, ReactNode } from 'react';
export type LegendChipKind = 'line' | 'dashed' | 'dot' | 'swatch';
export interface LegendChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
    /** Visual marker style. */
    kind?: LegendChipKind;
    /** CSS colour for the marker (token or hex). */
    color: string;
    /** Label text. */
    children: ReactNode;
}
/**
 * Inline legend chip for the header slot of a `DiagramCard`. Standardises the
 * marker geometry and text size so every diagram in the suite looks the same.
 */
export declare function LegendChip({ kind, color, children, className, ...rest }: LegendChipProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LegendChip.d.ts.map