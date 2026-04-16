import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export type InfoChipTone = 'neutral' | 'brand' | 'ok' | 'warn' | 'danger' | 'info';

export interface InfoChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: InfoChipTone;
  /** Optional leading label rendered in muted colour. */
  label?: ReactNode;
  children?: ReactNode;
}

const toneFg: Record<InfoChipTone, string> = {
  neutral: 'var(--ink)',
  brand: 'var(--brand)',
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  danger: 'var(--danger)',
  info: 'var(--info)',
};

const toneBg: Record<InfoChipTone, string> = {
  neutral: 'var(--info-bg)',
  brand: 'var(--panel)',
  ok: 'var(--ok-bg)',
  warn: 'var(--warn-bg)',
  danger: 'var(--danger-bg)',
  info: 'var(--info-bg)',
};

/**
 * Informational chip — small key/value pill typically used to surface
 * auxiliary metadata (units, modes, quick stats).
 */
export const InfoChip = forwardRef<HTMLSpanElement, InfoChipProps>(function InfoChip(
  { tone = 'neutral', label, children, className, style, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium',
        className,
      )}
      style={{
        backgroundColor: toneBg[tone],
        color: toneFg[tone],
        border: '1px solid var(--line)',
        ...style,
      }}
      {...rest}
    >
      {label && (
        <span className="font-semibold" style={{ color: 'var(--muted)' }}>
          {label}
        </span>
      )}
      {children}
    </span>
  );
});
