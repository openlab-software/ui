import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import {
  r,
  alpha,
  focusRing,
  invalidRing,
  transitionColors,
} from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({
  display: "flex",
  minHeight: "4rem",
  width: "100%",
  resize: "none",
  borderRadius: r.xl,
  border: `1px solid ${vars.color.input}`,
  backgroundColor: alpha(vars.color.input, 30),
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  fontSize: "1rem",
  fontFamily: "inherit",
  color: vars.color.foreground,
  outline: "none",
  transitionProperty: transitionColors,
  transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
  transitionDuration: "150ms",
  selectors: {
    "&::placeholder": { color: vars.color.mutedForeground },
    "&:focus-visible": focusRing(),
    "&:disabled": { cursor: "not-allowed", opacity: 0.5 },
    "&[aria-invalid='true']": invalidRing(),
    [`.${darkTheme} &[aria-invalid='true']`]: {
      borderColor: `color-mix(in oklch, ${vars.color.destructive} 50%, transparent)`,
      boxShadow: `0 0 0 3px color-mix(in oklch, ${vars.color.destructive} 40%, transparent)`,
    },
  },
  "@media": {
    "(min-width: 768px)": { fontSize: "0.875rem" },
  },
});
