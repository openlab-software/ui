import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, fadeIn, fadeOut, zoomIn95, zoomOut95 } from "../theme/utils.css";

export const root = style({});

export const trigger = style({ display: "inline-flex" });

export const backdrop = style({
  position: "fixed",
  inset: 0,
  isolate: "isolate",
  zIndex: 50,
  backgroundColor: "rgba(0,0,0,0.8)",
  selectors: {
    "&[data-open]": { animation: `${fadeIn} 100ms ease` },
    "&[data-closed]": { animation: `${fadeOut} 100ms ease` },
  },
});

export const popup = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 50,
  display: "grid",
  width: "100%",
  maxWidth: "calc(100% - 2rem)",
  gap: "1.5rem",
  borderRadius: r["4xl"],
  backgroundColor: vars.color.popover,
  padding: "1.5rem",
  fontSize: "0.875rem",
  color: vars.color.popoverForeground,
  boxShadow: `0 0 0 1px ${alpha(vars.color.foreground, 5)}`,
  outline: "none",
  selectors: {
    "&[data-open]": {
      animation: `${fadeIn} 100ms ease, ${zoomIn95} 100ms ease`,
    },
    "&[data-closed]": {
      animation: `${fadeOut} 100ms ease, ${zoomOut95} 100ms ease`,
    },
  },
  "@media": {
    "(min-width: 640px)": { maxWidth: "28rem" },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: "0.5rem",
  "@media": {
    "(min-width: 640px)": { flexDirection: "row", justifyContent: "flex-end" },
  },
});

export const title = style({
  fontSize: "1rem",
  lineHeight: 1,
  fontWeight: 500,
});

export const description = style({
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});

export const close = style({
  position: "absolute",
  top: "1rem",
  right: "1rem",
});
