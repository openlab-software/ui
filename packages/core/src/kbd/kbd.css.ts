import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r } from "../theme/utils.css";

export const root = style({
  display: "inline-flex",
  height: "1.25rem",
  minWidth: "1.25rem",
  width: "fit-content",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  borderRadius: r.sm,
  backgroundColor: vars.color.muted,
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  fontFamily: "sans-serif",
  fontSize: "0.75rem",
  fontWeight: 500,
  color: vars.color.mutedForeground,
  pointerEvents: "none",
  userSelect: "none",
});

export const group = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
});
