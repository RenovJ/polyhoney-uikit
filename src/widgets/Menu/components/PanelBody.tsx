import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps, Svg } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import ChangeNowModal from "./ChangeNowModal";
import { useModal } from "../../Modal";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const [onPresentChangeNowModal] = useModal(<ChangeNowModal />);
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass
          ? entry.calloutClass
          : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex(
            (item) => item.href === location.pathname
          );
          const initialOpenState =
            entry.initialOpenState === true
              ? entry.initialOpenState
              : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some(
                (item) => item.href === location.pathname
              )}
            >
              {isPushed &&
                entry.items.map((item) => {
                  if (item.items) {
                    const InnerIcon = item.icon ? Icons[item.icon] : undefined;
                    const InnericonElement = InnerIcon ? (
                      <InnerIcon width="18px" mr="4px" ml="6px" />
                    ) : undefined;
                    return (
                      <Accordion
                        key={item.label}
                        isPushed={isPushed}
                        pushNav={pushNav}
                        icon={InnericonElement}
                        label={item.label}
                        status={item.status}
                        initialOpenState={initialOpenState}
                        className={calloutClass}
                        isActive={item.items.some(
                          (item) => item.href === location.pathname
                        )}
                      >
                        {isPushed &&
                          item.items.map((innerItem) => {
                            return (
                              <MenuEntry
                                key={innerItem.href}
                                secondary
                                isActive={innerItem.href === location.pathname}
                                onClick={handleClick}
                              >
                                <MenuLink
                                  href={innerItem.href}
                                  target={
                                    innerItem.target
                                      ? innerItem.target
                                      : "_self"
                                  }
                                >
                                  <LinkLabel
                                    isActive={
                                      innerItem.href === location.pathname
                                    }
                                  >
                                    {"　" + innerItem.label}
                                  </LinkLabel>
                                  {innerItem.status && (
                                    <LinkStatus
                                      color={innerItem.status.color}
                                      fontSize="12px"
                                    >
                                      {innerItem.status.text}
                                    </LinkStatus>
                                  )}
                                </MenuLink>
                              </MenuEntry>
                            );
                          })}
                      </Accordion>
                    );
                  }

                  return (
                    <MenuEntry
                      key={item.href}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                    >
                      {item.href === "changeNow" ? (
                        <MenuLink
                          href={"#"}
                          onClick={() => {
                            onPresentChangeNowModal();
                          }}
                        >
                          <LinkLabel isActive={item.href === location.pathname}>
                            {item.label}
                          </LinkLabel>
                          {item.status && (
                            <LinkStatus
                              color={item.status.color}
                              fontSize="14px"
                            >
                              {item.status.text}
                            </LinkStatus>
                          )}
                        </MenuLink>
                      ) : (
                        <MenuLink
                          href={item.href}
                          target={item.target ? item.target : "_self"}
                        >
                          <LinkLabel isActive={item.href === location.pathname}>
                            {item.label}
                          </LinkLabel>
                          {item.status && (
                            <LinkStatus
                              color={item.status.color}
                              fontSize="14px"
                            >
                              {item.status.text}
                            </LinkStatus>
                          )}
                        </MenuLink>
                      )}
                    </MenuEntry>
                  );
                })}
            </Accordion>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={entry.href === location.pathname}
            className={calloutClass}
          >
            <MenuLink
              href={entry.href}
              onClick={handleClick}
              target={entry.target ? entry.target : "_self"}
            >
              {iconElement}
              <LinkLabel isActive={entry.href === location.pathname}>
                {entry.label}
              </LinkLabel>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="14px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
