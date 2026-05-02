import { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export interface StatTileProps extends HTMLAttributes<HTMLDivElement> {
  /** Primary value (number, formatted string, or rich node). */
  value: ReactNode;
  /** Caption below the value. */
  label: ReactNode;
}

/**
 * Compact value/label pair used in the footer of a `DiagramCard`. Smaller
 * than `KpiTile` — designed to sit three-up below a chart, not to dominate
 * the page like a hero KPI.
 */
export function StatTile({ value, label, className, style, ...rest }: StatTileProps) {
  return (
    <div className={cx('text-[11px]', className)} style={{ color: 'var(--muted)', ...style }} {...rest}>
      <div className="font-semibold" style={{ color: 'var(--ink)' }}>
        {value}
      </div>
      <div>{label}</div>
    </div>
  );
}
