import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export type StatusVariant = 'ok' | 'warn' | 'danger' | 'info' | 'na';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: StatusVariant;
  /** Custom label override. When omitted, a sensible default per-variant is used. */
  children?: ReactNode;
}

const toneFg: Record<StatusVariant, string> = {
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  danger: 'var(--danger)',
  info: 'var(--info)',
  na: 'var(--muted)',
};

const toneBg: Record<StatusVariant, string> = {
  ok: 'var(--ok-bg)',
  warn: 'var(--warn-bg)',
  danger: 'var(--danger-bg)',
  info: 'var(--info-bg)',
  na: 'var(--na-bg)',
};

const defaultLabel: Record<StatusVariant, string> = {
  ok: 'OK',
  warn: 'WARNING',
  danger: 'DANGER',
  info: 'INFO',
  na: 'N/A',
};

/**
 * Small pill-shaped status indicator. Uses the semantic colour tokens so it
 * stays legible in both light and dark embed themes.
 */
export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  function StatusBadge({ variant, children, className, style, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cx(
          'inline-block px-2 py-0.5 rounded-full text-xs font-bold',
          className,
        )}
        style={{
          backgroundColor: toneBg[variant],
          color: toneFg[variant],
          ...style,
        }}
        {...rest}
      >
        {children ?? defaultLabel[variant]}
      </span>
    );
  },
);
