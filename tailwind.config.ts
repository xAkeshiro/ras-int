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
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "subheading": ["clamp(1.125rem, 2vw, 1.375rem)", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
