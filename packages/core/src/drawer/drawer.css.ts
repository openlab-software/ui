import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });
export const popup = style({
  position: "fixed", zIndex: 50,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  padding: "1.5rem",
  boxShadow: `0 10px 25px rgba(0,0,0,0.15)`,
  selectors: {
    "&[data-side=top]": { top: 0, left: 0, right: 0, borderBottom: `1px solid ${vars.color.border}` },
    "&[data-side=right]": { top: 0, right: 0, bottom: 0, borderLeft: `1px solid ${vars.color.border}` },
    "&[data-side=bottom]": { bottom: 0, left: 0, right: 0, borderTop: `1px solid ${vars.color.border}` },
    "&[data-side=left]": { top: 0, left: 0, bottom: 0, borderRight: `1px solid ${vars.color.border}` },
  },
});
export const overlay = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.5)",
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
