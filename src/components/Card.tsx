import { forwardRef, HTMLAttributes } from 'react';
import { cx } from '../cx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional padding preset — defaults to `md` (p-4 equivalent). */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingMap = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
} as const;

/**
 * Base surface card. Uses `--panel`, `--line`, and `--shadow` tokens so it
 * automatically flips between light and dark embed themes.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, padding = 'md', style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx(paddingMap[padding], className)}
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--line)',
        borderRadius: 12,
        boxShadow: '0 1px 3px var(--shadow)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});
