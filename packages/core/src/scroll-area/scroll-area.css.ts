import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({ position: "relative", overflow: "hidden", width: "100%" });
export const content = style({ width: "100%" });
export const scrollbar = style({
  display: "flex",
  selectors: { "&[data-orientation=horizontal]": { flexDirection: "row" }, "&[data-orientation=vertical]": { flexDirection: "column" } },
});
export const thumb = style({
  backgroundColor: vars.color.mutedForeground,
  borderRadius: vars.radius.button,
});
