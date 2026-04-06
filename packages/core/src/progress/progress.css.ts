import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", flexDirection: "column", gap: "0.25rem", width: "100%" });
export const track = style({
  height: "0.5rem", width: "100%",
  borderRadius: vars.radius.button,
  backgroundColor: vars.color.muted,
  overflow: "hidden",
});
export const indicator = style({
  height: "100%",
  backgroundColor: vars.color.primary,
  borderRadius: vars.radius.button,
  transition: "width 0.2s ease",
});
export const label = style({ fontSize: "0.75rem", color: vars.color.mutedForeground });
export const valueText = style({ fontSize: "0.75rem", color: vars.color.foreground, fontWeight: 500 });
