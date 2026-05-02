import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

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

const tierHeight: Record<DiagramTier, number> = {
  compact: 220,
  standard: 320,
  tall: 420,
};

const tierMobileHeight: Record<DiagramTier, number> = {
  compact: 180,
  standard: 240,
  tall: 320,
};

/**
 * Canonical shell for every chart and SVG diagram in the suite. Owns the
 * card chrome, header (title + subtitle + legend), body height, footer, and
 * empty state so individual tools never set raw size constraints.
 */
export const DiagramCard = forwardRef<HTMLDivElement, DiagramCardProps>(function DiagramCard(
  { tier = 'standard', title, subtitle, legend, footer, empty, className, style, children, ...rest },
  ref,
) {
  const desktopH = tierHeight[tier];
  const mobileH = tierMobileHeight[tier];
  return (
    <div
      ref={ref}
      className={cx('w-full', className)}
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--line)',
        borderRadius: 12,
        boxShadow: '0 1px 3px var(--shadow)',
        padding: 24,
        ...style,
      }}
      {...rest}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </p>
          )}
        </div>
        {legend && <div className="flex flex-wrap items-center gap-3">{legend}</div>}
      </div>

      <div
        className="relative w-full"
        style={{ height: `clamp(${mobileH}px, 60vw, ${desktopH}px)` }}
      >
        {empty ? (
          <div
            className="absolute inset-0 flex items-center justify-center text-sm text-center px-6"
            style={{ color: 'var(--muted)' }}
          >
            {empty}
          </div>
        ) : (
          children
        )}
      </div>

      {footer && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">{footer}</div>
      )}
    </div>
  );
});
