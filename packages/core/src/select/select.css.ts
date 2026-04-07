import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing, invalidRing, zoomIn95, zoomOut95, fadeIn, fadeOut } from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({ display: "inline-flex" });

export const group = style({
  scrollMarginTop: "0.25rem",
  scrollMarginBottom: "0.25rem",
  padding: "0.25rem",
});

export const value = style({
  display: "flex",
  flex: 1,
  textAlign: "left",
});

export const trigger = style({
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.375rem",
  borderRadius: r["4xl"],
  border: `1px solid ${vars.color.input}`,
  backgroundColor: alpha(vars.color.input, 30),
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "0.875rem",
  whiteSpace: "nowrap",
  outline: "none",
  transition: "colors 150ms",
  height: "2.25rem",
  selectors: {
    "&[data-size=sm]": { height: "2rem" },
    "&:focus-visible": focusRing(),
    "&:disabled, &[data-disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&[data-placeholder]": { color: vars.color.mutedForeground },
    "&[aria-invalid='true']": invalidRing(),
    [`.${darkTheme} &:hover`]: { backgroundColor: alpha(vars.color.input, 50) },
  },
});

export const positioner = style({
  isolation: "isolate",
  zIndex: 50,
});

export const popup = style({
  isolation: "isolate",
  zIndex: 50,
  maxHeight: "var(--available-height)",
  width: "var(--anchor-width)",
  minWidth: "9rem",
  overflow: "auto",
  borderRadius: r["2xl"],
  backgroundColor: alpha(vars.color.popover, 70),
  color: vars.color.popoverForeground,
  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
  boxSizing: "border-box",
  selectors: {
    "&[data-open]": { animation: `${fadeIn} 100ms ease, ${zoomIn95} 100ms ease` },
    "&[data-closed]": { animation: `${fadeOut} 100ms ease, ${zoomOut95} 100ms ease` },
    // Pseudo glass effect
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: -1,
      borderRadius: "inherit",
      backdropFilter: "blur(24px) saturate(1.5)",
      pointerEvents: "none",
    },
  },
});

export const list = style({});

export const label = style({
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  fontSize: "0.75rem",
  color: vars.color.mutedForeground,
});

export const item = style({
  position: "relative",
  display: "flex",
  width: "100%",
  cursor: "default",
  alignItems: "center",
  gap: "0.625rem",
  borderRadius: r.xl,
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.75rem",
  paddingRight: "2rem",
  fontSize: "0.875rem",
  outline: "none",
  userSelect: "none",
  selectors: {
    "&[data-highlighted], &:focus": {
      backgroundColor: alpha(vars.color.foreground, 10),
    },
    "&[data-disabled]": { pointerEvents: "none", opacity: 0.5 },
  },
});

export const itemText = style({
  display: "flex",
  flex: 1,
  flexShrink: 0,
  gap: "0.5rem",
  whiteSpace: "nowrap",
});

export const itemIndicator = style({
  position: "absolute",
  right: "0.5rem",
  display: "flex",
  width: "1rem",
  height: "1rem",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
});

export const separator = style({
  pointerEvents: "none",
  margin: "0.25rem -0.25rem",
  height: "1px",
  backgroundColor: alpha(vars.color.foreground, 5),
});

export const scrollButton = style({
  position: "sticky",
  zIndex: 10,
  display: "flex",
  width: "100%",
  cursor: "default",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.popover,
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  selectors: {
    "&[data-direction=up]": { top: 0 },
    "&[data-direction=down]": { bottom: 0 },
  },
});
