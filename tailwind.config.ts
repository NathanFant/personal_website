import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0d1117",
        surface: "#161b22",
        border: "#21262d",
        text: "#e6edf3",
        muted: "#7d8590",
        accent: "#58a6ff",
        green: "#3fb950",
      },
    },
  },
};

export default config;
