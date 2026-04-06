import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  width: "100%",
});

export const item = style({
  borderBottom: `1px solid ${vars.color.border}`,
});

export const header = style({
  display: "flex",
});

export const trigger = style({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem 0",
  fontFamily: "inherit",
  fontSize: "0.875rem",
  fontWeight: 500,
  background: "none",
  border: "none",
  color: vars.color.foreground,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.ring}`,
      outlineOffset: "2px",
    },
  },
});

export const panel = style({
  overflow: "hidden",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  paddingBottom: "0.75rem",
  selectors: {
    "&[data-starting-style]": { opacity: 0 },
    "&[data-ending-style]": { opacity: 0 },
  },
});
