import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const root = style({
  width: "1rem",
  height: "1rem",
  animation: `${spin} 1s linear infinite`,
});
