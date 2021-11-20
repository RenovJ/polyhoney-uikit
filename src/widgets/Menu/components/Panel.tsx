import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";
import { useMatchBreakpoints } from "../../../hooks";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const BusybeeLinkContainer = styled.div<{ isPushed: boolean }>`
  margin-left: ${({ isPushed }) => (isPushed ? "10px" : "0px" )};
  margin-Right: ${({ isPushed }) => (isPushed ? "10px" : "0px" )};
  margin-bottom: 10px;
  transition: margin 0.2s;
`

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
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Banner = styled.div<{ isPushed: boolean }>`
  margin-left: ${({ isPushed }) => (isPushed ? `20px` : `0px`)};;
  border-radius: 10px;
  transition: margin-left 0.2s; 
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
`
const RoundedImage = styled.img`
  border-radius: 8px;
`
const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
          
      {/*
      <BusybeeLinkContainer isPushed={isPushed}>
        <a href="https://busybee.honeyfarm.finance">
            <img width="200px" src="images/busybee_link.png" />
        </a>
        
        { isMobile && otherChainLinks }
        
      </BusybeeLinkContainer>
      */}
      <PanelBody {...props} />
      {/*
      <a href={"https://rugdoc.io/project/honey-farm/"} target="_blank">
        <img width="100%" src="images/rugdoc.png" />
      </a>
      */}
      <Banner isPushed={isPushed}>
        <a href="https://jagosafer.io/honey-bee" target="_blank"><img src="images/banner/kycflag.svg" width="200"/></a>
      </Banner>
      <Banner isPushed={isPushed}>
        <a href="https://avax.farmscan.io/address/0x757490104fd4c80195d3c56bee4dc7b1279ccc51" target="_blank"><img src="images/farmscan.png" width="200"/></a>
      </Banner>
      <Banner isPushed={isPushed}>
        <a href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-HoneyFarm-v1.0.1.pdf" target="_blank"><RoundedImage src="images/audit.png" width="200"/></a>
      </Banner>
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
