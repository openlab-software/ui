import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, focusRing } from "../theme/utils.css";

export const root = style({
  position: "relative",
});

export const viewport = style({
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  transition: "box-shadow 150ms",
  outline: "none",
  selectors: {
    "&:focus-visible": focusRing(),
  },
});

export const scrollbar = style({
  display: "flex",
  touchAction: "none",
  padding: "1px",
  transition: "colors 150ms",
  userSelect: "none",
  selectors: {
    "&[data-orientation=horizontal]": {
      height: "0.625rem",
      flexDirection: "column",
      borderTop: "1px solid transparent",
    },
    "&[data-orientation=vertical]": {
      width: "0.625rem",
      height: "100%",
      borderLeft: "1px solid transparent",
    },
  },
});

export const thumb = style({
  position: "relative",
  flex: 1,
  borderRadius: r.full,
  backgroundColor: vars.color.border,
});
