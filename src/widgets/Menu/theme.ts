import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.primaryDark,
  hover: lightColors.primaryBright,
};

export const dark: NavTheme = {
  background: darkColors.backgroundAlt,
  hover: "#473d5d",
};
