import { useState as S, useEffect as j, forwardRef as u } from "react";
import { jsx as o, jsxs as c } from "react/jsx-runtime";
function y() {
  if (typeof window > "u") return { isEmbed: !1, isDark: !1 };
  const n = new URLSearchParams(window.location.search).get("embed");
  return { isEmbed: n !== null, isDark: n === "dark" };
}
function P() {
  const [s, n] = S(() => y());
  return j(() => {
    if (typeof document > "u") return;
    const e = y();
    return n(e), e.isDark ? document.body.classList.add("embed-dark") : document.body.classList.remove("embed-dark"), () => {
      document.body.classList.remove("embed-dark");
    };
  }, []), s;
}
function v(...s) {
  return s.filter(Boolean).join(" ");
}
const A = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, U = u(function({ className: n, padding: e = "md", style: a, children: r, ...t }, d) {
  return /* @__PURE__ */ o(
    "div",
    {
      ref: d,
      className: v(A[e], n),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 12,
        boxShadow: "0 1px 3px var(--shadow)",
        ...a
      },
      ...t,
      children: r
    }
  );
}), q = u(function({ eyebrow: n, title: e, subtitle: a, aside: r, className: t, style: d, children: l, ...i }, m) {
  return /* @__PURE__ */ c(
    "div",
    {
      ref: m,
      className: v("w-full", t),
      style: {
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 16,
        boxShadow: "0 1px 3px var(--shadow)",
        padding: "20px 24px",
        ...d
      },
      ...i,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
            n && /* @__PURE__ */ o(
              "div",
              {
                className: "text-[11px] font-semibold uppercase tracking-[0.08em] mb-1",
                style: { color: "var(--muted)" },
                children: n
              }
            ),
            /* @__PURE__ */ o(
              "h2",
              {
                className: "text-xl sm:text-2xl font-extrabold tracking-tight",
                style: { color: "var(--ink)" },
                children: e
              }
            ),
            a && /* @__PURE__ */ o("p", { className: "text-sm mt-1", style: { color: "var(--muted)" }, children: a })
          ] }),
          r && /* @__PURE__ */ o("div", { className: "flex-shrink-0", children: r })
        ] }),
        l && /* @__PURE__ */ o("div", { className: "mt-4", children: l })
      ]
    }
  );
}), F = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, I = {
  neutral: void 0,
  brand: void 0,
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, z = u(function({ label: n, value: e, unit: a, hint: r, tone: t = "neutral", className: d, style: l, ...i }, m) {
  const x = I[t];
  return /* @__PURE__ */ c(
    "div",
    {
      ref: m,
      className: v("rounded-xl px-4 py-3 flex flex-col gap-1", d),
      style: {
        background: x ?? "var(--panel)",
        border: "1px solid var(--line)",
        minWidth: 140,
        ...l
      },
      ...i,
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: "text-[11px] font-semibold uppercase tracking-[0.06em]",
            style: { color: "var(--muted)" },
            children: n
          }
        ),
        /* @__PURE__ */ c("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: "text-2xl font-extrabold tabular-nums",
              style: { color: F[t] },
              children: e
            }
          ),
          a && /* @__PURE__ */ o("span", { className: "text-xs", style: { color: "var(--muted)" }, children: a })
        ] }),
        r && /* @__PURE__ */ o("div", { className: "text-xs", style: { color: "var(--muted)" }, children: r })
      ]
    }
  );
}), M = {
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)",
  na: "var(--muted)"
}, K = {
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)",
  na: "var(--na-bg)"
}, $ = {
  ok: "OK",
  warn: "WARNING",
  danger: "DANGER",
  info: "INFO",
  na: "N/A"
}, J = u(
  function({ variant: n, children: e, className: a, style: r, ...t }, d) {
    return /* @__PURE__ */ o(
      "span",
      {
        ref: d,
        className: v(
          "inline-block px-2 py-0.5 rounded-full text-xs font-bold",
          a
        ),
        style: {
          backgroundColor: K[n],
          color: M[n],
          ...r
        },
        ...t,
        children: e ?? $[n]
      }
    );
  }
), G = {
  neutral: "var(--ink)",
  brand: "var(--brand)",
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
}, H = {
  neutral: "var(--info-bg)",
  brand: "var(--panel)",
  ok: "var(--ok-bg)",
  warn: "var(--warn-bg)",
  danger: "var(--danger-bg)",
  info: "var(--info-bg)"
}, Q = u(function({ tone: n = "neutral", label: e, children: a, className: r, style: t, ...d }, l) {
  return /* @__PURE__ */ c(
    "span",
    {
      ref: l,
      className: v(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        r
      ),
      style: {
        backgroundColor: H[n],
        color: G[n],
        border: "1px solid var(--line)",
        ...t
      },
      ...d,
      children: [
        e && /* @__PURE__ */ o("span", { className: "font-semibold", style: { color: "var(--muted)" }, children: e }),
        a
      ]
    }
  );
}), V = u(
  function({
    x1: n,
    y1: e,
    x2: a,
    y2: r,
    label: t,
    tickSize: d = 6,
    stroke: l = "var(--muted)",
    strokeWidth: i = 1,
    labelOffset: m = 10,
    labelColor: x = "var(--ink)",
    labelSize: N = 11,
    ...C
  }, L) {
    const g = a - n, b = r - e, h = Math.hypot(g, b) || 1, k = -b / h, w = g / h, f = k * (d / 2), p = w * (d / 2), B = (n + a) / 2, D = (e + r) / 2, E = B + k * m, R = D + w * m;
    return /* @__PURE__ */ c("g", { ref: L, ...C, children: [
      /* @__PURE__ */ o("line", { x1: n, y1: e, x2: a, y2: r, stroke: l, strokeWidth: i }),
      /* @__PURE__ */ o(
        "line",
        {
          x1: n - f,
          y1: e - p,
          x2: n + f,
          y2: e + p,
          stroke: l,
          strokeWidth: i
        }
      ),
      /* @__PURE__ */ o(
        "line",
        {
          x1: a - f,
          y1: r - p,
          x2: a + f,
          y2: r + p,
          stroke: l,
          strokeWidth: i
        }
      ),
      t != null && /* @__PURE__ */ o(
        "text",
        {
          x: E,
          y: R,
          textAnchor: "middle",
          dominantBaseline: "middle",
          fontSize: N,
          fill: x,
          children: t
        }
      )
    ] });
  }
);
export {
  U as Card,
  V as DimensionLine,
  q as HeroCard,
  Q as InfoChip,
  z as KpiTile,
  J as StatusBadge,
  v as cx,
  P as useEmbedMode
};
//# sourceMappingURL=index.js.map
