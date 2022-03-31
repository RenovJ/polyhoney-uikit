import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img
      alt="HoneyFarmFinance"
      src="/images/honeybee/logo_text.svg"
      style={{ width: "auto", height: "60px" }}
    />
  );
};

export default Logo;
