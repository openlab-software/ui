import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing, invalidRing } from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({
  position: "relative",
  display: "inline-flex",
  flexShrink: 0,
  alignItems: "center",
  borderRadius: r.full,
  border: "1px solid transparent",
  outline: "none",
  transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
  // default size
  height: "1.15rem",
  width: "2rem",
  selectors: {
    "&[data-size=sm]": { height: "0.875rem", width: "1.5rem" },
    // Unchecked
    "&[data-unchecked]": { backgroundColor: vars.color.input },
    // Checked
    "&[data-checked]": { backgroundColor: vars.color.primary },
    // Dark unchecked
    [`.${darkTheme} &[data-unchecked]`]: {
      backgroundColor: alpha(vars.color.input, 80),
    },
    // Disabled
    "&[data-disabled]": { cursor: "not-allowed", opacity: 0.5 },
    // Focus
    "&:focus-visible": focusRing(),
    // Invalid
    "&[aria-invalid='true']": invalidRing(),
  },
});

export const thumb = style({
  display: "block",
  borderRadius: r.full,
  backgroundColor: vars.color.background,
  boxShadow: "none",
  transition: "transform 150ms",
  // default size
  width: "1rem",
  height: "1rem",
  selectors: {
    "[data-size=sm] &": { width: "0.75rem", height: "0.75rem" },
    // Unchecked position
    "[data-unchecked] &": { transform: "translateX(0)" },
    // Checked position — moves to right minus tiny gap
    "[data-checked] &": { transform: "translateX(calc(100% - 2px))" },
    // Dark checked thumb color
    [`.${darkTheme} [data-checked] &`]: {
      backgroundColor: vars.color.primaryForeground,
    },
    [`.${darkTheme} [data-unchecked] &`]: {
      backgroundColor: vars.color.foreground,
    },
  },
});
