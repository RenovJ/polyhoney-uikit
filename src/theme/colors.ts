import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FCE984",
  primaryBright: "#675A46",
  primaryDark: "#070724",
  secondary: "#675A46",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FAF9FA",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#FFFFFF",
  inputSecondary: "#FFDBB3",
  tertiary: "#675A46",
  text: "#B25600",
  textDisabled: "#BDC2C4",
  textSubtle: "#FF8214",
  textMenu: "#FCE984",
  textMenuHovered: "#333025",
  menuBackground: "#070724",
  menuBackgroundHovered: "#332B17",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};
/*
export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#92561F",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#2a4a7a",
  textDisabled: "#BDC2C4",
  textSubtle: "#1993fb",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};
 */

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FCE984",
  primaryDark: "#0098A1",
  background: "#0F0F33",
  backgroundDisabled: "#383838",
  backgroundAlt: "#070724",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#011A27",
  inputSecondary: "#ccc",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#ccc",
  textSubtle: "#FCE984",
  textMenu: "#FCE984",
  textMenuHovered: "#333025",
  menuBackground: "#070724",
  menuBackgroundHovered: "#332B17",
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a4654 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
