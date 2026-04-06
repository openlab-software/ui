import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "flex", flexDirection: "column", gap: "0.75rem" });
export const list = style({ display: "inline-flex", alignItems: "center", gap: "0.125rem", padding: "0.25rem", backgroundColor: vars.color.muted, borderRadius: vars.radius.button });
export const indicator = style({
  position: "absolute",
  backgroundColor: vars.color.background,
  borderRadius: vars.radius.button,
  boxShadow: `0 1px 3px rgba(0,0,0,0.1)`,
  transition: "all 0.15s ease",
});
export const tab = style({
  padding: "0.375rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: "none",
  background: "transparent",
  color: vars.color.mutedForeground,
  cursor: "pointer",
  position: "relative",
  zIndex: 1,
  selectors: { "&[data-selected]": { color: vars.color.foreground } },
});
export const panel = style({ fontSize: "0.875rem", color: vars.color.foreground, paddingTop: "0.75rem" });
