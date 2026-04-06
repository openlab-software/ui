import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex" });
export const trigger = style({
  display: "inline-flex", alignItems: "center", justifyContent: "space-between",
  padding: "0.5rem 0.75rem", fontSize: "0.875rem", fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  cursor: "pointer", minWidth: "10rem",
  selectors: { "&:focus-visible": { outline: `2px solid ${vars.color.ring}` } },
});
export const popup = style({
  position: "fixed", zIndex: 50,
  marginTop: "0.25rem",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  padding: "0.25rem",
  minWidth: "10rem",
  maxHeight: "16rem",
  overflow: "auto",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const backdrop = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.3)",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const arrow = style({ fill: vars.color.background });
