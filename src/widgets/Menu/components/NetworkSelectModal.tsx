import React from "react";
import styled from "styled-components";
import { Link } from "../../../components/Link";
import { useMatchBreakpoints } from "../../../hooks";
import { Modal } from "../../Modal";

interface Props {
  onDismiss?: () => void;
}
const StyledModal = styled(Modal)`
  border-radius : 15px;
  border: 2px solid #E84142;
`
const StyledDiv = styled.div<{isMobile: boolean}>`
  border-radius : 15px;
  border : 2px solid #E84142;
  fill : #272727;
  width : ${({ isMobile }) => (isMobile ? `224px` : `181px`)};
  height : ${({ isMobile }) => (isMobile ? `224px` : `181px`)};
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
`
const FlexBox = styled.div<{isMobile: boolean}>`
  display: flex;
  justify-content : space-between;
  flex-direction : ${({ isMobile }) => (isMobile ? `column` : `row`)};
  width :  ${({ isMobile }) => (isMobile ? `224px` : `389px`)};
  ${({ isMobile }) => (isMobile && `height: 473px;`)}
  margin: 10px 22px 15px 22px;
`
const BSCImage = styled.img<{isMobile: boolean}>`
  margin-top:  ${({ isMobile }) => (isMobile ? `54px;` : `44px`)};
  width:${({ isMobile }) => (isMobile ? `115px`: `93px;`)};
  height:${({ isMobile }) => (isMobile ? `116px`: `94px;`)};
`
const AVALImage = styled.img<{isMobile: boolean}>`
  margin-top:  ${({ isMobile }) => (isMobile ? `54px;` : `44px`)};
  width:${({ isMobile }) => (isMobile ? `100px`: `81px;` )};
  height:${({ isMobile }) => (isMobile ? `116px`: `94px;`)};
`
const NetworkSelectModal: React.FC<Props> = ({ onDismiss = () => null}) => 
{
  
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  return (
    <StyledModal title="Select a Network" onDismiss={onDismiss}>
      <FlexBox isMobile={isMobile}>
      <Link href="https://bee.honeyfarm.finance" external><StyledDiv isMobile={isMobile}>
        <div><BSCImage src="images/networkBSC.png" isMobile={isMobile}/></div></StyledDiv></Link>
        <Link href="https://avalanche.honeyfarm.finance/" external><StyledDiv isMobile={isMobile}>
        <div><AVALImage src="images/networkAval.png" isMobile={isMobile}/></div></StyledDiv></Link>
      </FlexBox>
    </StyledModal>
  );
}


export default NetworkSelectModal;
