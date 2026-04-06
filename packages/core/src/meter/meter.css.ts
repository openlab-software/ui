import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", flexDirection: "column", gap: "0.25rem" });
export const label = style({ fontSize: "0.75rem", color: vars.color.mutedForeground });
export const track = style({
  height: "0.5rem", borderRadius: vars.radius.button,
  backgroundColor: vars.color.muted,
});
export const indicator = style({
  height: "100%",
  backgroundColor: vars.color.primary,
  borderRadius: vars.radius.button,
});
export const valueText = style({ fontSize: "0.75rem", color: vars.color.foreground });
