import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2342", // Primary
        },
        steel: {
          DEFAULT: "#2E5B88", // Secondary
        },
        orange: {
          DEFAULT: "#FF6B00", // Accent
        },
        success: "#16A34A",
        error: "#DC2626",
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F8FAFC",
          dark: "#0F172A"
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280"
        },
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 35, 66, 0.06), 0 4px 16px rgba(10, 35, 66, 0.06)",
        raised: "0 8px 30px rgba(10, 35, 66, 0.10)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
