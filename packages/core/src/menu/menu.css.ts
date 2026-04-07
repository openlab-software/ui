import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const popup = style({
  position: "fixed", zIndex: 50,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.base,
  padding: "0.25rem",
  minWidth: "10rem",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const item = style({
  padding: "0.375rem 0.75rem", fontSize: "0.875rem", borderRadius: vars.radius.base,
  cursor: "pointer", color: vars.color.foreground, outline: "none",
  selectors: { "&[data-highlighted]": { backgroundColor: vars.color.muted } },
});
export const group = style({});
export const groupLabel = style({ padding: "0.375rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, color: vars.color.mutedForeground });
export const separator = style({ height: "1px", margin: "0.25rem 0", backgroundColor: vars.color.border });
export const arrow = style({ fill: vars.color.background });
