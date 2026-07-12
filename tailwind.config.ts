import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        surface: "#111827",
        card: "#1F2937",
        line: "#2E3A4D",
        ink: "#F8FAFC",
        secondary: "#CBD5E1",
        muted: "#94A3B8",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        signal: "#14B8A6",
      },
      maxWidth: { site: "1240px" },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 18px 60px rgba(37, 99, 235, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
