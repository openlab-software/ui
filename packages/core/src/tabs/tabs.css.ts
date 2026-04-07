import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing } from "../theme/utils.css";
import { darkTheme } from "../theme/default.css";

export const root = style({
  display: "flex",
  gap: "0.5rem",
  selectors: {
    "&[data-orientation=horizontal]": { flexDirection: "column" },
    "&[data-orientation=vertical]": { flexDirection: "row" },
  },
});

export const list = recipe({
  base: {
    display: "inline-flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: r["4xl"],
    padding: "3px",
    color: vars.color.mutedForeground,
    selectors: {
      "[data-orientation=horizontal] &": { height: "2.25rem" },
      "[data-orientation=vertical] &": {
        height: "fit-content",
        flexDirection: "column",
        borderRadius: r["2xl"],
      },
    },
  },
  variants: {
    variant: {
      default: { backgroundColor: vars.color.muted },
      line: {
        gap: "0.25rem",
        backgroundColor: "transparent",
        borderRadius: 0,
        padding: 0,
      },
    },
  },
  defaultVariants: { variant: "default" },
});

export const trigger = style({
  position: "relative",
  display: "inline-flex",
  flex: 1,
  height: "calc(100% - 1px)",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.375rem",
  borderRadius: r.xl,
  border: "1px solid transparent",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  color: alpha(vars.color.foreground, 60),
  transition: "all 150ms",
  outline: "none",
  selectors: {
    // Vertical
    "[data-orientation=vertical] &": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: "0.625rem",
      paddingRight: "0.625rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.375rem",
    },
    "&:hover": { color: vars.color.foreground },
    "&:focus-visible": focusRing(),
    "&:disabled": { pointerEvents: "none", opacity: 0.5 },
    // Default variant active
    "&[data-active]": {
      backgroundColor: vars.color.background,
      color: vars.color.foreground,
    },
    // Dark default variant active
    [`.${darkTheme} &[data-active]`]: {
      borderColor: vars.color.input,
      backgroundColor: alpha(vars.color.input, 30),
    },
    // Line variant - underline indicator
    "[data-variant=line] &[data-active]::after": {
      opacity: 1,
    },
    "[data-variant=line] &::after": {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: vars.color.foreground,
      opacity: 0,
      transition: "opacity 150ms",
    },
  },
});

export const panel = style({
  flex: 1,
  fontSize: "0.875rem",
  outline: "none",
});

export type TabsListVariants = RecipeVariants<typeof list>;
