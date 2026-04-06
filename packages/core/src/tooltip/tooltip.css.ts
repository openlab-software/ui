import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({});
export const trigger = style({ display: "inline-flex" });
export const popup = style({
  position: "fixed",
  zIndex: 50,
  padding: "0.375rem 0.75rem",
  fontSize: "0.75rem",
  fontFamily: "inherit",
  backgroundColor: vars.color.primary,
  color: vars.color.primaryForeground,
  borderRadius: vars.radius.button,
  maxWidth: "16rem",
});
export const arrow = style({ fill: vars.color.primary });
export const arrowBody = style({});
