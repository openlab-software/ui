import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing, invalidRing } from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({
  display: "grid",
  width: "100%",
  gap: "0.75rem",
});

export const item = style({
  position: "relative",
  display: "flex",
  aspectRatio: "1",
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
  borderRadius: r.full,
  border: `1px solid ${vars.color.input}`,
  outline: "none",
  selectors: {
    "&:focus-visible": focusRing(),
    "&:disabled, &[data-disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&[data-checked]": {
      borderColor: vars.color.primary,
      backgroundColor: vars.color.primary,
      color: vars.color.primaryForeground,
    },
    "&[aria-invalid='true']": invalidRing(),
    "&[aria-invalid='true'][data-checked]": { borderColor: vars.color.primary },
    [`.${darkTheme} &`]: { backgroundColor: alpha(vars.color.input, 30) },
    [`.${darkTheme} &[data-checked]`]: { backgroundColor: vars.color.primary },
  },
});

export const indicator = style({
  display: "flex",
  width: "1rem",
  height: "1rem",
  alignItems: "center",
  justifyContent: "center",
});

export const indicatorDot = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "0.5rem",
  height: "0.5rem",
  transform: "translate(-50%, -50%)",
  borderRadius: r.full,
  backgroundColor: vars.color.primaryForeground,
});
