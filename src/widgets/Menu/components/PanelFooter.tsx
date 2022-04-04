import React from "react";
import styled from "styled-components";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import SocialLinks from "./SocialLinks";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
`;

const SocialEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  padding: 0 16px;
  & svg:hover {
    opacity: 0.65;
  }
`;

const PanelFooter: React.FC<Props> = ({ cakePriceUsd }) => {
  return (
    <Container>
      <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
