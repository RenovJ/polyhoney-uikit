import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import bunnyHeadMain from "./svg/right.svg";
import bunnyButt from "./svg/left.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "pointer";
};

const getBaseThumbStyles = ({ disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${bunnyHeadMain});
  cursor: ${getCursorStyle};
  width: 24px;
  height: 24px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, 10px);
  transition: 200ms transform;

  &:hover {
    transform: ${
      disabled
        ? "scale(1) translate(-2px, 10px)"
        : "scale(1.1) translate(-3px, 9px)"
    };
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: -10px;
  font-size: 14px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${bunnyButt}) no-repeat;
  height: 27px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 28px;
  z-index: 14;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}

    background-color: transparent;
    border: 0;
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textDisabled : "#CAE7F8"};
  height: 6px;
  position: absolute;
  top: 18px;
  width: 100%;
  border-radius: 100px;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.inputSecondary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 6px;
  position: absolute;
  top: 18px;
  border-radius: 100px;
`;
