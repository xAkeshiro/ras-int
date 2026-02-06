import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ras: {
          green: {
            50: "#f0faf0",
            100: "#dcf5dc",
            200: "#b8e8b8",
            300: "#7ed67e",
            400: "#4ec24e",
            500: "#3aaa3a",
            600: "#2d8a2d",
            700: "#236d23",
            800: "#1a521a",
            900: "#143d14",
            950: "#0a1f0a",
          },
          bark: {
            light: "#c4a265",
            DEFAULT: "#8b6f3a",
            dark: "#5c4a27",
          },
          neutral: {
            50: "#fafaf8",
            100: "#f5f4f0",
            200: "#e8e6df",
            300: "#d4d1c7",
            400: "#9c9889",
            500: "#6b6758",
            600: "#4a473c",
            700: "#353328",
            800: "#23211a",
            900: "#141310",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
