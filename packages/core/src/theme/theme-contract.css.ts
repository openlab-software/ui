import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    // Core
    background: null,
    foreground: null,
    // Card
    card: null,
    cardForeground: null,
    // Popover
    popover: null,
    popoverForeground: null,
    // Primary
    primary: null,
    primaryForeground: null,
    // Secondary
    secondary: null,
    secondaryForeground: null,
    // Muted
    muted: null,
    mutedForeground: null,
    // Accent
    accent: null,
    accentForeground: null,
    // Destructive
    destructive: null,
    // Border / Input / Ring
    border: null,
    input: null,
    ring: null,
    // Charts
    chart1: null,
    chart2: null,
    chart3: null,
    chart4: null,
    chart5: null,
    // Sidebar
    sidebar: null,
    sidebarForeground: null,
    sidebarPrimary: null,
    sidebarPrimaryForeground: null,
    sidebarAccent: null,
    sidebarAccentForeground: null,
    sidebarBorder: null,
    sidebarRing: null,
  },
  font: {
    body: null,
  },
  radius: {
    base: null,
  },
});
