import { HTMLAttributes, ReactNode } from 'react';
export type InfoChipTone = 'neutral' | 'brand' | 'ok' | 'warn' | 'danger' | 'info';
export interface InfoChipProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: InfoChipTone;
    /** Optional leading label rendered in muted colour. */
    label?: ReactNode;
    children?: ReactNode;
}
/**
 * Informational chip — small key/value pill typically used to surface
 * auxiliary metadata (units, modes, quick stats).
 */
export declare const InfoChip: import("react").ForwardRefExoticComponent<InfoChipProps & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=InfoChip.d.ts.map