import { useState as H, useEffect as _, forwardRef as N } from "react";
import { jsx as r, jsxs as f } from "react/jsx-runtime";
function B() {
  if (typeof window > "u") return { isEmbed: !1, isDark: !1 };
  const n = new URLSearchParams(window.location.search).get("embed");
  return { isEmbed: n !== null, isDark: n === "dark" };
}
function en() {
  const [t, n] = H(() => B());
  return _(() => {
    if (typeof document > "u") return;
    const e = B();
    return n(e), e.isDark ? document.body.classList.add("embed-dark") : document.body.classList.remove("embed-dark"), () => {
      document.body.classList.remove("embed-dark");
    };
  }, []), t;
}
function L(...t) {
  return t.filter(Boolean).join(" ");
}
const V = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, tn = N(function({ className: n, padding: e = "md", style: a, children: o, ...i }, s) {
  return /* @__PURE__ */ r(
    "div",
    {
      ref: s,
      className: L(V[e], n),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        boxShadow: "0 1px 3px var(--shadow)",
        ...a
      },
      ...i,
      children: o
    }
  );
}), rn = N(function({ eyebrow: n, title: e, subtitle: a, aside: o, className: i, style: s, children: c, ...l }, d) {
  return /* @__PURE__ */ f(
    "div",
    {
      ref: d,
      className: L("w-full", i),
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
        /* @__PURE__ */ f("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
          /* @__PURE__ */ f("div", { className: "min-w-0 flex-1", children: [
            n && /* @__PURE__ */ r(
              "div",
              {
                className: "text-[11px] font-semibold uppercase tracking-[0.08em] mb-1",
                style: { color: "var(--muted)" },
                children: n
              }
            ),
            /* @__PURE__ */ r(
              "h2",
              {
                className: "text-xl sm:text-2xl font-extrabold tracking-tight",
                style: { color: "var(--ink)" },
                children: e
              }
            ),
            a && /* @__PURE__ */ r("p", { className: "text-sm mt-1", style: { color: "var(--muted)" }, children: a })
          ] }),
          o && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: o })
        ] }),
        c && /* @__PURE__ */ r("div", { className: "mt-4", children: c })
      ]
    }
  );
}), j = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, K = {
  neutral: void 0,
  brand: void 0,
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, an = N(function({ label: n, value: e, unit: a, hint: o, tone: i = "neutral", className: s, style: c, ...l }, d) {
  const p = K[i];
  return /* @__PURE__ */ f(
    "div",
    {
      ref: d,
      className: L("rounded-xl px-4 py-3 flex flex-col gap-1", s),
      style: {
        background: p ?? "var(--panel)",
        border: "1px solid var(--line)",
        minWidth: 140,
        ...c
      },
      ...l,
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: "text-[11px] font-semibold uppercase tracking-[0.06em]",
            style: { color: "var(--muted)" },
            children: n
          }
        ),
        /* @__PURE__ */ f("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ r(
            "span",
            {
              className: "text-2xl font-extrabold tabular-nums",
              style: { color: j[i] },
              children: e
            }
          ),
          a && /* @__PURE__ */ r("span", { className: "text-xs", style: { color: "var(--muted)" }, children: a })
        ] }),
        o && /* @__PURE__ */ r("div", { className: "text-xs", style: { color: "var(--muted)" }, children: o })
      ]
    }
  );
}), X = {
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
}, Y = {
  ok: "OK",
  warn: "WARNING",
  danger: "DANGER",
  info: "INFO",
  na: "N/A"
}, on = N(
  function({ variant: n, children: e, className: a, style: o, ...i }, s) {
    return /* @__PURE__ */ r(
      "span",
      {
        ref: s,
        className: L(
          "inline-block px-2 py-0.5 rounded-full text-xs font-bold",
          a
        ),
        style: {
          backgroundColor: P[n],
          color: X[n],
          ...o
        },
        ...i,
        children: e ?? Y[n]
      }
    );
  }
), z = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, E = {
  neutral: "var(--info-bg)",
  brand: "var(--panel)",
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, sn = N(function({ tone: n = "neutral", label: e, children: a, className: o, style: i, ...s }, c) {
  return /* @__PURE__ */ f(
    "span",
    {
      ref: c,
      className: L(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        o
      ),
      style: {
        backgroundColor: E[n],
        color: z[n],
        border: "1px solid var(--line)",
        ...i
      },
      ...s,
      children: [
        e && /* @__PURE__ */ r("span", { className: "font-semibold", style: { color: "var(--muted)" }, children: e }),
        a
      ]
    }
  );
}), ln = N(
  function({
    x1: n,
    y1: e,
    x2: a,
    y2: o,
    label: i,
    tickSize: s = 6,
    stroke: c = "var(--muted)",
    strokeWidth: l = 1,
    labelOffset: d = 10,
    labelColor: p = "var(--ink)",
    labelSize: u = 11,
    ...m
  }, v) {
    const x = a - n, k = o - e, g = Math.hypot(x, k) || 1, b = -k / g, S = x / g, h = b * (s / 2), w = S * (s / 2), R = (n + a) / 2, W = (e + o) / 2, A = R + b * d, O = W + S * d;
    return /* @__PURE__ */ f("g", { ref: v, ...m, children: [
      /* @__PURE__ */ r("line", { x1: n, y1: e, x2: a, y2: o, stroke: c, strokeWidth: l }),
      /* @__PURE__ */ r(
        "line",
        {
          x1: n - h,
          y1: e - w,
          x2: n + h,
          y2: e + w,
          stroke: c,
          strokeWidth: l
        }
      ),
      /* @__PURE__ */ r(
        "line",
        {
          x1: a - h,
          y1: o - w,
          x2: a + h,
          y2: o + w,
          stroke: c,
          strokeWidth: l
        }
      ),
      i != null && /* @__PURE__ */ r(
        "text",
        {
          x: A,
          y: O,
          textAnchor: "middle",
          dominantBaseline: "middle",
          fontSize: u,
          fill: p,
          children: i
        }
      )
    ] });
  }
), $ = {
  heavy: 1.5,
  medium: 1,
  light: 0.6,
  hair: 0.4
}, C = {
  title: 12,
  label: 10,
  dim: 9,
  caption: 8
}, cn = {
  pitch: "3 2",
  construction: "2 2"
}, y = {
  ink: "var(--svg-ink)",
  muted: "var(--svg-muted)",
  dim: "var(--svg-dim-stroke)",
  dimText: "var(--svg-dim-text)",
  accent: "var(--svg-accent)",
  accent2: "var(--svg-accent-2)",
  fillNeutral: "var(--svg-fill-neutral)",
  fillAccent: "var(--svg-fill-accent)",
  fillAccent2: "var(--svg-fill-accent-2)"
}, M = {
  /** Extension-line gap from the witnessed object edge. */
  witnessGap: 2,
  /** How far past the dimension line the extension continues. */
  witnessOvershoot: 4,
  /** Offset from object edge to dimension line. */
  dimOffset: 10,
  /** Rotation-arrow clearance from mating body. */
  rotationClearance: 6
};
function dn({ color: t = y.dim }) {
  return /* @__PURE__ */ f("defs", { children: [
    /* @__PURE__ */ r(
      "marker",
      {
        id: "cui-arrow",
        markerWidth: 8,
        markerHeight: 6,
        refX: 7,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ r("polygon", { points: "0 0, 8 3, 0 6", fill: t })
      }
    ),
    /* @__PURE__ */ r(
      "marker",
      {
        id: "cui-arrow-rev",
        markerWidth: 8,
        markerHeight: 6,
        refX: 1,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ r("polygon", { points: "8 0, 0 3, 8 6", fill: t })
      }
    ),
    /* @__PURE__ */ r(
      "marker",
      {
        id: "cui-tick",
        markerWidth: 6,
        markerHeight: 6,
        refX: 3,
        refY: 3,
        orient: "auto",
        markerUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ r("line", { x1: 3, y1: 0, x2: 3, y2: 6, stroke: t, strokeWidth: 0.6 })
      }
    )
  ] });
}
function mn({
  fromEdge: t,
  toEdge: n,
  offset: e = M.dimOffset,
  label: a,
  color: o = y.dim,
  labelColor: i = y.dimText,
  labelSize: s = C.dim,
  arrows: c = !0
}) {
  const l = n.x - t.x, d = n.y - t.y, p = Math.hypot(l, d) || 1, u = -d / p, m = l / p, v = M.witnessGap, x = M.witnessOvershoot, k = t.x + u * v, g = t.y + m * v, b = t.x + u * (e + x), S = t.y + m * (e + x), h = n.x + u * v, w = n.y + m * v, R = n.x + u * (e + x), W = n.y + m * (e + x), A = t.x + u * e, O = t.y + m * e, G = n.x + u * e, T = n.y + m * e, I = (A + G) / 2, U = (O + T) / 2, D = I + u * 4, F = U + m * 4;
  return /* @__PURE__ */ f("g", { children: [
    /* @__PURE__ */ r(
      "line",
      {
        x1: k,
        y1: g,
        x2: b,
        y2: S,
        stroke: o,
        strokeWidth: $.hair
      }
    ),
    /* @__PURE__ */ r(
      "line",
      {
        x1: h,
        y1: w,
        x2: R,
        y2: W,
        stroke: o,
        strokeWidth: $.hair
      }
    ),
    /* @__PURE__ */ r(
      "line",
      {
        x1: A,
        y1: O,
        x2: G,
        y2: T,
        stroke: o,
        strokeWidth: $.light,
        markerStart: c ? "url(#cui-arrow-rev)" : void 0,
        markerEnd: c ? "url(#cui-arrow)" : void 0
      }
    ),
    a != null && /* @__PURE__ */ r(
      "text",
      {
        x: D,
        y: F,
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontSize: s,
        fontWeight: 700,
        fill: i,
        style: { fontFamily: "var(--font-mono)" },
        children: a
      }
    )
  ] });
}
function un({
  cx: t,
  cy: n,
  bodyRadius: e,
  clockwise: a,
  spanDeg: o = 120,
  baseAngleDeg: i = 90,
  extraClearance: s = 0,
  color: c = y.dim
}) {
  const l = e + M.rotationClearance + s, d = o / 2, p = a ? i - d : i + d, u = a ? i + d : i - d, m = p * Math.PI / 180, v = u * Math.PI / 180, x = t + l * Math.cos(m), k = n - l * Math.sin(m), g = t + l * Math.cos(v), b = n - l * Math.sin(v), h = `M ${x},${k} A ${l},${l} 0 0 ${a ? 1 : 0} ${g},${b}`;
  return /* @__PURE__ */ r(
    "path",
    {
      d: h,
      fill: "none",
      stroke: c,
      strokeWidth: $.light,
      markerEnd: "url(#cui-arrow)"
    }
  );
}
const Z = {
  title: C.title,
  label: C.label,
  dim: C.dim,
  caption: C.caption
}, q = {
  title: 700,
  label: 600,
  dim: 700,
  caption: 400
}, J = {
  title: y.ink,
  label: y.ink,
  dim: y.dimText,
  caption: y.muted
};
function vn({
  x: t,
  y: n,
  variant: e = "label",
  anchor: a = "middle",
  color: o,
  rotate: i,
  children: s
}) {
  return /* @__PURE__ */ r(
    "text",
    {
      x: t,
      y: n,
      textAnchor: a,
      fontSize: Z[e],
      fontWeight: q[e],
      fill: o ?? J[e],
      style: { fontFamily: "var(--font-mono)" },
      transform: i ? `rotate(${i}, ${t}, ${n})` : void 0,
      children: s
    }
  );
}
export {
  tn as Card,
  dn as CuiDefs,
  mn as DimLine,
  ln as DimensionLine,
  rn as HeroCard,
  sn as InfoChip,
  an as KpiTile,
  un as RotationArrow,
  M as SVG_CLEARANCE,
  y as SVG_COLOR,
  cn as SVG_DASH,
  $ as SVG_STROKE,
  C as SVG_TEXT,
  on as StatusBadge,
  vn as SvgLabel,
  L as cx,
  en as useEmbedMode
};
//# sourceMappingURL=index.js.map
