import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha } from "../theme/utils.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  overflow: "hidden",
  borderRadius: r["2xl"],
  backgroundColor: vars.color.card,
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  fontSize: "0.875rem",
  color: vars.color.cardForeground,
  boxShadow: `0 0 0 1px ${alpha(vars.color.foreground, 10)}`,
  selectors: {
    "&[data-size=sm]": { gap: "1rem", paddingTop: "1rem", paddingBottom: "1rem" },
  },
});

export const header = style({
  display: "grid",
  gap: "0.5rem",
  borderRadius: `${r["2xl"]} ${r["2xl"]} 0 0`,
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});

export const title = style({
  fontWeight: 500,
  fontSize: "1rem",
});

export const description = style({
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});

export const action = style({
  display: 'flex',
  alignSelf: "start",
  justifySelf: "end",
  gap: "12px"
});

export const content = style({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  selectors: {
    "[data-size=sm] &": { paddingLeft: "1rem", paddingRight: "1rem" },
  },
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  borderRadius: `0 0 ${r["2xl"]} ${r["2xl"]}`,
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  selectors: {
    "[data-size=sm] &": { paddingLeft: "1rem", paddingRight: "1rem" },
  },
});
