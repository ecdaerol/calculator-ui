import { HTMLAttributes, ReactNode } from 'react';
export type KpiTone = 'neutral' | 'brand' | 'ok' | 'warn' | 'danger' | 'info';
export interface KpiTileProps extends HTMLAttributes<HTMLDivElement> {
    /** Small label above the value. */
    label: ReactNode;
    /** The primary number / string to highlight. */
    value: ReactNode;
    /** Optional unit rendered next to the value. */
    unit?: ReactNode;
    /** Optional helper text below the value. */
    hint?: ReactNode;
    /** Colour tone for the value (and subtle tinted background). */
    tone?: KpiTone;
}
/**
 * Compact KPI tile. Displays a label, a large token-coloured value, and an
 * optional hint — for use inside dashboards and hero asides.
 */
export declare const KpiTile: import("react").ForwardRefExoticComponent<KpiTileProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=KpiTile.d.ts.map