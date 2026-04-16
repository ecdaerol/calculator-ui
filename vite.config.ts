import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { copyFileSync, mkdirSync } from 'node:fs';

/**
 * Library build for `@ecdaerol/calculator-ui`.
 * - Emits a single ESM bundle at `dist/index.js`.
 * - Externalises react/react-dom (they're peer dependencies).
 * - Copies `src/tokens.css` to `dist/tokens.css` so consumers can
 *   `@import "@ecdaerol/calculator-ui/tokens.css"`.
 */
export default defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
    minify: 'esbuild',
  },
  plugins: [
    {
      name: 'copy-tokens-css',
      closeBundle() {
        try {
          mkdirSync(resolve(__dirname, 'dist'), { recursive: true });
          copyFileSync(
            resolve(__dirname, 'src/tokens.css'),
            resolve(__dirname, 'dist/tokens.css'),
          );
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn('[calculator-ui] failed to copy tokens.css:', err);
        }
      },
    },
  ],
});
