import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/theme-contract.css";
import { focusRing, r } from "../theme/utils.css";

export const toggle = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    borderRadius: r["4xl"],
    fontSize: "0.875rem",
    fontWeight: 500,
    fontFamily: "inherit",
    whiteSpace: "nowrap",
    outline: "none",
    transition: "colors 150ms",
    selectors: {
      "&:hover": {
        backgroundColor: vars.color.muted,
        color: vars.color.foreground,
      },
      "&:focus-visible": focusRing(),
      "&:disabled": { pointerEvents: "none", opacity: 0.5 },
      "&[aria-pressed='true']": { backgroundColor: vars.color.muted },
      "&[aria-invalid='true']": { borderColor: vars.color.destructive },
    },
  },
  variants: {
    variant: {
      default: { backgroundColor: "transparent" },
      outline: {
        border: `1px solid ${vars.color.input}`,
        backgroundColor: "transparent",
        selectors: {
          "&:hover": { backgroundColor: vars.color.muted },
        },
      },
    },
    size: {
      default: {
        height: "2.25rem",
        minWidth: "2.25rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      },
      sm: {
        height: "2rem",
        minWidth: "2rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      },
      lg: {
        height: "2.5rem",
        minWidth: "2.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export type ToggleVariants = RecipeVariants<typeof toggle>;
