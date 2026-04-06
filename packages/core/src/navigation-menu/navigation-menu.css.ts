import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", alignItems: "center" });
export const list = style({ display: "inline-flex", alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 });
export const item = style({});
export const trigger = style({
  padding: "0.375rem 0.75rem", fontSize: "0.875rem", fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: "none", background: "transparent", color: vars.color.foreground,
  cursor: "pointer", outline: "none",
  selectors: { "&:focus-visible": { outline: `2px solid ${vars.color.ring}` } },
});
export const popup = style({
  position: "absolute", zIndex: 50,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  padding: "0.5rem",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const viewport = style({ position: "relative", zIndex: 1 });
export const backdrop = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.3)",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const indicator = style({
  position: "absolute", zIndex: -1,
  backgroundColor: vars.color.muted,
  borderRadius: vars.radius.button,
});
export const arrow = style({ fill: vars.color.background });
