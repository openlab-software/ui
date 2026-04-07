import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "flex", flexDirection: "column", gap: "1rem" });
export const submit = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  padding: "0.5rem 1rem", fontSize: "0.875rem", fontFamily: "inherit",
  borderRadius: vars.radius.base, border: "none",
  background: vars.color.primary, color: vars.color.primaryForeground,
  cursor: "pointer",
});
export const reset = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  padding: "0.5rem 1rem", fontSize: "0.875rem", fontFamily: "inherit",
  borderRadius: vars.radius.base, border: `1px solid ${vars.color.border}`,
  background: "transparent", color: vars.color.foreground,
  cursor: "pointer",
});
export const status = style({ fontSize: "0.75rem", color: vars.color.mutedForeground });
