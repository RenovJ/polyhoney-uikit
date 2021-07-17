import React from "react";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <img alt="PolyhoneyFinance" src="/images/polyhoney/polyhoney_light.svg" style={{width: "auto", height: "30px"}} />
  );
};

export default Logo;
