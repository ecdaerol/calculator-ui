import { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../cx';

export type LegendChipKind = 'line' | 'dashed' | 'dot' | 'swatch';

export interface LegendChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Visual marker style. */
  kind?: LegendChipKind;
  /** CSS colour for the marker (token or hex). */
  color: string;
  /** Label text. */
  children: ReactNode;
}

/**
 * Inline legend chip for the header slot of a `DiagramCard`. Standardises the
 * marker geometry and text size so every diagram in the suite looks the same.
 */
export function LegendChip({ kind = 'line', color, children, className, ...rest }: LegendChipProps) {
  return (
    <span
      className={cx('inline-flex items-center gap-1.5 text-xs', className)}
      style={{ color: 'var(--ink)' }}
      {...rest}
    >
      <Marker kind={kind} color={color} />
      {children}
    </span>
  );
}

function Marker({ kind, color }: { kind: LegendChipKind; color: string }) {
  if (kind === 'dot') {
    return (
      <span
        aria-hidden="true"
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    );
  }
  if (kind === 'swatch') {
    return (
      <span
        aria-hidden="true"
        className="inline-block w-3 h-2 rounded-sm"
        style={{ backgroundColor: color, opacity: 0.85 }}
      />
    );
  }
  if (kind === 'dashed') {
    return (
      <span
        aria-hidden="true"
        className="inline-block w-3"
        style={{
          height: 0,
          borderTop: `1.5px dashed ${color}`,
        }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-block w-3 h-0.5 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}
