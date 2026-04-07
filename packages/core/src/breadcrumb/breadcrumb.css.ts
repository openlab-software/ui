import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "0.375rem",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});

export const item = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
});

export const link = style({
  color: "inherit",
  textDecoration: "none",
  transition: "color 150ms",
  selectors: {
    "&:hover": { color: vars.color.foreground },
  },
});

export const page = style({
  fontWeight: 400,
  color: vars.color.foreground,
});

export const separator = style({
  display: "inline-flex",
  alignItems: "center",
});

export const ellipsis = style({
  display: "flex",
  width: "1.25rem",
  height: "1.25rem",
  alignItems: "center",
  justifyContent: "center",
});
