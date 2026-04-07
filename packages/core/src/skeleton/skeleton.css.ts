import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, pulse } from "../theme/utils.css";

export const root = style({
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  borderRadius: r.xl,
  backgroundColor: vars.color.muted,
});
