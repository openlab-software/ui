import { style } from "@vanilla-extract/css";

export const root = style({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  overflow: "hidden",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "color-mix(in srgb, currentColor 10%, transparent)",
  color: "inherit",
});

export const image = style({ width: "100%", height: "100%", objectFit: "cover" });

export const fallback = style({ fontSize: "0.875rem", fontWeight: 500 });
