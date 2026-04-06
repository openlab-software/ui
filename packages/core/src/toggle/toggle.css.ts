import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: "transparent",
  color: vars.color.foreground,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
    "&[data-pressed]": { backgroundColor: vars.color.muted, color: vars.color.mutedForeground },
  },
});
