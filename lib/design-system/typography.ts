import type { Config } from "tailwindcss";

type TailwindTheme = NonNullable<Config["theme"]>;
type TailwindThemeExtend = NonNullable<TailwindTheme["extend"]>;
type TailwindFontSize = TailwindThemeExtend["fontSize"];

export const typography = {
  fontFamily: {
    heading: ["var(--font-manrope)", "sans-serif"],
    body: ["var(--font-inter)", "sans-serif"],
    numbers: ["var(--font-space-grotesk)", "sans-serif"],
    code: ["var(--font-jetbrains-mono)", "monospace"],
  },
  fontSize: {
    "display-xxl": ["clamp(3.5rem, 6vw + 1rem, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 80px max
    "display-xl": ["clamp(3rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 72px max
    "display-lg": ["clamp(2.5rem, 4vw + 1rem, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 64px max
    "h1": ["clamp(2rem, 3vw + 1rem, 3.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 56px max
    "h2": ["clamp(1.75rem, 2.5vw + 1rem, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 48px max
    "h3": ["clamp(1.5rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 40px max
    "h4": ["clamp(1.25rem, 1.5vw + 1rem, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 32px max
    "h5": ["clamp(1.125rem, 1.25vw + 1rem, 1.75rem)", { lineHeight: "1.2" }], // 28px max
    "h6": ["clamp(1rem, 1vw + 1rem, 1.5rem)", { lineHeight: "1.2" }], // 24px max
    "body-xl": ["1.25rem", { lineHeight: "1.6" }], // 20px
    "body-lg": ["1.125rem", { lineHeight: "1.6" }], // 18px
    "body": ["1rem", { lineHeight: "1.6" }], // 16px
    "body-sm": ["0.875rem", { lineHeight: "1.6" }], // 14px
    "caption": ["0.75rem", { lineHeight: "1.5" }], // 12px
    "label": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "600" }], // 14px
    "button": ["1rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "500" }], // 16px
    "nav": ["0.9375rem", { lineHeight: "1.5", fontWeight: "500" }], // 15px
    "footer": ["0.875rem", { lineHeight: "1.6" }], // 14px
  } satisfies TailwindFontSize,
};
