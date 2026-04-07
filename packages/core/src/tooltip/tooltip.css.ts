import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, zoomIn95, zoomOut95, fadeIn, fadeOut } from "../theme/utils.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });

export const positioner = style({
  isolation: "isolate",
  zIndex: 50,
});

export const popup = style({
  zIndex: 50,
  display: "inline-flex",
  width: "fit-content",
  maxWidth: "20rem",
  alignItems: "center",
  gap: "0.375rem",
  borderRadius: r["2xl"],
  backgroundColor: vars.color.foreground,
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.375rem",
  paddingBottom: "0.375rem",
  fontSize: "0.75rem",
  color: vars.color.background,
  selectors: {
    "&[data-open]": { animation: `${fadeIn} 100ms ease, ${zoomIn95} 100ms ease` },
    "&[data-closed]": { animation: `${fadeOut} 100ms ease, ${zoomOut95} 100ms ease` },
    "&[data-state=delayed-open]": {
      animation: `${fadeIn} 100ms ease, ${zoomIn95} 100ms ease`,
    },
  },
});

export const arrow = style({
  width: "0.625rem",
  height: "0.625rem",
  transform: "translate(-50%, -50%) rotate(45deg)",
  borderRadius: "2px",
  backgroundColor: vars.color.foreground,
  fill: vars.color.foreground,
});
