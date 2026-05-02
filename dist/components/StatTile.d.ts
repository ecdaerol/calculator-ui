import { HTMLAttributes, ReactNode } from 'react';
export interface StatTileProps extends HTMLAttributes<HTMLDivElement> {
    /** Primary value (number, formatted string, or rich node). */
    value: ReactNode;
    /** Caption below the value. */
    label: ReactNode;
}
/**
 * Compact value/label pair used in the footer of a `DiagramCard`. Smaller
 * than `KpiTile` — designed to sit three-up below a chart, not to dominate
 * the page like a hero KPI.
 */
export declare function StatTile({ value, label, className, style, ...rest }: StatTileProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StatTile.d.ts.map