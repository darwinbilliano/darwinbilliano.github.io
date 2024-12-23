import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "hsla(0, 0%, 100%, 30%)",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(230, 10%, 3%)",
          light: "hsl(230, 10%, 5%)",
        },
        accent: {
          DEFAULT: "hsl(357, 80%, 42%)",
          light: "hsl(357, 80%, 48%)",
        },
      },
    },
  },
};

export default config;
