import { HTMLAttributes, ReactNode } from 'react';
export type StatusVariant = 'ok' | 'warn' | 'danger' | 'info' | 'na';
export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant: StatusVariant;
    /** Custom label override. When omitted, a sensible default per-variant is used. */
    children?: ReactNode;
}
/**
 * Small pill-shaped status indicator. Uses the semantic colour tokens so it
 * stays legible in both light and dark embed themes.
 */
export declare const StatusBadge: import("react").ForwardRefExoticComponent<StatusBadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=StatusBadge.d.ts.map