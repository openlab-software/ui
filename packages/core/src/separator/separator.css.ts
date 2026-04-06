import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  border: "none",
  backgroundColor: vars.color.border,
  selectors: {
    "&[data-orientation=horizontal]": { height: "1px", width: "100%" },
    "&[data-orientation=vertical]": { height: "100%", width: "1px" },
  },
});
export const label = style({
  fontSize: "0.75rem",
  color: vars.color.mutedForeground,
});
