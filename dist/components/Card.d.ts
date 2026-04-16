import { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional padding preset — defaults to `md` (p-4 equivalent). */
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
/**
 * Base surface card. Uses `--panel`, `--line`, and `--shadow` tokens so it
 * automatically flips between light and dark embed themes.
 */
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map