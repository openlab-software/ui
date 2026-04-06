import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex", flexDirection: "column", gap: "0.25rem" });
export const input = style({
  width: "5rem",
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  textAlign: "center",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
  color: vars.color.foreground,
  outline: "none",
  selectors: { "&:focus": { borderColor: vars.color.ring, boxShadow: `0 0 0 2px ${vars.color.ring}` } },
});
export const group = style({ display: "inline-flex", alignItems: "center" });
export const increment = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  width: "2rem", height: "2rem",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.secondary,
  color: vars.color.foreground,
  cursor: "pointer", outline: "none",
  selectors: { "&:focus-visible": { outline: `2px solid ${vars.color.ring}` } },
});
export const decrement = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  width: "2rem", height: "2rem",
  borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.secondary,
  color: vars.color.foreground,
  cursor: "pointer", outline: "none",
  selectors: { "&:focus-visible": { outline: `2px solid ${vars.color.ring}` } },
});
