export interface EmbedMode {
    /** True when the calculator is loaded inside any embed (?embed=...) */
    isEmbed: boolean;
    /** True specifically for ?embed=dark */
    isDark: boolean;
}
/**
 * Reads the `?embed=` query parameter and (when `embed=dark`) toggles the
 * `embed-dark` class on `document.body` so the design tokens flip to the
 * dark variant defined in `tokens.css`.
 *
 * Safe to call from SSR — returns `{ isEmbed: false, isDark: false }` and
 * skips DOM mutation when `window` is undefined.
 */
export declare function useEmbedMode(): EmbedMode;
//# sourceMappingURL=embed.d.ts.map