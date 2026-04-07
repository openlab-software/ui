import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha } from "../theme/utils.css";

export const root = style({
  selectors: {
    "&[data-orientation=horizontal]": { width: "100%" },
    "&[data-orientation=vertical]": { height: "100%" },
  },
});

export const control = style({
  position: "relative",
  display: "flex",
  width: "100%",
  alignItems: "center",
  touchAction: "none",
  userSelect: "none",
  selectors: {
    "&[data-disabled]": { opacity: 0.5 },
    "&[data-orientation=vertical]": {
      height: "100%",
      minHeight: "10rem",
      width: "auto",
      flexDirection: "column",
    },
  },
});

export const track = style({
  position: "relative",
  flexGrow: 1,
  overflow: "hidden",
  borderRadius: r["4xl"],
  backgroundColor: vars.color.muted,
  userSelect: "none",
  selectors: {
    "&[data-orientation=horizontal]": { height: "0.75rem", width: "100%" },
    "&[data-orientation=vertical]": { height: "100%", width: "0.75rem" },
  },
});

export const indicator = style({
  backgroundColor: vars.color.primary,
  userSelect: "none",
  selectors: {
    "&[data-orientation=horizontal]": { height: "100%" },
    "&[data-orientation=vertical]": { width: "100%" },
  },
});

export const thumb = style({
  display: "block",
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
  borderRadius: r["4xl"],
  border: `1px solid ${vars.color.primary}`,
  backgroundColor: "white",
  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  userSelect: "none",
  outline: "none",
  transition: "box-shadow 150ms",
  selectors: {
    "&:hover": {
      boxShadow: `0 0 0 4px ${alpha(vars.color.ring, 50)}`,
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 4px ${alpha(vars.color.ring, 50)}`,
    },
    "&:disabled": { pointerEvents: "none", opacity: 0.5 },
  },
});
