import { tokens } from "./tokens";

export type Theme = "light" | "dark" | "system";

export const getThemeTokens = (theme: Theme) => {
  return tokens;
};
