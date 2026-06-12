import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial palette — warm, paper-like neutrals + muted earth tones
        ivory: "#FFFFFF",     // page background (white, matching reference)
        cream: "#F7F5F2",     // alternate section background
        sand: "#E8E4DE",      // borders / dividers
        clay: "#A98467",      // muted earth accent (hover, eyebrows)
        moss: "#6B705C",      // secondary earth accent
        ink: "#1C1B19",       // near-black text
        smoke: "#6E6A63",     // secondary text
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
