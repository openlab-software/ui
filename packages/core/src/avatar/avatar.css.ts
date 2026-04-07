import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r } from "../theme/utils.css";

export const root = style({
  position: "relative",
  display: "flex",
  flexShrink: 0,
  width: "2rem",
  height: "2rem",
  borderRadius: r.full,
  userSelect: "none",
  selectors: {
    "&[data-size=sm]": { width: "1.5rem", height: "1.5rem" },
    "&[data-size=lg]": { width: "2.5rem", height: "2.5rem" },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      border: `1px solid ${vars.color.border}`,
    },
  },
});

export const image = style({
  aspectRatio: "1",
  width: "100%",
  height: "100%",
  borderRadius: r.full,
  objectFit: "cover",
});

export const fallback = style({
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: r.full,
  backgroundColor: vars.color.muted,
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});

export const badge = style({
  position: "absolute",
  right: 0,
  bottom: 0,
  zIndex: 10,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: r.full,
  backgroundColor: vars.color.primary,
  color: vars.color.primaryForeground,
  boxShadow: `0 0 0 2px ${vars.color.background}`,
  width: "0.625rem",
  height: "0.625rem",
  selectors: {
    "[data-size=sm] &": { width: "0.5rem", height: "0.5rem" },
    "[data-size=lg] &": { width: "0.75rem", height: "0.75rem" },
  },
});

export const group = style({
  display: "flex",
  marginRight: "-0.5rem",
});

export const groupCount = style({
  position: "relative",
  display: "flex",
  flexShrink: 0,
  width: "2rem",
  height: "2rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: r.full,
  backgroundColor: vars.color.muted,
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  boxShadow: `0 0 0 2px ${vars.color.background}`,
});
