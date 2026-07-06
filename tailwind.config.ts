import type { Config } from "tailwindcss";
import { colors } from "./lib/design-system/colors";
import { typography } from "./lib/design-system/typography";
import { spacing } from "./lib/design-system/spacing";
import { animations } from "./lib/design-system/animations";
import { tokens } from "./lib/design-system/tokens";
import { layout } from "./lib/design-system/layout";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    screens: layout.breakpoints,
    extend: {
      colors: {
        navy: {
          DEFAULT: colors.primary.DEFAULT,
        },
        steel: {
          DEFAULT: colors.secondary.DEFAULT,
        },
        orange: {
          DEFAULT: colors.accent.DEFAULT,
        },
        primary: {
          ...colors.primary,
        },
        secondary: {
          ...colors.secondary,
        },
        accent: {
          ...colors.accent,
        },
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
        background: {
          ...colors.background,
        },
        surface: {
          ...colors.surface,
        },
        ink: {
          DEFAULT: colors.text.primary,
          muted: colors.text.secondary,
        },
        line: {
          DEFAULT: colors.border.light,
          dark: colors.border.dark,
        },
      },
      borderRadius: tokens.radius,
      fontFamily: {
        display: typography.fontFamily.heading,
        heading: typography.fontFamily.heading,
        body: typography.fontFamily.body,
        mono: typography.fontFamily.numbers,
        code: typography.fontFamily.code,
      },
      fontSize: typography.fontSize,
      spacing: spacing,
      keyframes: animations.keyframes,
      animation: animations.animation,
      boxShadow: {
        ...tokens.shadows,
        card: "0 1px 2px rgba(10, 35, 66, 0.06), 0 4px 16px rgba(10, 35, 66, 0.06)",
        raised: "0 8px 30px rgba(10, 35, 66, 0.10)",
      },
      zIndex: tokens.zIndices,
      maxWidth: layout.container,
    },
  },
  plugins: [],
} satisfies Config;

export default config;
