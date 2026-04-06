import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ display: "inline-flex" });
export const rootImage = style({ width: "100%", height: "auto", borderRadius: vars.radius.button });
export const popup = style({
  position: "fixed", zIndex: 50,
  width: "20rem",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.button,
  padding: "0.5rem",
  boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
});
export const backdrop = style({
  position: "fixed", inset: 0, zIndex: 49, backgroundColor: "rgba(0,0,0,0.3)",
  selectors: { "&[data-starting-style]": { opacity: 0 }, "&[data-ending-style]": { opacity: 0 } },
});
export const arrow = style({ fill: vars.color.background });
