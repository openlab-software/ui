import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  flexShrink: 0,
  backgroundColor: vars.color.border,
  border: "none",
  selectors: {
    "&[data-orientation=horizontal]": { height: "1px", width: "100%" },
    "&[data-orientation=vertical]": { width: "1px", alignSelf: "stretch" },
  },
});
