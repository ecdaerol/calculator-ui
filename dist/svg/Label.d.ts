import { ReactNode } from 'react';
export type LabelVariant = 'title' | 'label' | 'dim' | 'caption';
export interface SvgLabelProps {
    x: number;
    y: number;
    /** Visual variant determining size and weight. */
    variant?: LabelVariant;
    /** Text anchor. Defaults to `middle`. */
    anchor?: 'start' | 'middle' | 'end';
    /** Fill colour. Defaults depend on variant (title/label → ink, dim → dim, caption → muted). */
    color?: string;
    /** Optional rotation (degrees) around (x, y). */
    rotate?: number;
    children: ReactNode;
}
/**
 * Typography primitive for calculator diagrams. Fixes font-family, size, and
 * weight to the design tokens so labels read consistently across every tool.
 */
export declare function SvgLabel({ x, y, variant, anchor, color, rotate, children, }: SvgLabelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Label.d.ts.map