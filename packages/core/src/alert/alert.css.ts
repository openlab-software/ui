import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export type AlertVariant = NonNullable<RecipeVariants<typeof root>>["variant"];

export const root = recipe({
  base: {
    position: "relative",
    display: "grid",
    width: "100%",
    gap: "0.125rem",
    borderRadius: `calc(${vars.radius.base} * 1.4)`,
    border: `1px solid ${vars.color.border}`,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    textAlign: "left",
    fontSize: "0.875rem",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.card,
        color: vars.color.cardForeground,
      },
      destructive: {
        backgroundColor: vars.color.card,
        color: vars.color.destructive,
      },
    },
  },
  defaultVariants: { variant: "default" },
});

export const title = style({
  fontWeight: 500,
});

export const description = style({
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
  textWrap: "balance",
});

export const action = style({
  position: "absolute",
  top: "0.625rem",
  right: "0.75rem",
});
