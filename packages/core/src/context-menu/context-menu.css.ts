import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/theme-contract.css";
import { alpha, fadeIn, fadeOut, r } from "../theme/utils.css";

// Popup open/close with transform-origin preserved
const popupOpen = keyframes({
  from: { opacity: 0, transform: "scale(0.95)" },
  to: { opacity: 1, transform: "scale(1)" },
});

const popupClose = keyframes({
  from: { opacity: 1, transform: "scale(1)" },
  to: { opacity: 0, transform: "scale(0.95)" },
});

export const trigger = style({
  userSelect: "none",
});

export const positioner = style({
  isolation: "isolate",
  zIndex: 50,
  outline: "none",
});

export const popup = style({
  zIndex: 50,
  maxHeight: "var(--available-height)",
  minWidth: "9rem",
  overflowX: "hidden",
  overflowY: "auto",
  borderRadius: r.lg,
  backgroundColor: vars.color.popover,
  padding: "0.25rem",
  color: vars.color.popoverForeground,
  transformOrigin: "var(--transform-origin)",
  boxShadow: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`,
  outline: "none",
  transitionDuration: "100ms",
  selectors: {
    [`&[data-open]`]: {
      animation: `${fadeIn} 100ms ease, ${popupOpen} 100ms ease`,
    },
    [`&[data-closed]`]: {
      animation: `${fadeOut} 100ms ease, ${popupClose} 100ms ease`,
    },
  },
});

// ring-1 ring-foreground/10
globalStyle(`${popup}`, {
  boxShadow: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1), 0 0 0 1px ${alpha(vars.color.foreground, 10)}`,
});

export const itemBase = {
  position: "relative" as const,
  display: "flex" as const,
  cursor: "default" as const,
  alignItems: "center" as const,
  gap: "0.375rem",
  borderRadius: r.md,
  padding: "0.25rem 0.375rem",
  fontSize: "0.875rem",
  outline: "none",
  userSelect: "none" as const,
};

export const itemVariant = recipe({
  base: {
    ...itemBase,

    selectors: {
      "&[data-disabled]": {
        pointerEvents: "none",
        opacity: 0.5,
      },
      "&[data-highlighted], &:focus": {
        backgroundColor: vars.color.accent,
        color: vars.color.accentForeground,
      },
      "&[data-inset]": {
        paddingLeft: "1.75rem",
      },
    },
  },
  variants: {
    variant: {
      default: {},
      destructive: {
        color: vars.color.destructive,
        selectors: {
          "&[data-highlighted], &:focus": {
            backgroundColor: alpha(vars.color.destructive, 10),
            color: vars.color.destructive,
          },
        },
      },
    },
  },
  defaultVariants: { variant: "default" },
});

export type ItemVariants = NonNullable<RecipeVariants<typeof itemVariant>>;

export const checkboxItem = style({
  ...itemBase,
  paddingRight: "2rem",
  paddingLeft: "0.375rem",

  selectors: {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&[data-highlighted], &:focus": {
      backgroundColor: vars.color.accent,
      color: vars.color.accentForeground,
    },
    "&[data-inset]": {
      paddingLeft: "1.75rem",
    },
  },
});

export const checkboxIndicatorWrapper = style({
  pointerEvents: "none",
  position: "absolute",
  right: "0.5rem",
});

export const radioItem = style({
  ...itemBase,
  paddingRight: "2rem",
  paddingLeft: "0.375rem",

  selectors: {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&[data-highlighted], &:focus": {
      backgroundColor: vars.color.accent,
      color: vars.color.accentForeground,
    },
    "&[data-inset]": {
      paddingLeft: "1.75rem",
    },
  },
});

export const radioIndicatorWrapper = style({
  pointerEvents: "none",
  position: "absolute",
  right: "0.5rem",
});

export const subTrigger = style({
  ...itemBase,

  selectors: {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&[data-highlighted], &:focus": {
      backgroundColor: vars.color.accent,
      color: vars.color.accentForeground,
    },
    "&[data-open]": {
      backgroundColor: vars.color.accent,
      color: vars.color.accentForeground,
    },
    "&[data-inset]": {
      paddingLeft: "1.75rem",
    },
  },
});

export const label = style({
  padding: "0.25rem 0.375rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  color: vars.color.mutedForeground,

  selectors: {
    "&[data-inset]": {
      paddingLeft: "1.75rem",
    },
  },
});

export const separator = style({
  margin: "0.25rem -0.25rem",
  height: "1px",
  backgroundColor: vars.color.border,
});

export const shortcut = style({
  marginLeft: "auto",
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  color: vars.color.mutedForeground,
});

const svgSelector = [
  itemVariant.classNames.base,
  checkboxItem,
  radioItem,
  subTrigger,
]
  .map((c) => `${c} svg`)
  .join(", ");

globalStyle(svgSelector, {
  pointerEvents: "none",
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
});
