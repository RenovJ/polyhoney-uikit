import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import NetworkSelectModal from "./components/NetworkSelectModal";
import CakePrice from "./components/CakePrice";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon } from "./icons";
import { NavProps } from "./types";
import { useModal } from "../Modal";
import {
  MENU_HEIGHT,
} from "./config";
import MenuButton from "./components/MenuButton";

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
const StyledNav = styled.nav<{ showMenu: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
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

const StyledLink = styled(Link)`
  margin-right: 6px;
  display: flex;
  position: fixed;
  top: 46.52px;
  align-items: center;
  .mobile-icon {
    left: calc(50%-37.5px);
    width: 75px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    left: calc(50%-36.35px);
    width: 72.7px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
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
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const homeLink = links.find((link) => link.label === "Home");
  const href = homeLink?.href ?? "/";
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="desktop-icon" isDark={isDark} />
      <LogoIcon className="mobile-icon" isDark={isDark} />
    </>
  );
  const [onPresentNetworkSelectModal] = useModal(<NetworkSelectModal />);
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage =
        window.document.body.clientHeight ===
        currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  return (
    <Wrapper>
      <CenterWrapper>
        <StyledNav showMenu={showMenu}>
          <CenterWrapper>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
            {isMobile && (
              <MenuButton
                aria-label="Toggle menu"
                onClick={() => setIsPushed(false)}
                mr="12px"
                mt="4px"
              >
                {isPushed ? (
                  <HamburgerCloseIcon width="30px" color="menuBackground" />
                ) : (
                  <HamburgerIcon width="30px" color="menuBackground" />
                )}
              </MenuButton>
            )}
            <CakePrice cakePriceUsd={cakePriceUsd} />
            {isAbsoluteUrl ? (
              <StyledLink as="a" href={href} aria-label="Honeyfarm">
                {innerLogo}
              </StyledLink>
            ) : (
              <StyledLink to={href} aria-label="Honeyfarm">
                {innerLogo}
              </StyledLink>
            )}
            <Flex flexDirection={"column"} height={62.53} width={89.26}>
              <UserBlock account={account} login={login} logout={logout} />
              <div>
                <Flex
                  mr={isMobile ? 10 : 24}
                  mt={6.25}
                  width={isMobile ? 46 : 89.26}
                  height={28.14}
                  onClick={() => {
                    onPresentNetworkSelectModal();
                  }}
                >
                  {isMobile ? (
                    <HoverImg
                      width={46}
                      height={46}
                      src="images/menu/to_avalanche.png"
                    />
                  ) : (
                    <HoverImg
                      width={89.26}
                      height={28.14}
                      src="images/menu/to_avalanche.png"
                    />
                  )}
                </Flex>
              </div>
            </Flex>
            </Flex>
           
          </CenterWrapper>
        </StyledNav>

        <BodyWrapper>
          {isMobile && (
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
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
          <Inner isPushed={isPushed} showMenu={showMenu}>
            {children}
          </Inner>
          <MobileOnlyOverlay
            show={isPushed}
            onClick={() => setIsPushed(false)}
            role="presentation"
          />
        </BodyWrapper>
      </CenterWrapper>
    </Wrapper>
  );
};

export default Menu;
