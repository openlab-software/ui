import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  gap: "0.25rem",
});
export const trigger = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.base,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  cursor: "pointer",
  minWidth: "10rem",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.ring}`,
      outlineOffset: "2px",
    },
  },
});
export const input = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.base,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  outline: "none",
  selectors: { "&:focus": { borderColor: vars.color.ring } },
});
export const popup = style({
  position: "absolute",
  zIndex: 50,
  marginTop: "0.25rem",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.base,
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
  overflow: "hidden",
});
export const listbox = style({
  padding: "0.25rem",
  maxHeight: "16rem",
  overflow: "auto",
});
export const item = style({
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  borderRadius: vars.radius.base,
  cursor: "pointer",
  color: vars.color.foreground,
  selectors: { "&[data-highlighted]": { backgroundColor: vars.color.muted } },
});
export const empty = style({
  padding: "0.75rem",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});
export const group = style({});
export const groupLabel = style({
  padding: "0.25rem 0.75rem",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: vars.color.mutedForeground,
});
export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 49,
  backgroundColor: "rgba(0,0,0,0.3)",
  selectors: {
    "&[data-starting-style]": { opacity: 0 },
    "&[data-ending-style]": { opacity: 0 },
  },
});
export const arrow = style({ fill: vars.color.background });
export const chip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
  padding: "0.25rem 0.5rem",
  fontSize: "0.75rem",
  borderRadius: vars.radius.base,
  backgroundColor: vars.color.muted,
  color: vars.color.mutedForeground,
});
