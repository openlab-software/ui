import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing, invalidRing } from "../theme/utils.css";

export const badge = recipe({
  base: {
    display: "inline-flex",
    height: "1.25rem",
    width: "fit-content",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    overflow: "hidden",
    borderRadius: r["4xl"],
    border: "1px solid transparent",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.125rem",
    paddingBottom: "0.125rem",
    fontSize: "0.75rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
    selectors: {
      "&:focus-visible": focusRing(),
      "&[aria-invalid='true']": invalidRing(),
    },
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.primary,
        color: vars.color.primaryForeground,
      },
      secondary: {
        backgroundColor: vars.color.secondary,
        color: vars.color.secondaryForeground,
      },
      destructive: {
        backgroundColor: alpha(vars.color.destructive, 10),
        color: vars.color.destructive,
      },
      outline: {
        borderColor: vars.color.border,
        backgroundColor: alpha(vars.color.input, 30),
        color: vars.color.foreground,
      },
      ghost: {
        selectors: {
          "&:hover": {
            backgroundColor: vars.color.muted,
            color: vars.color.mutedForeground,
          },
        },
      },
      link: {
        color: vars.color.primary,
        textUnderlineOffset: "4px",
        selectors: {
          "&:hover": { textDecoration: "underline" },
        },
      },
    },
  },
  defaultVariants: { variant: "default" },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
