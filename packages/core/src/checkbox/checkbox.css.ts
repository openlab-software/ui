import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { alpha, focusRing, invalidRing } from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({
  position: "relative",
  display: "flex",
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  border: `1px solid ${vars.color.input}`,
  outline: "none",
  transition: "box-shadow 150ms",
  selectors: {
    // Focus
    "&:focus-visible": focusRing(),
    // Disabled
    "&:disabled, &[data-disabled]": { cursor: "not-allowed", opacity: 0.5 },
    // Checked state
    "&[data-checked]": {
      borderColor: vars.color.primary,
      backgroundColor: vars.color.primary,
      color: vars.color.primaryForeground,
    },
    // Dark unchecked background
    [`.${darkTheme} &`]: {
      backgroundColor: alpha(vars.color.input, 30),
    },
    [`.${darkTheme} &[data-checked]`]: {
      backgroundColor: vars.color.primary,
    },
    // Invalid
    "&[aria-invalid='true']": {
      ...invalidRing(),
    },
    "&[aria-invalid='true'][data-checked]": {
      borderColor: vars.color.primary,
    },
    // Field disabled
    "[data-disabled=true] &": { opacity: 0.5 },
  },
});

export const indicator = style({
  display: "grid",
  placeContent: "center",
  color: "currentColor",
  transition: "none",
});
