import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });
export const popup = style({
  position: "fixed", zIndex: 50,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  padding: "1rem",
  minWidth: "14rem",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const backdrop = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.3)",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const arrow = style({ fill: vars.color.background });
export const title = style({ fontSize: "0.875rem", fontWeight: 600, color: vars.color.foreground });
export const close = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "0.875rem",
  fontFamily: "inherit", borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`, background: vars.color.secondary,
  color: vars.color.secondaryForeground, cursor: "pointer",
});
export const description = style({ fontSize: "0.875rem", color: vars.color.mutedForeground });
