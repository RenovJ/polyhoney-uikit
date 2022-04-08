import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    //backgroundColor: "primary",
    background: "linear-gradient(180deg, #53CAEB 0%, #357AA1 100%);",
    color: "#FFFFFF",
    textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "100px",
  },
  [variants.SECONDARY]: {
    boxShadow: "none",
    backgroundColor: "secondary",
    borderRadius: "100px",
    color: "#ffffff",
    ":disabled": {
      backgroundColor: "#DBDBDB",
      color: "#656565",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "textMenuHovered",
    border: "2px solid",
    borderColor: "secondary",
    boxSizing: "border-box",
    boxShadow: "0px 0px 20px rgba(33, 88, 119, 0.3)",
    borderRadius: "100px",
    color: "secondary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};
