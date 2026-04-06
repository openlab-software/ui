import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const label = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: vars.color.foreground,
});

export const root = style({
  boxSizing: "border-box",
  display: "flex",
  width: "1.25rem",
  height: "1.25rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.25rem",
  outline: 0,
  padding: 0,
  margin: 0,
  border: "none",
  selectors: {
    "&[data-unchecked]": {
      border: `1px solid ${vars.color.border}`,
      backgroundColor: "transparent",
    },
    "&[data-checked]": {
      backgroundColor: vars.color.primary,
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.ring}`,
      outlineOffset: "2px",
    },
  },
});

export const indicator = style({
  display: "flex",
  color: vars.color.primaryForeground,
  selectors: {
    "&[data-unchecked]": {
      display: "none",
    },
  },
});

export const icon = style({
  width: "0.75rem",
  height: "0.75rem",
});
