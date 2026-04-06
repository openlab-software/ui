import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  width: "2.75rem",
  height: "1.25rem",
  borderRadius: "999px",
  border: "none",
  backgroundColor: vars.color.muted,
  cursor: "pointer",
  outline: "none",
  padding: "0.125rem",
  transition: "background-color 0.15s",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
    "&[data-checked]": { backgroundColor: vars.color.primary },
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },
});

export const thumb = style({
  display: "block", width: "1rem", height: "1rem",
  borderRadius: "50%",
  backgroundColor: vars.color.primaryForeground,
  transition: "transform 0.15s",
  selectors: { "[data-checked] &": { transform: "translateX(1.5rem)" } },
});
