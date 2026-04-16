import { HTMLAttributes, ReactNode } from 'react';
export interface HeroCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Small uppercase label rendered above the title. */
    eyebrow?: ReactNode;
    /** Primary heading. */
    title: ReactNode;
    /** Optional subtitle below the heading. */
    subtitle?: ReactNode;
    /** Right-aligned slot for KPI tiles, badges, etc. */
    aside?: ReactNode;
}
/**
 * Full-width hero card used at the top of a results layout. Larger padding,
 * slightly thicker brand-tinted border, and optional eyebrow + aside slots.
 */
export declare const HeroCard: import("react").ForwardRefExoticComponent<HeroCardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HeroCard.d.ts.map