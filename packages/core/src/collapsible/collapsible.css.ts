import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", flexDirection: "column", gap: "0.5rem" });
export const trigger = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.secondary,
  color: vars.color.secondaryForeground,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
  },
});
export const panel = style({
  overflow: "hidden",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  selectors: {
    "&[data-starting-style]": { opacity: 0, height: 0 },
    "&[data-ending-style]": { opacity: 0, height: 0 },
  },
});
