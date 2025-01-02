import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
    },
    extend: {
      backgroundColor: {
        red: {
          DEFAULT: "rgb(192, 16, 24)",
          light: "rgb(200, 24, 32)",
        },
        slate: {
          DEFAULT: "rgb(14, 14, 16)",
          light: "rgb(26, 24, 24)",
        },
      },
      borderColor: {
        DEFAULT: "transparent",
        light: "rgba(255, 255, 255, 0.12)",
        medium: "rgba(255, 255, 255, 0.24)",
        strong: "rgba(255, 255, 255, 0.36)",
      },
      textColor: {
        white: "rgb(255, 255, 255)",
      },
    },
    fontFamily: {
      sans: "var(--font-nunito)",
      display: "var(--font-raleway)",
    },
  },
};

export default config;
