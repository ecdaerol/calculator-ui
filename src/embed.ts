import { useEffect, useState } from 'react';

export interface EmbedMode {
  /** True when the calculator is loaded inside any embed (?embed=...) */
  isEmbed: boolean;
  /** True specifically for ?embed=dark */
  isDark: boolean;
}

function readEmbedFromLocation(): EmbedMode {
  if (typeof window === 'undefined') return { isEmbed: false, isDark: false };
  const params = new URLSearchParams(window.location.search);
  const embed = params.get('embed');
  return { isEmbed: embed !== null, isDark: embed === 'dark' };
}

/**
 * Reads the `?embed=` query parameter and (when `embed=dark`) toggles the
 * `embed-dark` class on `document.body` so the design tokens flip to the
 * dark variant defined in `tokens.css`.
 *
 * Safe to call from SSR — returns `{ isEmbed: false, isDark: false }` and
 * skips DOM mutation when `window` is undefined.
 */
export function useEmbedMode(): EmbedMode {
  const [mode, setMode] = useState<EmbedMode>(() => readEmbedFromLocation());

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const next = readEmbedFromLocation();
    setMode(next);
    if (next.isDark) {
      document.body.classList.add('embed-dark');
    } else {
      document.body.classList.remove('embed-dark');
    }
    return () => {
      document.body.classList.remove('embed-dark');
    };
  }, []);

  return mode;
}
