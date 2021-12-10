import React from "react";
import styled from "styled-components";
import { Dropdown } from "../../../components/Dropdown";
import MenuLink from "./MenuLink";
import { MenuEntry } from "../types";
import Text from "../../../components/Text/Text";
interface PartialMenuInterface {
  links: MenuEntry[]
  isMobile: boolean;
}

const PartialMenuItems: React.FC<PartialMenuInterface> = ({ isMobile, links }) => {
  return (<>
    {isMobile || links.map((link) => (
      link.items ? <Dropdown target={
        <MenuLink key={link.label} href={"#"} aria-label={link.label}>
          <Text color="#FFFFFF" fontSize={'16px'} fontWeight={"700"}>{link.label + "  "}<span color="#FFFFFF" style={{ fontSize: "8px" }} >▼</span></Text>
        </MenuLink>
      }>
        {link.items.filter((innerLink) => innerLink.label !== "Layered Farming").map((innerLink) => (
          <MenuLink key={innerLink.label} href={innerLink.href} aria-label={innerLink.label}>
            <Text mb={9} color="#FFFFFF" fontSize={'14px'} fontWeight={"700"}>{innerLink.label} </Text>
          </MenuLink>

        ))}
      </Dropdown>
        : <MenuLink key={link.label} href={link.href} aria-label={link.label}>
          <Text color="#FFFFFF" fontSize={'16px'} fontWeight={"700"}>{link.label} </Text>
        </MenuLink>
    )
    )}
  </>
  )

};

export default PartialMenuItems;
