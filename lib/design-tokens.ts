export const designTokens = {
  colors: {
    cream50: "#fffaf2",
    cream100: "#f8eedf",
    cream200: "#f1e3d1",
    beige200: "#ead8c4",
    beige300: "#ddc4aa",
    brown900: "#3d2b21",
    brown700: "#6b4a38",
    brown500: "#8b6751",
    sage500: "#7f9b7b",
    sage700: "#4f6f52",
    peach300: "#f3b69f",
    peach100: "#ffe7dc",
    white: "#ffffff",
  },
  radii: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.5rem",
  },
  shadows: {
    soft: "0 16px 36px rgba(61, 43, 33, 0.1)",
    lift: "0 22px 45px rgba(61, 43, 33, 0.14)",
  },
  layout: {
    containerMax: "72rem",
    sectionY: "clamp(3.5rem, 8vw, 6.5rem)",
  },
} as const;
