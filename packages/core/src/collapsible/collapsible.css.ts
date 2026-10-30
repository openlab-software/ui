import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

// Block-level so the root width comes from its container, not from the panel content.
export const root = style({ display: "flex", flexDirection: "column", gap: "0.5rem" });
export const trigger = style({
  alignSelf: "flex-start",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  borderRadius: vars.radius.base,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.secondary,
  color: vars.color.secondaryForeground,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
  },
});
export const panel = style({
  overflow: "hidden",
  height: "var(--collapsible-panel-height, auto)",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  transition: "height 200ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
  selectors: {
    "&[data-starting-style]": { opacity: 0, height: 0 },
    "&[data-ending-style]": { opacity: 0, height: 0 },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": { transition: "none" },
  },
});
