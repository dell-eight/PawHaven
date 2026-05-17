export const designTokens = {
  colors: {
    cream50: "#fffaf6",
    cream100: "#f9efe2",
    cream200: "#f2dfcb",
    beige200: "#e8d1ba",
    beige300: "#d9b995",
    brown900: "#33251d",
    brown700: "#654736",
    brown500: "#8f6d58",
    sage500: "#7c9a72",
    sage700: "#476a4a",
    peach300: "#efb094",
    peach100: "#ffe4d6",
    white: "#ffffff",
  },
  radii: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.5rem",
  },
  shadows: {
    soft: "0 14px 34px rgba(51, 37, 29, 0.08)",
    lift: "0 22px 48px rgba(51, 37, 29, 0.13)",
  },
  layout: {
    containerMax: "72rem",
    sectionY: "clamp(3.75rem, 8vw, 7rem)",
  },
} as const;
