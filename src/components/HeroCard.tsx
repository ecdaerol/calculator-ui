import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

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
export const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(function HeroCard(
  { eyebrow, title, subtitle, aside, className, style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx('w-full', className)}
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--line)',
        borderRadius: 16,
        boxShadow: '0 1px 3px var(--shadow)',
        padding: '20px 24px',
        ...style,
      }}
      {...rest}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-1"
              style={{ color: 'var(--muted)' }}
            >
              {eyebrow}
            </div>
          )}
          <h2
            className="text-xl sm:text-2xl font-extrabold tracking-tight"
            style={{ color: 'var(--ink)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </p>
          )}
        </div>
        {aside && <div className="flex-shrink-0">{aside}</div>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
});
