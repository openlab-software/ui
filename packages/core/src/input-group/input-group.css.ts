import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha, focusRing } from "../theme/utils.css";

export const root = style({
  position: "relative",
  display: "flex",
  height: "2.25rem",
  width: "100%",
  minWidth: 0,
  alignItems: "center",
  borderRadius: r["4xl"],
  border: `1px solid ${vars.color.input}`,
  backgroundColor: alpha(vars.color.input, 30),
  outline: "none",
  transition: "border-color 150ms, box-shadow 150ms",
  selectors: {
    // When contains textarea, auto height
    "&:has(textarea)": { height: "auto", borderRadius: r["2xl"] },
    // Focus state via child input
    "&:has([data-slot=input-group-control]:focus-visible)": focusRing(),
    // Invalid state
    "&:has([aria-invalid='true'])": {
      borderColor: vars.color.destructive,
      boxShadow: `0 0 0 3px ${alpha(vars.color.destructive, 20)}`,
    },
    // Block align stacks vertically
    "&:has([data-align=block-end]), &:has([data-align=block-start])": {
      height: "auto",
      flexDirection: "column",
      borderRadius: r["2xl"],
    },
  },
});

export const addon = recipe({
  base: {
    display: "flex",
    height: "auto",
    cursor: "text",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: vars.color.mutedForeground,
    userSelect: "none",
  },
  variants: {
    align: {
      "inline-start": { order: -1, paddingLeft: "0.75rem" },
      "inline-end": { order: 1, paddingRight: "0.75rem" },
      "block-start": { order: -1, width: "100%", justifyContent: "flex-start", paddingLeft: "0.75rem", paddingTop: "0.75rem" },
      "block-end": { order: 1, width: "100%", justifyContent: "flex-start", paddingLeft: "0.75rem", paddingBottom: "0.75rem" },
    },
  },
  defaultVariants: { align: "inline-start" },
});

export const control = style({
  flex: 1,
  borderRadius: 0,
  border: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
  outline: "none",
  selectors: {
    "&:focus-visible": { boxShadow: "none", borderColor: "transparent" },
    "&[aria-invalid='true']": { boxShadow: "none", borderColor: "transparent" },
  },
});

export const text = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  color: vars.color.mutedForeground,
});

export type InputGroupAddonVariants = RecipeVariants<typeof addon>;
