import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../../components/Dropdown";
import MenuLink from "./MenuLink";
import { MenuEntry } from "../types";
import Text from "../../../components/Text/Text";
import ChangeNowModal from "./ChangeNowModal";
import { useModal } from "../../Modal";

interface PartialMenuInterface {
  links: MenuEntry[];
}

const PartialMenuItems: React.FC<PartialMenuInterface> = ({ links }) => {
  const [onPresentChangeNowModal] = useModal(<ChangeNowModal />);
  return (
    <>
      {links.map((link, i) =>
        link.items ? (
          <Dropdown
            key={link.label}
            target={
              <MenuLink key={link.label} href={"#"} aria-label={link.label}>
                <Text
                  color="#FFFFFF"
                  fontSize={"20px"}
                  fontWeight={"700"}
                  fontFamily={"'Caramel Sweets', sans-serif"}
                >
                  {link.label + "  "}
                  <span color="#FFFFFF" style={{ fontSize: "8px" }}>
                    ▼
                  </span>
                </Text>
              </MenuLink>
            }
          >
            {link.items
              .filter((innerLink) => innerLink.label !== "Layered Farming")
              .map((innerLink) => (
                <MenuLink
                  key={innerLink.label}
                  href={innerLink.href === "changeNow" ? "#" : innerLink.href}
                  aria-label={innerLink.label}
                  target={innerLink.target ? innerLink.target : "_self"}
                  onClick={
                    innerLink.href === "changeNow"
                      ? () => {
                          onPresentChangeNowModal();
                        }
                      : undefined
                  }
                >
                  <Text
                    mb={9}
                    color="#FFFFFF"
                    fontSize={"16px"}
                    fontWeight={"700"}
                    fontFamily={"'Caramel Sweets', sans-serif"}
                  >
                    {innerLink.label}
                  </Text>
                </MenuLink>
              ))}
          </Dropdown>
        ) : (
          <MenuLink
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={link.target ? link.target : "_self"}
          >
            <Text
              color="#FFFFFF"
              fontSize={"20px"}
              fontWeight={"700"}
              fontFamily={"'Caramel Sweets', sans-serif"}
            >
              {link.label}
            </Text>
          </MenuLink>
        )
      )}
    </>
  );
};

export default PartialMenuItems;
