import { HTMLAttributes, ReactNode } from 'react';
export type DiagramTier = 'compact' | 'standard' | 'tall';
export interface DiagramCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Body height tier. The three values are the only canonical heights in the
     * suite — replace any inline `maxHeight` / `max-w-[Npx]` with this prop.
     *
     *  - `compact`: 220 px (block diagrams, cross-sections, mini-schematics)
     *  - `standard`: 320 px (force-deformation, response curves, default)
     *  - `tall`: 420 px (Goodman, buckling envelopes, hero figures)
     */
    tier?: DiagramTier;
    /** Card title, rendered above the chart. */
    title: ReactNode;
    /** Optional one-line subtitle. */
    subtitle?: ReactNode;
    /** Header right-rail slot for legend chips. */
    legend?: ReactNode;
    /** Optional footer node — typically a row of `StatTile`s. */
    footer?: ReactNode;
    /**
     * Optional empty-state node. When provided, replaces children with a
     * centred message at the same body height — guarantees the card height
     * never collapses while inputs are missing.
     */
    empty?: ReactNode;
}
/**
 * Canonical shell for every chart and SVG diagram in the suite. Owns the
 * card chrome, header (title + subtitle + legend), body height, footer, and
 * empty state so individual tools never set raw size constraints.
 */
export declare const DiagramCard: import("react").ForwardRefExoticComponent<DiagramCardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DiagramCard.d.ts.map