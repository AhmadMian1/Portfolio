import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        primary: "#22d3ee",
        secondary: "#818cf8",
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
