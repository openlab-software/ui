import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r } from "../theme/utils.css";

export const root = style({
  display: "flex",
  width: "fit-content",
  flexDirection: "row",
  alignItems: "center",
  selectors: {
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "stretch",
    },
    // Outline grouped (spacing=0) border management
    "&[data-spacing='0'][data-variant=outline]": {
      borderRadius: r["4xl"],
    },
  },
});

export const item = style({
  flexShrink: 0,
  selectors: {
    // When spacing=0, remove individual radii and overlapping borders
    "[data-spacing='0'] &": {
      borderRadius: 0,
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      boxShadow: "none",
    },
    "[data-spacing='0'] &:first-child": {
      borderRadius: `${r["3xl"]} 0 0 ${r["3xl"]}`,
    },
    "[data-spacing='0'] &:last-child": {
      borderRadius: `0 ${r["3xl"]} ${r["3xl"]} 0`,
    },
    "[data-spacing='0'][data-variant=outline] &:not(:first-child)": {
      borderLeftWidth: 0,
    },
    "[data-spacing='0'][data-orientation=vertical] &:first-child": {
      borderRadius: `${r["3xl"]} ${r["3xl"]} 0 0`,
    },
    "[data-spacing='0'][data-orientation=vertical] &:last-child": {
      borderRadius: `0 0 ${r["3xl"]} ${r["3xl"]}`,
    },
    "[data-spacing='0'][data-orientation=vertical][data-variant=outline] &:not(:first-child)": {
      borderTopWidth: 0,
    },
    // Active state
    "&[data-state=on]": { backgroundColor: vars.color.muted },
    // Focus
    "&:focus": { zIndex: 1 },
  },
});
