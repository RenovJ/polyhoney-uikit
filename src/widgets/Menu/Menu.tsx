import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import PartialMenuItems from "./components/PartialMenuItems";
import UserBlock from "./components/UserBlock";
import NetworkSelectModal from "./components/NetworkSelectModal";
import BeePrice from "./components/BeePrice";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon } from "./icons";
import { NavProps } from "./types";
import { useModal } from "../Modal";
import { MENU_HEIGHT } from "./config";
import MenuButton from "./components/MenuButton";
import SocialLinks from "./components/SocialLinks";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "PT Sans Narrow", sans-serif;
`;
const CenterWrapper = styled.div`
  width: 100%;
  max-width: 1220px;
`;
const StyledNav = styled.nav`
  left: 0px;
  padding: 0px 16px 0px 16px;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: top 0.2s;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT - 70}px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  z-index: 20;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    top: 0;
    position: absolute;
    height: ${MENU_HEIGHT}px;
    width: calc(100% - 32px);
    left: auto;
    justify-content: center;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean;}>`
  flex-grow: 1;
  margin-bottom: 46.4px;
  margin-top: ${MENU_HEIGHT - 60}px;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-top: ${MENU_HEIGHT}px;
    max-width: 1220px;
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const HoverImg = styled.img`
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
`;

const StyledLink = styled(Link)<{ margin?: number }>`
  margin-right: ${({ margin }) => margin? margin:6}px;
  margin-left: ${({ margin }) => margin? margin:0}px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 87px;
  height: 55.3px;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    width: 72.7px;
    height: 80px;
  }
`;

const RightMenuBlockWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.nav} {
    flex-direction: column;
  }
`;
const UserBlockWrapper = styled.div`
  margin-top: 7px;
  width: 90px;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-top: 0px;
  }
`;
const Footer = styled(Flex)`
  height: 46.4px;
  padding: 11.1px;
  justify-content: center;
  background-color: ${({ theme }) => theme.nav.background};
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  // profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const homeLink = links.find((link) => link.label === "Home");
  const href = homeLink?.href ?? "/";
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon isDark={isDark} />
    </>
  );
  const [onPresentNetworkSelectModal] = useModal(<NetworkSelectModal />);

  return (
    <Wrapper>
      <CenterWrapper>
        <StyledNav>
          <CenterWrapper>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              {isMobile ? (
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <MenuButton
                    aria-label="Toggle menu"
                    onClick={() =>
                      setIsPushed((prevState: boolean) => !prevState)
                    }
                    mr="12px"
                    mt="4px"
                  >
                    {isPushed ? (
                      <HamburgerCloseIcon width="30px" color="menuBackground" />
                    ) : (
                      <HamburgerIcon width="30px" color="menuBackground" />
                    )}
                  </MenuButton>
                  {isPushed &&
                    (isAbsoluteUrl ? (
                      <StyledLink
                        as="a"
                        href={href}
                        aria-label="Honeyfarm"
                        margin={1}
                        style={{ width: 75 }}
                      >
                        {innerLogo}
                      </StyledLink>
                    ) : (
                      <StyledLink
                        to={href}
                        aria-label="Honeyfarm"
                        margin={1}
                        style={{ width: 75 }}
                      >
                        {innerLogo}
                      </StyledLink>
                    ))}
                </Flex>
              ) : (
                <BeePrice cakePriceUsd={cakePriceUsd} />
              )}
              {isMobile || (
                <Flex
                  justifyContent={"space-around"}
                  width={"calc(100%/2 - 96px - 36.344px)"}
                  height={24}
                >
                  <PartialMenuItems links={links.slice(0, 4)} />
                </Flex>
              )}
              {(isPushed && isMobile) ||
                (isAbsoluteUrl ? (
                  <StyledLink as="a" href={href} aria-label="Honeyfarm" margin={isMobile ? undefined :40}>
                    {innerLogo}
                  </StyledLink>
                ) : (
                  <StyledLink to={href} aria-label="Honeyfarm" margin={isMobile ? undefined :40}>
                    {innerLogo}
                  </StyledLink>
                ))}
              {isMobile || (
                <Flex
                  justifyContent={"space-around"}
                  width={"calc(100%/2 - 96px - 36.344px)"}
                  height={24}
                >
                  <PartialMenuItems links={links.slice(4, 8)} />
                </Flex>
              )}

              <RightMenuBlockWrapper>
                {isPushed && isMobile && (
                  <HoverImg
                    width={42.24}
                    height={42.24}
                    src="images/menu/to_avalanche_m.svg"
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                      onPresentNetworkSelectModal();
                    }}
                  />
                )}
                <UserBlockWrapper>
                  <UserBlock account={account} login={login} logout={logout} />
                </UserBlockWrapper>
                <div>
                  {isMobile || (
                    <Flex
                      mr={24}
                      mt={6.25}
                      width={90}
                      height={30}
                      onClick={() => {
                        onPresentNetworkSelectModal();
                      }}
                    >
                      <HoverImg
                        width={90}
                        height={30}
                        src="images/menu/to_avalanche.png"
                      />
                    </Flex>
                  )}
                </div>
              </RightMenuBlockWrapper>
            </Flex>
          </CenterWrapper>
        </StyledNav>

        <BodyWrapper>
          {isMobile && (
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
            />
          )}
          <Inner isPushed={isPushed}>
            {isMobile && (
              <Flex justifyContent={"center"} mb={15}>
                <BeePrice cakePriceUsd={cakePriceUsd} />
              </Flex>
            )}
            {children}
          </Inner>
          <MobileOnlyOverlay
            show={isPushed}
            onClick={() => setIsPushed(false)}
            role="presentation"
          />
        </BodyWrapper>
      </CenterWrapper>
      {isMobile || (
        <Footer>
          <SocialLinks isMainFooter />
        </Footer>
      )}
    </Wrapper>
  );
};

export default Menu;
