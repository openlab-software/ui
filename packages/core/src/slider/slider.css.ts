import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", alignItems: "center", position: "relative" });
export const track = style({
  position: "relative", flexGrow: 1,
  borderRadius: "999px", height: "0.5rem",
  backgroundColor: vars.color.muted,
});
export const control = style({ cursor: "pointer" });
export const thumb = style({
  display: "block", width: "1.25rem", height: "1.25rem",
  borderRadius: "50%",
  backgroundColor: vars.color.primary,
  border: `2px solid ${vars.color.primaryForeground}`,
  outline: "none",
  selectors: { "&:focus-visible": { outline: `2px solid ${vars.color.ring}`, outlineOffset: "2px" } },
});
