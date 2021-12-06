import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img alt="HoneyFarmFinance" src="/images/menu/main_ticker_logo.png" style={{width: "auto", height: "80.9px"}} />
  );
};

export default Logo;
