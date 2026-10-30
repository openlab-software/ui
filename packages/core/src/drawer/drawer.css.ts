import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });
const slideFrom = (from: string) =>
  keyframes({ from: { transform: from, opacity: 0.6 }, to: { transform: "none", opacity: 1 } });
const slideRight = slideFrom("translateX(100%)");
const slideLeft = slideFrom("translateX(-100%)");
const slideTop = slideFrom("translateY(-100%)");
const slideBottom = slideFrom("translateY(100%)");

export const popup = style({
  position: "fixed", zIndex: 50,
  display: "flex", flexDirection: "column",
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
  border: `1px solid ${vars.color.border}`,
  padding: "1.5rem",
  boxShadow: `0 10px 25px rgba(0,0,0,0.15)`,
  transition: "transform 250ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-out",
  selectors: {
    "&[data-side=top]": { top: 0, left: 0, right: 0, maxHeight: "80vh" },
    "&[data-side=right]": { top: 0, right: 0, bottom: 0, width: "min(24rem, calc(100vw - 3rem))" },
    "&[data-side=bottom]": { bottom: 0, left: 0, right: 0, maxHeight: "80vh" },
    "&[data-side=left]": { top: 0, left: 0, bottom: 0, width: "min(24rem, calc(100vw - 3rem))" },
    "&[data-side=right][data-open]": { animation: `${slideRight} 250ms cubic-bezier(0.22, 1, 0.36, 1)` },
    "&[data-side=left][data-open]": { animation: `${slideLeft} 250ms cubic-bezier(0.22, 1, 0.36, 1)` },
    "&[data-side=top][data-open]": { animation: `${slideTop} 250ms cubic-bezier(0.22, 1, 0.36, 1)` },
    "&[data-side=bottom][data-open]": { animation: `${slideBottom} 250ms cubic-bezier(0.22, 1, 0.36, 1)` },
    "&[data-side=right][data-ending-style]": { transform: "translateX(100%)" },
    "&[data-side=left][data-ending-style]": { transform: "translateX(-100%)" },
    "&[data-side=top][data-ending-style]": { transform: "translateY(-100%)" },
    "&[data-side=bottom][data-ending-style]": { transform: "translateY(100%)" },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": { transition: "none", animation: "none" },
  },
});
export const overlay = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.5)",
  transition: "opacity 200ms ease-out",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const title = style({ fontSize: "1.125rem", fontWeight: 600, color: vars.color.foreground });
export const description = style({ fontSize: "0.875rem", color: vars.color.mutedForeground, marginTop: "0.5rem" });
export const close = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "0.875rem",
  fontFamily: "inherit", borderRadius: vars.radius.base,
  border: `1px solid ${vars.color.border}`, background: vars.color.secondary,
  color: vars.color.secondaryForeground, cursor: "pointer",
});
