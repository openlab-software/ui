import { style } from "@vanilla-extract/css";
import { vars } from "../theme/theme-contract.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: 1,
  fontWeight: 500,
  userSelect: "none",
  selectors: {
    // Field disabled state
    "[data-disabled=true] &": { pointerEvents: "none", opacity: 0.5 },
    // Peer disabled (checkbox/radio)
    ".peer:disabled ~ &": { cursor: "not-allowed", opacity: 0.5 },
  },
});
