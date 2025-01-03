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
          DEFAULT: "hsl(357, 80%, 41%)",
          light: "hsl(357, 74%, 44%)",
        },
        slate: {
          DEFAULT: "hsl(240, 7%, 6%)",
          light: "hsl(240, 3%, 10%)",
        },
      },
      borderColor: {
        DEFAULT: "transparent",
        light: "hsl(0, 0%, 100%, 12%)",
        medium: "hsl(0, 0%, 100%, 24%)",
        strong: "hsl(0, 0%, 100%, 36%)",
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
