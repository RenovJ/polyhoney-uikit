import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../hooks";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const BusybeeLinkContainer = styled.div<{ isPushed: boolean }>`
  margin-left: ${({ isPushed }) => (isPushed ? "10px" : "0px")};
  margin-right: ${({ isPushed }) => (isPushed ? "10px" : "0px")};
  margin-bottom: 10px;
`;

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  border-right: 3px solid transparent;
  border-image: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 47.4%,
    #ffffff 100%
  );
  border-image-slice: 1;
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};
`;

const Banner = styled.div<{ isPushed: boolean }>`
  margin-left: ${({ isPushed }) => (isPushed ? `20px` : `0px`)};
  border-radius: 10px;
  transition: margin-left 0.2s;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
`;
const RoundedImage = styled.img`
  border-radius: 8px;
`;
const BusybeeImage = styled.img`
  border-radius: 22.85px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <BusybeeLinkContainer isPushed={isPushed}>
        <a href="https://busybee.honeyfarm.finance">
          <BusybeeImage height="36px" src="images/busybee_link2.png" />
        </a>
      </BusybeeLinkContainer>

      <PanelBody {...props} />
      {/*
      <a href={"https://rugdoc.io/project/honey-farm/"} target="_blank">
        <img width="100%" src="images/rugdoc.png" />
      </a>
      */}
      <Banner isPushed={isPushed}>
        <a
          href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-HoneyFarm-v1.0.pdf"
          target="_blank"
        >
          <RoundedImage src="images/audit.png" width="200" />
        </a>
      </Banner>
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
