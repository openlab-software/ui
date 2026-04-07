import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r } from "../theme/utils.css";

export const root = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
});

export const track = style({
  position: "relative",
  display: "flex",
  height: "0.75rem",
  width: "100%",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: r["4xl"],
  backgroundColor: vars.color.muted,
});

export const indicator = style({
  height: "100%",
  backgroundColor: vars.color.primary,
  transition: "all 150ms",
});

export const label = style({
  fontSize: "0.875rem",
  fontWeight: 500,
});

export const value = style({
  marginLeft: "auto",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  fontVariantNumeric: "tabular-nums",
});
