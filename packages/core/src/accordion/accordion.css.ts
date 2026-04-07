import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import {
  r,
  alpha,
  accordionDown,
  accordionUp,
  focusRing,
} from "../theme/utils.css";

export const root = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: r["2xl"],
  border: `1px solid ${vars.color.border}`,
});

export const item = style({
  selectors: {
    "&:not(:last-child)": { borderBottom: `1px solid ${vars.color.border}` },
    "&[data-open]": { backgroundColor: alpha(vars.color.muted, 50) },
  },
});

export const header = style({
  display: "flex",
});

export const trigger = style({
  position: "relative",
  display: "flex",
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1.5rem",
  padding: "1rem",
  textAlign: "left",
  fontSize: "0.875rem",
  fontWeight: 500,
  fontFamily: "inherit",
  background: "none",
  border: "1px solid transparent",
  borderRadius: r["2xl"],
  color: vars.color.foreground,
  cursor: "pointer",
  outline: "none",
  transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
  selectors: {
    "&:hover": { textDecoration: "underline" },
    "&:focus-visible": focusRing(),
    "&[aria-disabled=true]": { pointerEvents: "none", opacity: 0.5 },
  },
});

export const panel = style({
  overflow: "hidden",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  fontSize: "0.875rem",
  selectors: {
    "&[data-open]": { animation: `${accordionDown} 150ms ease` },
    "&[data-closed]": { animation: `${accordionUp} 150ms ease` },
  },
});

export const panelContent = style({
  height: "var(--accordion-panel-height)",
  paddingBottom: "1rem",
  selectors: {
    "&[data-starting-style]": { height: "0" },
    "&[data-ending-style]": { height: "0" },
  },
});

globalStyle(`${panelContent} a`, {
  textDecoration: "underline",
  textUnderlineOffset: "3px",
});

globalStyle(`${panelContent} p:not(:last-child)`, {
  marginBottom: "1rem",
});
