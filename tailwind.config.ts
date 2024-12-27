import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: {
        DEFAULT: "hsl(357, 80%, 42%)",
        light: "hsl(357, 80%, 48%)",
      },
      slate: {
        DEFAULT: "hsl(230, 10%, 3%)",
        light: "hsl(230, 10%, 5%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      borderColor: {
        DEFAULT: "hsla(0, 0%, 100%, 10%)",
      },
      boxShadow: {
        DEFAULT: "0 0 1px 2px hsla(0, 0%, 100%, 10%)",
      },
    },
    fontFamily: {
      sans: "var(--font-nunito)",
      display: "var(--font-raleway)",
    },
  },
};

export default config;
