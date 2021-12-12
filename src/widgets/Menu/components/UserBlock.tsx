import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import styled from "styled-components";
interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomButton = styled(Button)`
  font-size: 24px;
  height: 50px;
  border-radius: 25px;
  ${({ theme }) => theme.mediaQueries.nav} {
    font-size: 12px;
    height: 30px;
    border-radius: 14px;
  }
`;

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <Wrapper>
      {account ? (
        <CustomButton
          width={"100%"}
          scale="sm"
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </CustomButton>
      ) : (
        <CustomButton
          width={"100%"}
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </CustomButton>
      )}
    </Wrapper>
  );
};

export default React.memo(
  UserBlock,
  (prevProps, nextProps) => prevProps.account === nextProps.account
);
