import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, zoomIn95, zoomOut95, fadeIn, fadeOut } from "../theme/utils.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });

export const positioner = style({
  isolation: "isolate",
  zIndex: 50,
});

export const popup = style({
  zIndex: 50,
  display: "flex",
  width: "18rem",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: r["2xl"],
  backgroundColor: vars.color.popover,
  padding: "1rem",
  fontSize: "0.875rem",
  color: vars.color.popoverForeground,
  boxShadow: `0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px ${alpha(vars.color.foreground, 5)}`,
  outline: "none",
  selectors: {
    "&[data-open]": { animation: `${fadeIn} 100ms ease, ${zoomIn95} 100ms ease` },
    "&[data-closed]": { animation: `${fadeOut} 100ms ease, ${zoomOut95} 100ms ease` },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  fontSize: "0.875rem",
});

export const title = style({
  fontSize: "1rem",
  fontWeight: 500,
});

export const description = style({
  color: vars.color.mutedForeground,
});

export const arrow = style({
  fill: vars.color.popover,
});
