import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, fadeIn, fadeOut } from "../theme/utils.css";

const popupOpen = keyframes({
  from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
  to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const popupClose = keyframes({
  from: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  to: { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
});

export const root = style({});

export const trigger = style({ display: "inline-flex" });

export const backdrop = style({
  position: "fixed",
  inset: 0,
  isolation: "isolate",
  zIndex: 50,
  backgroundColor: "rgba(0,0,0,0.1)",
  transitionDuration: "100ms",
  "@supports": {
    "(backdrop-filter: blur(0))": {
      backdropFilter: "blur(4px)",
    },
  },
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
  gap: "1rem",
  borderRadius: r["xl"],
  backgroundColor: vars.color.popover,
  padding: "1rem",
  fontSize: "0.875rem",
  color: vars.color.popoverForeground,
  boxShadow: `0 0 0 1px ${alpha(vars.color.foreground, 10)}`,
  outline: "none",
  transitionDuration: "100ms",
  selectors: {
    "&[data-open]": {
      animation: `${popupOpen} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    "&[data-closed]": {
      animation: `${popupClose} 100ms ease`,
    },
  },
  "@media": {
    "(min-width: 640px)": { maxWidth: "24rem" },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const footer = style({
  marginLeft: "-1rem",
  marginRight: "-1rem",
  marginBottom: "-1rem",
  display: "flex",
  flexDirection: "column-reverse",
  gap: "0.5rem",
  borderRadius: `0 0 ${r["xl"]} ${r["xl"]}`,
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: alpha(vars.color.muted, 50),
  padding: "1rem",
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

globalStyle(`${description} a`, {
  textDecoration: "underline",
  textUnderlineOffset: "3px",
});

globalStyle(`${description} a:hover`, {
  color: vars.color.foreground,
});

export const close = style({
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
});
