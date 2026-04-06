import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  lineHeight: "1.25rem",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  outline: "none",
  selectors: {
    "&:focus": { borderColor: vars.color.ring, boxShadow: `0 0 0 2px ${vars.color.ring}` },
    "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
    "&::placeholder": { color: vars.color.mutedForeground },
  },
});
