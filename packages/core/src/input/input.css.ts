import { style } from "@vanilla-extract/css";
import { darkTheme } from "../theme/default.css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  height: "2.25rem",
  width: "100%",
  minWidth: 0,
  borderRadius: `calc(${vars.radius.base} * 2.6)`,
  border: `1px solid ${vars.color.input}`,
  background: `color-mix(in oklch, ${vars.color.input} 30%, transparent)`,
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  fontSize: "1rem",
  fontFamily: "inherit",
  color: vars.color.foreground,
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
  outline: "none",

  "@media": {
    "(min-width: 768px)": {
      fontSize: "0.875rem",
    },
  },

  selectors: {
    "&::file-selector-button": {
      display: "inline-flex",
      height: "1.75rem",
      borderWidth: 0,
      backgroundColor: "transparent",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: vars.color.foreground,
    },
    "&::placeholder": {
      color: vars.color.mutedForeground,
    },
    "&:focus-visible": {
      borderColor: vars.color.ring,
      boxShadow: `0 0 0 3px color-mix(in oklch, ${vars.color.ring} 50%, transparent)`,
    },
    "&:disabled": {
      pointerEvents: "none",
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&[aria-invalid='true']": {
      borderColor: vars.color.destructive,
      boxShadow: `0 0 0 3px color-mix(in oklch, ${vars.color.destructive} 20%, transparent)`,
    },
    [`.${darkTheme} &[aria-invalid='true']`]: {
      borderColor: `color-mix(in oklch, ${vars.color.destructive} 50%, transparent)`,
      boxShadow: `0 0 0 3px color-mix(in oklch, ${vars.color.destructive} 40%, transparent)`,
    },
  },
});
