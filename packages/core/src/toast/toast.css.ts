import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  position: "fixed",
  bottom: "1rem",
  right: "1rem",
  zIndex: 60,
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",
  padding: "1rem",
  width: "32rem",
  maxWidth: "calc(100vw - 2rem)",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  boxShadow: `0 10px 25px rgba(0,0,0,0.15)`,
  selectors: {
    "&[data-type=info]": { borderColor: vars.color.ring },
    "&[data-type=success]": { borderColor: vars.color.primary },
    "&[data-type=destructive]": { borderColor: vars.color.destructive },
  },
});
export const title = style({
  fontSize: "0.875rem",
  fontWeight: 600,
  color: vars.color.foreground,
});
export const description = style({
  fontSize: "0.75rem",
  color: vars.color.mutedForeground,
});
export const close = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem",
  border: "none",
  background: "transparent",
  color: vars.color.mutedForeground,
  cursor: "pointer",
});
export const action = style({
  padding: "0.375rem 0.75rem",
  fontSize: "0.75rem",
  borderRadius: vars.radius.button,
  border: "none",
  background: vars.color.primary,
  color: vars.color.primaryForeground,
  cursor: "pointer",
});
export const trigger = style({ display: "inline-flex" });
export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 59,
  backgroundColor: "rgba(0,0,0,0.4)",
  selectors: {
    "&[data-starting-style]": { opacity: 0 },
    "&[data-ending-style]": { opacity: 0 },
  },
});
export const arrow = style({ fill: vars.color.background });
