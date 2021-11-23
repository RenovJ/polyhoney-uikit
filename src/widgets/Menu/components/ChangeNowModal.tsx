import React from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../hooks";
import { Modal } from "../../Modal";

interface Props {
  onDismiss?: () => void;
}
const StyledModal = styled(Modal)`
  border-radius : 15px;
  border: 2px solid #DDC140;
`
const StyledDiv = styled.div<{isMobile: boolean}>`
  border-radius : 15px;
  border : 2px solid #DDC140;
  fill : #272727;
  width : ${({ isMobile }) => (isMobile ? `360px` : `600px`)};
  height : 355px;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
`



const ChangeNowModal: React.FC<Props> = ({ onDismiss = () => null}) => 
{
  
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  return (
    <StyledModal title="Multi Chain Swap" onDismiss={onDismiss}>
       <StyledDiv id="iframe-widget-wrapper" isMobile={isMobile}>
        <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&from=bnbbsc&horizontal=false&lang=en-US&link_id=9f59642593272a&locales=true&logo=true&to=bear' style={{height: "560px", width: "100%", border: "none"}}></iframe>
        <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
        </StyledDiv>
    </StyledModal>
  );
}


export default ChangeNowModal;
