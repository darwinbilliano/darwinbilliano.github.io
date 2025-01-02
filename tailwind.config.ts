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
          DEFAULT: "hsl(357, 80%, 42%)",
          light: "hsl(357, 80%, 48%)",
        },
        slate: {
          DEFAULT: "hsl(230, 10%, 3%)",
          light: "hsl(230, 7%, 6%)",
        },
      },
      borderColor: {
        DEFAULT: "transparent",
        light: "hsla(0, 0%, 100%, 8%)",
        medium: "hsla(0, 0%, 100%, 16%)",
        strong: "hsla(0, 0%, 100%, 32%)",
      },
      boxShadow: {
        DEFAULT: "0 0 1px 2px hsla(0, 0%, 100%, 10%)",
      },
      textColor: {
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: "var(--font-nunito)",
      display: "var(--font-raleway)",
    },
  },
};

export default config;
