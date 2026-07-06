export const animations = {
  keyframes: {
    "fade-in": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    "fade-up": {
      "0%": { opacity: "0", transform: "translateY(20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "fade-down": {
      "0%": { opacity: "0", transform: "translateY(-20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "zoom-in": {
      "0%": { opacity: "0", transform: "scale(0.95)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    }
  },
  animation: {
    "fade-in": "fade-in var(--speed-medium) var(--ease-out) forwards",
    "fade-up": "fade-up var(--speed-medium) var(--ease-out) forwards",
    "fade-down": "fade-down var(--speed-medium) var(--ease-out) forwards",
    "zoom-in": "zoom-in var(--speed-medium) var(--ease-out) forwards",
    "fast": "var(--speed-fast)",
    "medium": "var(--speed-medium)",
    "slow": "var(--speed-slow)",
  },
};
