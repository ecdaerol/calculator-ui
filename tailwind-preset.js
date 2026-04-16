/**
 * @ecdaerol/calculator-ui — Tailwind preset.
 *
 * Wires the design-token CSS variables (defined in `src/tokens.css`) into
 * Tailwind's `theme.colors` so utilities like `bg-panel`, `text-ink`,
 * `border-line`, and `text-brand` work everywhere — and automatically flip
 * when `.embed-dark` is applied to an ancestor.
 *
 * Usage in a consumer's `tailwind.config.js`:
 *
 *   export default {
 *     content: [...],
 *     presets: [require('@ecdaerol/calculator-ui/tailwind-preset')],
 *   };
 */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        brand: {
          DEFAULT: 'var(--brand)',
          2: 'var(--brand-2)',
        },
        ok: {
          DEFAULT: 'var(--ok)',
          bg: 'var(--ok-bg)',
        },
        warn: {
          DEFAULT: 'var(--warn)',
          bg: 'var(--warn-bg)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          bg: 'var(--danger-bg)',
        },
        info: {
          DEFAULT: 'var(--info)',
          bg: 'var(--info-bg)',
        },
        'bar-track': 'var(--bar-track)',
        'on-brand': 'var(--on-brand)',
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px var(--shadow)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
};
