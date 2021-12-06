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
import { HamburgerIcon, HamburgerCloseIcon , LogoIcon } from "./icons";
import { NavProps } from "./types";
import { useModal } from "../Modal";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import MenuButton from "./components/MenuButton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: 'PT Sans Narrow', sans-serif;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
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
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
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
`
const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled(Link)`
  margin-right: 6px;
  display: flex;
  position: fixed;
  top: 46.52px;
  left: 50vw;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 72.7px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
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
  const href = homeLink?.href ?? "/"
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="desktop-icon" isDark={isDark} />
    </>
  );
  const [onPresentNetworkSelectModal] = useModal(<NetworkSelectModal/>);
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
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
      <StyledNav showMenu={showMenu}>
      <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed(false)} mr="12px" mt="4px">
        {isPushed ? (
          <HamburgerCloseIcon width="30px" color="menuBackground" />
        ) : (
          <HamburgerIcon width="30px" color="menuBackground" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Honeyfarm">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Honeyfarm">
          {innerLogo}
        </StyledLink>
      )}
        <Flex>
          <div>
            <Flex mr={isMobile ? 10 : 24}  width={isMobile ? 46: 109} height={46}  onClick={() => {onPresentNetworkSelectModal()}}>
                {isMobile?<HoverImg width={46} height={46} src="images/modal_bsc_bt.png" />:<HoverImg width={109} height={46} src="images/ic_bsc_modal_BT.png" />}
            </Flex>
          </div>
          <UserBlock account={account} login={login} logout={logout} />
          {/* profile && <Avatar profile={profile} /> */}
        </Flex>
      </StyledNav>
      <BodyWrapper>
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
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
