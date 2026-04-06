import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "flex", flexDirection: "column", gap: "0.5rem" });
export const item = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" },
    "&[data-checked]": { borderColor: vars.color.primary },
  },
});
export const indicator = style({
  width: "0.5rem",
  height: "0.5rem",
  borderRadius: "50%",
  backgroundColor: vars.color.primary,
});
