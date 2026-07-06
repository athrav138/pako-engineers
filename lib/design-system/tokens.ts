import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { animations } from "./animations";

export const tokens = {
  colors,
  typography,
  spacing,
  animations,
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    pill: "9999px",
    circle: "50%",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    floating: "0 20px 40px -10px rgba(10, 35, 66, 0.2)",
    hover: "0 10px 40px -10px rgba(10, 35, 66, 0.15)",
  },
  zIndices: {
    header: "50",
    dropdown: "100",
    modal: "200",
    drawer: "300",
    tooltip: "400",
    toast: "500",
    loading: "600",
    cursor: "9999",
  },
};
