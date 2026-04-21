/**
 * Numeric SVG design tokens — mirror the values in tokens.css.
 * Use inside TSX so stroke-widths/font-sizes never drift per diagram.
 */
export declare const SVG_STROKE: {
    readonly heavy: 1.5;
    readonly medium: 1;
    readonly light: 0.6;
    readonly hair: 0.4;
};
export declare const SVG_TEXT: {
    readonly title: 12;
    readonly label: 10;
    readonly dim: 9;
    readonly caption: 8;
};
export declare const SVG_DASH: {
    readonly pitch: "3 2";
    readonly construction: "2 2";
};
/** CSS var names — prefer inline `style={{ fill: SVG_COLOR.dim }}`. */
export declare const SVG_COLOR: {
    readonly ink: "var(--svg-ink)";
    readonly muted: "var(--svg-muted)";
    readonly dim: "var(--svg-dim-stroke)";
    readonly dimText: "var(--svg-dim-text)";
    readonly accent: "var(--svg-accent)";
    readonly accent2: "var(--svg-accent-2)";
    readonly fillNeutral: "var(--svg-fill-neutral)";
    readonly fillAccent: "var(--svg-fill-accent)";
    readonly fillAccent2: "var(--svg-fill-accent-2)";
};
/** Minimum clearance between rotation arrows and adjacent geometry. */
export declare const SVG_CLEARANCE: {
    /** Extension-line gap from the witnessed object edge. */
    readonly witnessGap: 2;
    /** How far past the dimension line the extension continues. */
    readonly witnessOvershoot: 4;
    /** Offset from object edge to dimension line. */
    readonly dimOffset: 10;
    /** Rotation-arrow clearance from mating body. */
    readonly rotationClearance: 6;
};
//# sourceMappingURL=tokens.d.ts.map