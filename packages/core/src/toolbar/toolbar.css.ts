import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", alignItems: "center", gap: "0.25rem" });
export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: "none",
  background: "transparent",
  color: vars.color.foreground,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
    "&[data-pressed]": { backgroundColor: vars.color.muted },
  },
});
export const separator = style({
  width: "1px",
  height: "1.25rem",
  backgroundColor: vars.color.border,
  margin: "0 0.25rem",
});
