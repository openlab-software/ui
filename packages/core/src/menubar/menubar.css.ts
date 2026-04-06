import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", alignItems: "center", gap: "0.125rem" });
export const trigger = style({
  padding: "0.375rem 0.75rem", fontSize: "0.875rem", fontFamily: "inherit",
  borderRadius: vars.radius.button,
  border: "none", background: "transparent", color: vars.color.foreground,
  cursor: "pointer", outline: "none",
  selectors: { "&[data-highlighted]": { backgroundColor: vars.color.muted } },
});
