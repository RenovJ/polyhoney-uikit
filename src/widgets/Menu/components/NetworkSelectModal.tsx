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
  border: 2px solid #DDC140;
`
const StyledDiv = styled.div<{isMobile: boolean}>`
  border-radius : 15px;
  border : 2px solid #DDC140;
  fill : #272727;
  width : ${({ isMobile }) => (isMobile ? `280px` : `181px`)};
  height : ${({ isMobile }) => (isMobile ? `280px` : `181px`)};
  display: flex;
  justify-content: center;
  vertical-align:
`
const FlexBox = styled.div<{isMobile: boolean}>`
  display: flex;
  justify-content : space-between;
  flex-direction : ${({ isMobile }) => (isMobile ? `column` : `row`)};
  width :  ${({ isMobile }) => (isMobile ? `280px` : `389px`)};
  ${({ isMobile }) => (isMobile && `height: 591px;`)}
  margin: 10px 22px 15px 22px;
`
const BSCImage = styled.img<{isMobile: boolean}>`
  margin-top:  ${({ isMobile }) => (isMobile ? `67px;` : `44px`)};
  width:${({ isMobile }) => (isMobile ? `143px`: `93px;`)};
  height:${({ isMobile }) => (isMobile ? `144px`: `94px;`)};
`
const AVALImage = styled.img<{isMobile: boolean}>`
  margin-top:  ${({ isMobile }) => (isMobile ? `67px;` : `44px`)};
  width:${({ isMobile }) => (isMobile ? `125px`: `81px;` )};
  height:${({ isMobile }) => (isMobile ? `144px`: `94px;`)};
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
