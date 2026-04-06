import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });
export const popup = style({
  position: "fixed",
  zIndex: 50,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "28rem",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  padding: "1.5rem",
  boxShadow: `0 10px 25px rgba(0,0,0,0.15)`,
  selectors: {
    "&[data-starting-style]": { opacity: 0, transform: "translate(-50%, -45%)" },
    "&[data-ending-style]": { opacity: 0, transform: "translate(-50%, -55%)" },
  },
});
export const backdrop = style({
  position: "fixed",
  inset: 0,
  zIndex: 49,
  backgroundColor: "rgba(0,0,0,0.5)",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const title = style({ fontSize: "1.125rem", fontWeight: 600, color: vars.color.foreground });
export const description = style({ fontSize: "0.875rem", color: vars.color.mutedForeground, marginTop: "0.5rem" });
export const close = style({
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "0.875rem",
  fontFamily: "inherit", borderRadius: vars.radius.button,
  border: `1px solid ${vars.color.border}`, background: vars.color.secondary,
  color: vars.color.secondaryForeground, cursor: "pointer",
});
