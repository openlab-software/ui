import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  display: "flex", flexDirection: "column", gap: "0.5rem",
  border: "none", padding: 0, margin: 0,
});
export const legend = style({ fontSize: "0.875rem", fontWeight: 500, color: vars.color.foreground, marginBottom: "0.25rem" });
