import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;
const PriceDIV = styled.div`
  background-image: url("images/menu/price_background.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 5px;
  padding-left: 41.57px;
  width: 89.26px;
  height: 28.14px;
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink href="https://bscscan.com/address/0x1A8d7AC01d21991BF5249A3657C97b2B6d919222" target="_blank">
      <PriceDIV >
        <Text color="#FFFFFF" bold fontSize={'12px'}>{`$${cakePriceUsd.toFixed(2)}`}</Text>
      </PriceDIV>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
