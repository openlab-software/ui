import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ position: "relative" });
export const input = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  outline: "none",
  selectors: {
    "&:focus": {
      borderColor: vars.color.ring,
      boxShadow: `0 0 0 2px ${vars.color.ring}`,
    },
  },
});
export const popup = style({
  position: "absolute",
  zIndex: 50,
  marginTop: "0.5rem",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  overflow: "hidden",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const listbox = style({
  padding: "0.25rem",
  maxHeight: "16rem",
  overflow: "auto",
});
export const item = style({
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  borderRadius: vars.radius.button,
  cursor: "pointer",
  color: vars.color.foreground,
  selectors: {
    "&[data-highlighted]": { backgroundColor: vars.color.muted },
  },
});
export const empty = style({
  padding: "0.75rem",
  fontSize: "0.875rem",
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
