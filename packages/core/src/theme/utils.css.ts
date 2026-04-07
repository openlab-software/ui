import { keyframes } from "@vanilla-extract/css";
import { vars } from "./theme-contract.css";

// Radius helpers computed from the base radius token
export const r = {
  sm: `calc(${vars.radius.base} * 0.6)`,
  md: `calc(${vars.radius.base} * 0.8)`,
  lg: vars.radius.base,
  xl: `calc(${vars.radius.base} * 1.4)`,
  "2xl": `calc(${vars.radius.base} * 1.8)`,
  "3xl": `calc(${vars.radius.base} * 2.2)`,
  "4xl": `calc(${vars.radius.base} * 2.6)`,
  full: "9999px",
};

// Color helpers (opacity via color-mix)
export function alpha(color: string, pct: number) {
  return `color-mix(in oklch, ${color} ${pct}%, transparent)`;
}

// Animation keyframes
export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const zoomIn95 = keyframes({
  from: { opacity: 0, transform: "scale(0.95)" },
  to: { opacity: 1, transform: "scale(1)" },
});

export const zoomOut95 = keyframes({
  from: { opacity: 1, transform: "scale(1)" },
  to: { opacity: 0, transform: "scale(0.95)" },
});

export const slideInFromTop = keyframes({
  from: { opacity: 0, transform: "translateY(-0.5rem)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const slideInFromBottom = keyframes({
  from: { opacity: 0, transform: "translateY(0.5rem)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const slideInFromLeft = keyframes({
  from: { opacity: 0, transform: "translateX(-0.5rem)" },
  to: { opacity: 1, transform: "translateX(0)" },
});

export const slideInFromRight = keyframes({
  from: { opacity: 0, transform: "translateX(0.5rem)" },
  to: { opacity: 1, transform: "translateX(0)" },
});

export const slideOutToTop = keyframes({
  from: { opacity: 1, transform: "translateY(0)" },
  to: { opacity: 0, transform: "translateY(-0.5rem)" },
});

export const slideOutToBottom = keyframes({
  from: { opacity: 1, transform: "translateY(0)" },
  to: { opacity: 0, transform: "translateY(0.5rem)" },
});

export const accordionDown = keyframes({
  from: { height: "0" },
  to: { height: "var(--accordion-panel-height)" },
});

export const accordionUp = keyframes({
  from: { height: "var(--accordion-panel-height)" },
  to: { height: "0" },
});

export const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
});

// Shared transition values
export const transitionColors =
  "color 150ms cubic-bezier(0.4,0,0.2,1), background-color 150ms cubic-bezier(0.4,0,0.2,1), border-color 150ms cubic-bezier(0.4,0,0.2,1)";

export const transitionAll = "all 150ms cubic-bezier(0.4,0,0.2,1)";

// Focus ring mixin (returns selector styles object)
export function focusRing(c = vars.color.ring) {
  return {
    borderColor: c,
    boxShadow: `0 0 0 3px ${alpha(c, 50)}`,
  };
}

// Invalid ring mixin
export function invalidRing(c = vars.color.destructive) {
  return {
    borderColor: c,
    boxShadow: `0 0 0 3px ${alpha(c, 20)}`,
  };
}
