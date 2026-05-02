/**
 * Shared Recharts theming for the @ecdaerol calculator suite.
 *
 * Spread these objects into Recharts component props so axis ticks, labels,
 * tooltips, and reference-line labels stay visually consistent across every
 * tool. Colour-via-tokens (`var(--ink)`, `var(--line)`, `var(--panel)`) means
 * the same chart automatically flips between light and dark embeds.
 */
export declare const chartTheme: {
    readonly axisTick: {
        readonly fontSize: 10;
        readonly fill: "currentColor";
        readonly opacity: 0.65;
    };
    readonly axisLabel: {
        readonly fontSize: 11;
        readonly fill: "currentColor";
        readonly opacity: 0.7;
    };
    readonly refLineLabel: {
        readonly fontSize: 10;
        readonly fontWeight: 600;
    };
    readonly tooltipContent: {
        readonly fontSize: 12;
        readonly backgroundColor: "var(--panel)";
        readonly border: "1px solid var(--line)";
        readonly borderRadius: 8;
        readonly color: "var(--ink)";
    };
    readonly grid: {
        readonly stroke: "var(--line)";
        readonly strokeDasharray: "3 3";
        readonly opacity: 0.5;
    };
    readonly axis: {
        readonly stroke: "currentColor";
        readonly strokeOpacity: 0.4;
        readonly tickMargin: 8;
    };
};
/**
 * Canonical series palette. Use semantic slots — `primary`, `secondary` —
 * not raw hex. Status colours (`ok`/`warn`/`danger`) live on tokens and are
 * reserved for pass/fail signalling, never for distinguishing series.
 */
export declare const seriesPalette: {
    readonly primary: "#3b82f6";
    readonly secondary: "#f59e0b";
    readonly tertiary: "#10b981";
    readonly quaternary: "#a855f7";
    readonly brand: "var(--brand)";
    readonly muted: "var(--muted)";
    readonly line: "var(--line)";
};
export type SeriesPalette = typeof seriesPalette;
//# sourceMappingURL=theme.d.ts.map