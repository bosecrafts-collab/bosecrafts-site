import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFFF",
        cream: "#F5F2EE",
        sand: "#ECE7E1",
        clay: "#6F6256",
        moss: "#4D433B",
        ink: "#111111",
        smoke: "#6E6A63",
        accent: "#D9F65A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide2: "0.12em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        editorial: "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
