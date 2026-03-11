import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f1e8",
        ink: "#0d0d0d",
        surface: "#141414",
        line: "#d7cebf",
        accent: "#ae8f57",
        muted: "#6f685c"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(13, 13, 13, 0.08)"
      },
      letterSpacing: {
        wideish: "0.18em"
      }
    }
  },
  plugins: []
};

export default config;
