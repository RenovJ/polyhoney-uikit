import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
  isMobile?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMobile = false }) => {
  return (
    <img
      alt="HoneyFarmFinance"
      src={
        isMobile ? "/images/menu/main_logo_m.png" : "/images/menu/main_logo.png"
      }
      style={{ width: "auto", height: "100%" }}
    />
  );
};

export default Logo;
