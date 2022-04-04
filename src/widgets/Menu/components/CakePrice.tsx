import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://bscscan.com/address/0x6c66869B610b36f2a267af6e553a1c33D8d36b6D"
      target="_blank"
    >
      <PancakeRoundIcon width="40px" mr="8px" />
      <Text color="primary" bold fontSize={"20px"}>{`$${cakePriceUsd.toFixed(
        2
      )}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
