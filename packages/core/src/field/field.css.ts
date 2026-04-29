import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";
import { r, alpha } from "../theme/utils.css";

export const fieldSet = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const fieldLegend = recipe({
  base: {
    marginBottom: "0.75rem",
    fontWeight: 500,
  },
  variants: {
    variant: {
      legend: { fontSize: "1rem" },
      label: { fontSize: "0.875rem" },
    },
  },
  defaultVariants: { variant: "legend" },
});

export const fieldGroup = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "1.75rem",
});

export const field = recipe({
  base: {
    display: "flex",
    width: "100%",
    gap: "0.75rem",
    selectors: {
      "&[data-invalid=true]": { color: vars.color.destructive },
    },
  },
  variants: {
    orientation: {
      vertical: {
        flexDirection: "column",
      },
      horizontal: {
        flexDirection: "row",
        alignItems: "center",
      },
      responsive: {
        flexDirection: "column",
        "@media": {
          "(min-width: 768px)": {
            flexDirection: "row",
            alignItems: "center",
          },
        },
      },
    },
  },
  defaultVariants: { orientation: "vertical" },
});

export const fieldContent = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "0.25rem",
  lineHeight: "1.25",
});

export const fieldLabel = style({
  display: "flex",
  width: "fit-content",
  gap: "0.5rem",
  lineHeight: "1.25",
  selectors: {
    "[data-disabled=true] &": { opacity: 0.5 },
    "&:has([data-slot=field])": {
      width: "100%",
      flexDirection: "column",
      borderRadius: r.xl,
      border: `1px solid ${vars.color.border}`,
    },
    "&:has([data-checked]) &": {
      borderColor: alpha(vars.color.primary, 30),
      backgroundColor: alpha(vars.color.primary, 5),
    },
  },
});

export const fieldTitle = style({
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.25",
  fontWeight: 500,
  selectors: {
    "[data-disabled=true] &": { opacity: 0.5 },
  },
});

export const fieldDescription = style({
  margin: "0",
  textAlign: "left",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  fontWeight: 400,
  color: vars.color.mutedForeground,
});

export const fieldSeparator = style({
  position: "relative",
  marginTop: "-0.5rem",
  marginBottom: "-0.5rem",
  height: "1.25rem",
  fontSize: "0.875rem",
});

export const fieldSeparatorContent = style({
  position: "relative",
  display: "block",
  margin: "0 auto",
  width: "fit-content",
  backgroundColor: vars.color.background,
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  color: vars.color.mutedForeground,
});

export const fieldError = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  color: vars.color.destructive,
});

export type FieldOrientation = RecipeVariants<typeof field>;
export type FieldLegendVariants = RecipeVariants<typeof fieldLegend>;
