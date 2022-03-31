import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({
  isActive,
  isSuccess,
  isWarning,
  theme,
}: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div<StyledCardProps>`
  border-radius: 32px;
  border: 3px solid transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.3) 100%
    ),
    linear-gradient(
      135deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 47.4%,
      #ffffff 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  backdrop-filter: blur(16px);
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) =>
    theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;
  ${space}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
