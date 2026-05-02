import { useState as F, useEffect as j, forwardRef as g } from "react";
import { jsx as n, jsxs as u } from "react/jsx-runtime";
function D() {
  if (typeof window > "u") return { isEmbed: !1, isDark: !1 };
  const e = new URLSearchParams(window.location.search).get("embed");
  return { isEmbed: e !== null, isDark: e === "dark" };
}
function ae() {
  const [t, e] = F(() => D());
  return j(() => {
    if (typeof document > "u") return;
    const r = D();
    return e(r), r.isDark ? document.body.classList.add("embed-dark") : document.body.classList.remove("embed-dark"), () => {
      document.body.classList.remove("embed-dark");
    };
  }, []), t;
}
function y(...t) {
  return t.filter(Boolean).join(" ");
}
const z = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, ie = g(function({ className: e, padding: r = "md", style: a, children: i, ...o }, s) {
  return /* @__PURE__ */ n(
    "div",
    {
      ref: s,
      className: y(z[r], e),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        boxShadow: "0 1px 3px var(--shadow)",
        ...a
      },
      ...o,
      children: i
    }
  );
}), oe = g(function({ eyebrow: e, title: r, subtitle: a, aside: i, className: o, style: s, children: c, ...l }, d) {
  return /* @__PURE__ */ u(
    "div",
    {
      ref: d,
      className: y("w-full", o),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 16,
        boxShadow: "0 1px 3px var(--shadow)",
        padding: "20px 24px",
        ...s
      },
      ...l,
      children: [
        /* @__PURE__ */ u("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
          /* @__PURE__ */ u("div", { className: "min-w-0 flex-1", children: [
            e && /* @__PURE__ */ n(
              "div",
              {
                className: "text-[11px] font-semibold uppercase tracking-[0.08em] mb-1",
                style: { color: "var(--muted)" },
                children: e
              }
            ),
            /* @__PURE__ */ n(
              "h2",
              {
                className: "text-xl sm:text-2xl font-extrabold tracking-tight",
                style: { color: "var(--ink)" },
                children: r
              }
            ),
            a && /* @__PURE__ */ n("p", { className: "text-sm mt-1", style: { color: "var(--muted)" }, children: a })
          ] }),
          i && /* @__PURE__ */ n("div", { className: "flex-shrink-0", children: i })
        ] }),
        c && /* @__PURE__ */ n("div", { className: "mt-4", children: c })
      ]
    }
  );
}), _ = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, V = {
  neutral: void 0,
  brand: void 0,
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, se = g(function({ label: e, value: r, unit: a, hint: i, tone: o = "neutral", className: s, style: c, ...l }, d) {
  const p = V[o];
  return /* @__PURE__ */ u(
    "div",
    {
      ref: d,
      className: y("rounded-xl px-4 py-3 flex flex-col gap-1", s),
      style: {
        background: p ?? "var(--panel)",
        border: "1px solid var(--line)",
        minWidth: 140,
        ...c
      },
      ...l,
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: "text-[11px] font-semibold uppercase tracking-[0.06em]",
            style: { color: "var(--muted)" },
            children: e
          }
        ),
        /* @__PURE__ */ u("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: "text-2xl font-extrabold tabular-nums",
              style: { color: _[o] },
              children: r
            }
          ),
          a && /* @__PURE__ */ n("span", { className: "text-xs", style: { color: "var(--muted)" }, children: a })
        ] }),
        i && /* @__PURE__ */ n("div", { className: "text-xs", style: { color: "var(--muted)" }, children: i })
      ]
    }
  );
}), K = {
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)",
  na: "var(--muted)"
}, P = {
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)",
  na: "var(--na-bg)"
}, X = {
  ok: "OK",
  warn: "WARNING",
  danger: "DANGER",
  info: "INFO",
  na: "N/A"
}, le = g(
  function({ variant: e, children: r, className: a, style: i, ...o }, s) {
    return /* @__PURE__ */ n(
      "span",
      {
        ref: s,
        className: y(
          "inline-block px-2 py-0.5 rounded-full text-xs font-bold",
          a
        ),
        style: {
          backgroundColor: P[e],
          color: K[e],
          ...i
        },
        ...o,
        children: r ?? X[e]
      }
    );
  }
), Y = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, q = {
  neutral: "var(--info-bg)",
  brand: "var(--panel)",
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, ce = g(function({ tone: e = "neutral", label: r, children: a, className: i, style: o, ...s }, c) {
  return /* @__PURE__ */ u(
    "span",
    {
      ref: c,
      className: y(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        i
      ),
      style: {
        backgroundColor: q[e],
        color: Y[e],
        border: "1px solid var(--line)",
        ...o
      },
      ...s,
      children: [
        r && /* @__PURE__ */ n("span", { className: "font-semibold", style: { color: "var(--muted)" }, children: r }),
        a
      ]
    }
  );
}), de = g(
  function({
    x1: e,
    y1: r,
    x2: a,
    y2: i,
    label: o,
    tickSize: s = 6,
    stroke: c = "var(--muted)",
    strokeWidth: l = 1,
    labelOffset: d = 10,
    labelColor: p = "var(--ink)",
    labelSize: v = 11,
    ...m
  }, x) {
    const f = a - e, k = i - r, w = Math.hypot(f, k) || 1, N = -k / w, C = f / w, h = N * (s / 2), S = C * (s / 2), A = (e + a) / 2, R = (r + i) / 2, $ = A + N * d, M = R + C * d;
    return /* @__PURE__ */ u("g", { ref: x, ...m, children: [
      /* @__PURE__ */ n("line", { x1: e, y1: r, x2: a, y2: i, stroke: c, strokeWidth: l }),
      /* @__PURE__ */ n(
        "line",
        {
          x1: e - h,
          y1: r - S,
          x2: e + h,
          y2: r + S,
          stroke: c,
          strokeWidth: l
        }
      ),
      /* @__PURE__ */ n(
        "line",
        {
          x1: a - h,
          y1: i - S,
          x2: a + h,
          y2: i + S,
          stroke: c,
          strokeWidth: l
        }
      ),
      o != null && /* @__PURE__ */ n(
        "text",
        {
          x: $,
          y: M,
          textAnchor: "middle",
          dominantBaseline: "middle",
          fontSize: v,
          fill: p,
          children: o
        }
      )
    ] });
  }
), E = {
  compact: 220,
  standard: 320,
  tall: 420
}, Z = {
  compact: 180,
  standard: 240,
  tall: 320
}, me = g(function({ tier: e = "standard", title: r, subtitle: a, legend: i, footer: o, empty: s, className: c, style: l, children: d, ...p }, v) {
  const m = E[e], x = Z[e];
  return /* @__PURE__ */ u(
    "div",
    {
      ref: v,
      className: y("w-full", c),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        boxShadow: "0 1px 3px var(--shadow)",
        padding: 24,
        ...l
      },
      ...p,
      children: [
        /* @__PURE__ */ u("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-4", children: [
          /* @__PURE__ */ u("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ n("h3", { className: "text-sm font-semibold", style: { color: "var(--ink)" }, children: r }),
            a && /* @__PURE__ */ n("p", { className: "text-xs mt-0.5", style: { color: "var(--muted)" }, children: a })
          ] }),
          i && /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-3", children: i })
        ] }),
        /* @__PURE__ */ n(
          "div",
          {
            className: "relative w-full",
            style: { height: `clamp(${x}px, 60vw, ${m}px)` },
            children: s ? /* @__PURE__ */ n(
              "div",
              {
                className: "absolute inset-0 flex items-center justify-center text-sm text-center px-6",
                style: { color: "var(--muted)" },
                children: s
              }
            ) : d
          }
        ),
        o && /* @__PURE__ */ n("div", { className: "mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3", children: o })
      ]
    }
  );
});
function ue({ kind: t = "line", color: e, children: r, className: a, ...i }) {
  return /* @__PURE__ */ u(
    "span",
    {
      className: y("inline-flex items-center gap-1.5 text-xs", a),
      style: { color: "var(--ink)" },
      ...i,
      children: [
        /* @__PURE__ */ n(J, { kind: t, color: e }),
        r
      ]
    }
  );
}
function J({ kind: t, color: e }) {
  return t === "dot" ? /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: "inline-block w-2 h-2 rounded-full",
      style: { backgroundColor: e }
    }
  ) : t === "swatch" ? /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: "inline-block w-3 h-2 rounded-sm",
      style: { backgroundColor: e, opacity: 0.85 }
    }
  ) : t === "dashed" ? /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: "inline-block w-3",
      style: {
        height: 0,
        borderTop: `1.5px dashed ${e}`
      }
    }
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: "inline-block w-3 h-0.5 rounded-full",
      style: { backgroundColor: e }
    }
  );
}
function ve({ value: t, label: e, className: r, style: a, ...i }) {
  return /* @__PURE__ */ u("div", { className: y("text-[11px]", r), style: { color: "var(--muted)", ...a }, ...i, children: [
    /* @__PURE__ */ n("div", { className: "font-semibold", style: { color: "var(--ink)" }, children: t }),
    /* @__PURE__ */ n("div", { children: e })
  ] });
}
const xe = {
  axisTick: { fontSize: 10, fill: "currentColor", opacity: 0.65 },
  axisLabel: { fontSize: 11, fill: "currentColor", opacity: 0.7 },
  refLineLabel: { fontSize: 10, fontWeight: 600 },
  tooltipContent: {
    fontSize: 12,
    backgroundColor: "var(--panel)",
    border: "1px solid var(--line)",
    borderRadius: 8,
    color: "var(--ink)"
  },
  grid: {
    stroke: "var(--line)",
    strokeDasharray: "3 3",
    opacity: 0.5
  },
  axis: {
    stroke: "currentColor",
    strokeOpacity: 0.4,
    tickMargin: 8
  }
}, pe = {
  primary: "#3b82f6",
  secondary: "#f59e0b",
  tertiary: "#10b981",
  quaternary: "#a855f7",
  brand: "var(--brand)",
  muted: "var(--muted)",
  line: "var(--line)"
}, O = {
  heavy: 1.5,
  medium: 1,
  light: 0.6,
  hair: 0.4
}, L = {
  title: 12,
  label: 10,
  dim: 9,
  caption: 8
}, fe = {
  pitch: "3 2",
  construction: "2 2"
}, b = {
  ink: "var(--svg-ink)",
  muted: "var(--svg-muted)",
  dim: "var(--svg-dim-stroke)",
  dimText: "var(--svg-dim-text)",
  accent: "var(--svg-accent)",
  accent2: "var(--svg-accent-2)",
  fillNeutral: "var(--svg-fill-neutral)",
  fillAccent: "var(--svg-fill-accent)",
  fillAccent2: "var(--svg-fill-accent-2)"
}, T = {
  /** Extension-line gap from the witnessed object edge. */
  witnessGap: 2,
  /** How far past the dimension line the extension continues. */
  witnessOvershoot: 4,
  /** Offset from object edge to dimension line. */
  dimOffset: 10,
  /** Rotation-arrow clearance from mating body. */
  rotationClearance: 6
};
function he({ color: t = b.dim }) {
  return /* @__PURE__ */ u("defs", { children: [
    /* @__PURE__ */ n(
      "marker",
      {
        id: "cui-arrow",
        markerWidth: 8,
        markerHeight: 6,
        refX: 7,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ n("polygon", { points: "0 0, 8 3, 0 6", fill: t })
      }
    ),
    /* @__PURE__ */ n(
      "marker",
      {
        id: "cui-arrow-rev",
        markerWidth: 8,
        markerHeight: 6,
        refX: 1,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ n("polygon", { points: "8 0, 0 3, 8 6", fill: t })
      }
    ),
    /* @__PURE__ */ n(
      "marker",
      {
        id: "cui-tick",
        markerWidth: 6,
        markerHeight: 6,
        refX: 3,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ n("line", { x1: 3, y1: 0, x2: 3, y2: 6, stroke: t, strokeWidth: 0.6 })
      }
    )
  ] });
}
function be({
  fromEdge: t,
  toEdge: e,
  offset: r = T.dimOffset,
  label: a,
  color: i = b.dim,
  labelColor: o = b.dimText,
  labelSize: s = L.dim,
  arrows: c = !0
}) {
  const l = e.x - t.x, d = e.y - t.y, p = Math.hypot(l, d) || 1, v = -d / p, m = l / p, x = T.witnessGap, f = T.witnessOvershoot, k = t.x + v * x, w = t.y + m * x, N = t.x + v * (r + f), C = t.y + m * (r + f), h = e.x + v * x, S = e.y + m * x, A = e.x + v * (r + f), R = e.y + m * (r + f), $ = t.x + v * r, M = t.y + m * r, W = e.x + v * r, H = e.y + m * r, G = ($ + W) / 2, B = (M + H) / 2, I = G + v * 4, U = B + m * 4;
  return /* @__PURE__ */ u("g", { children: [
    /* @__PURE__ */ n(
      "line",
      {
        x1: k,
        y1: w,
        x2: N,
        y2: C,
        stroke: i,
        strokeWidth: O.hair
      }
    ),
    /* @__PURE__ */ n(
      "line",
      {
        x1: h,
        y1: S,
        x2: A,
        y2: R,
        stroke: i,
        strokeWidth: O.hair
      }
    ),
    /* @__PURE__ */ n(
      "line",
      {
        x1: $,
        y1: M,
        x2: W,
        y2: H,
        stroke: i,
        strokeWidth: O.light,
        markerStart: c ? "url(#cui-arrow-rev)" : void 0,
        markerEnd: c ? "url(#cui-arrow)" : void 0
      }
    ),
    a != null && /* @__PURE__ */ n(
      "text",
      {
        x: I,
        y: U,
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontSize: s,
        fontWeight: 700,
        fill: o,
        style: { fontFamily: "var(--font-mono)" },
        children: a
      }
    )
  ] });
}
function ye({
  cx: t,
  cy: e,
  bodyRadius: r,
  clockwise: a,
  spanDeg: i = 120,
  baseAngleDeg: o = 90,
  extraClearance: s = 0,
  color: c = b.dim
}) {
  const l = r + T.rotationClearance + s, d = i / 2, p = a ? o - d : o + d, v = a ? o + d : o - d, m = p * Math.PI / 180, x = v * Math.PI / 180, f = t + l * Math.cos(m), k = e - l * Math.sin(m), w = t + l * Math.cos(x), N = e - l * Math.sin(x), h = `M ${f},${k} A ${l},${l} 0 0 ${a ? 1 : 0} ${w},${N}`;
  return /* @__PURE__ */ n(
    "path",
    {
      d: h,
      fill: "none",
      stroke: c,
      strokeWidth: O.light,
      markerEnd: "url(#cui-arrow)"
    }
  );
}
const Q = {
  title: L.title,
  label: L.label,
  dim: L.dim,
  caption: L.caption
}, ee = {
  title: 700,
  label: 600,
  dim: 700,
  caption: 400
}, ne = {
  title: b.ink,
  label: b.ink,
  dim: b.dimText,
  caption: b.muted
};
function ge({
  x: t,
  y: e,
  variant: r = "label",
  anchor: a = "middle",
  color: i,
  rotate: o,
  children: s
}) {
  return /* @__PURE__ */ n(
    "text",
    {
      x: t,
      y: e,
      textAnchor: a,
      fontSize: Q[r],
      fontWeight: ee[r],
      fill: i ?? ne[r],
      style: { fontFamily: "var(--font-mono)" },
      transform: o ? `rotate(${o}, ${t}, ${e})` : void 0,
      children: s
    }
  );
}
export {
  ie as Card,
  he as CuiDefs,
  me as DiagramCard,
  be as DimLine,
  de as DimensionLine,
  oe as HeroCard,
  ce as InfoChip,
  se as KpiTile,
  ue as LegendChip,
  ye as RotationArrow,
  T as SVG_CLEARANCE,
  b as SVG_COLOR,
  fe as SVG_DASH,
  O as SVG_STROKE,
  L as SVG_TEXT,
  ve as StatTile,
  le as StatusBadge,
  ge as SvgLabel,
  xe as chartTheme,
  y as cx,
  pe as seriesPalette,
  ae as useEmbedMode
};
//# sourceMappingURL=index.js.map
