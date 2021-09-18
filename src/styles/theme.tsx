export default {
  border: {
    radius: "5px",
  },
  colors: {},
  font: {
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 900,
    },
    sizes: {
      tiny: "0.6rem",
      small: "0.8rem",
      base: "1rem",
      medium: "1.2rem",
      large: "1.5rem",
      huge: "4.5rem",
    },
  },
  spacings: {
    base: "1rem",
  },
  shadows: {
    soft: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    medium:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    hard: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    large: "rgba(17,12,46,0.15) 0px 48px 100px 0px",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;
