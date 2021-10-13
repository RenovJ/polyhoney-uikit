import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.menuBackground,
  hover: lightColors.menuBackgroundHovered,
};

export const dark: NavTheme = {
  background: darkColors.menuBackground,
  hover: darkColors.menuBackgroundHovered,
};
