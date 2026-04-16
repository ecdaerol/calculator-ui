import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export type KpiTone = 'neutral' | 'brand' | 'ok' | 'warn' | 'danger' | 'info';

export interface KpiTileProps extends HTMLAttributes<HTMLDivElement> {
  /** Small label above the value. */
  label: ReactNode;
  /** The primary number / string to highlight. */
  value: ReactNode;
  /** Optional unit rendered next to the value. */
  unit?: ReactNode;
  /** Optional helper text below the value. */
  hint?: ReactNode;
  /** Colour tone for the value (and subtle tinted background). */
  tone?: KpiTone;
}

const toneColor: Record<KpiTone, string> = {
  neutral: 'var(--ink)',
  brand: 'var(--brand)',
  ok: 'var(--ok)',
  warn: 'var(--warn)',
  danger: 'var(--danger)',
  info: 'var(--info)',
};

const toneBg: Record<KpiTone, string | undefined> = {
  neutral: undefined,
  brand: undefined,
  ok: 'var(--ok-bg)',
  warn: 'var(--warn-bg)',
  danger: 'var(--danger-bg)',
  info: 'var(--info-bg)',
};

/**
 * Compact KPI tile. Displays a label, a large token-coloured value, and an
 * optional hint — for use inside dashboards and hero asides.
 */
export const KpiTile = forwardRef<HTMLDivElement, KpiTileProps>(function KpiTile(
  { label, value, unit, hint, tone = 'neutral', className, style, ...rest },
  ref,
) {
  const bg = toneBg[tone];
  return (
    <div
      ref={ref}
      className={cx('rounded-xl px-4 py-3 flex flex-col gap-1', className)}
      style={{
        background: bg ?? 'var(--panel)',
        border: '1px solid var(--line)',
        minWidth: 140,
        ...style,
      }}
      {...rest}
    >
      <div
        className="text-[11px] font-semibold uppercase tracking-[0.06em]"
        style={{ color: 'var(--muted)' }}
      >
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span
          className="text-2xl font-extrabold tabular-nums"
          style={{ color: toneColor[tone] }}
        >
          {value}
        </span>
        {unit && (
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            {unit}
          </span>
        )}
      </div>
      {hint && (
        <div className="text-xs" style={{ color: 'var(--muted)' }}>
          {hint}
        </div>
      )}
    </div>
  );
});
