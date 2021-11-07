import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FF8E8E",
  primaryBright: "#FFFFFF",
  primaryDark: "#181818",
  secondary: "#FA8181",
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
  headerBackground: "#FFFFFF",
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
  background: "#E8E8E8",
  backgroundDisabled: "#848484",
  backgroundAlt: "#302D2D",
  contrast: "#FFFFFF",
  dropdown: "#0B0B0B",
  invertedContrast: "#525252",
  input: "#0B0B0B",
  inputSecondary: "#ccc",
  tertiary: "#171414",
  text: "#FFFFFF",
  textDisabled: "#666",
  textSubtle: "#FFA9A6",
  textMenu: "#222222",
  textMenuHovered: "#FDED95",
  headerBackground: "#222222",
  menuBackground: "#D8D8D8",
  menuBackgroundHovered: "#FFDADA",
  borderColor: "#FFA19D",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a4654 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
