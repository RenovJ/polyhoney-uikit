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

const BusybeeLinkContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
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

const Banner = styled.div`
  margin-left: 20px;
  border-radius: 10px;
`

const OtherChainLinkContainer = styled.div`
  margin: 0 auto 10px auto;
  text-align: center;
`

const ChainLinkIcon = styled.span`
  margin: 0 4px 0 4px;
`

const otherChainLinks = (
  <OtherChainLinkContainer>
    <ChainLinkIcon>
      <a href="https://bee.honeyfarm.finance">
        <img width={30} height={30} src="images/ic_bsc_dark.png" />
      </a>
    </ChainLinkIcon>
    <ChainLinkIcon>
      <a href="https://avalanche.honeyfarm.finance">
        <img width={36} height={36} src="images/ic_avalanche.png" />
      </a>
    </ChainLinkIcon>
  </OtherChainLinkContainer>
)

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
          
      <BusybeeLinkContainer>
        { isMobile && otherChainLinks }
        <a href="https://busybee.honeyfarm.finance">
            <img height="36px" src="images/busybee_link.png" />
        </a>
      </BusybeeLinkContainer>
      
      <PanelBody {...props} />
      {/*
      <a href={"https://rugdoc.io/project/honey-farm/"} target="_blank">
        <img width="100%" src="images/rugdoc.png" />
      </a>
      */}
      <Banner>
        <a href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-HoneyFarm-v1.0.pdf" target="_blank"><img src="images/audit.png" width="200"/></a>
      </Banner>
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
