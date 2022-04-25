import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const StyledDropdown = styled.div`
  & svg {
    transition: background-color 0.2s, opacity 0.2s;
    &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }
  }
  [class*="DropdownContent"] {
    background: #343434;
    border-radius: 4px;
    padding: 10px 15px;
  }
`;
interface SocialLinksProps {
  isMainFooter?: boolean;
}
const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const SocialLinks: React.FC<SocialLinksProps> = ({ isMainFooter }) => (
  <Flex flexWrap={"wrap"} ml={"10px"}>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = {
        width: "24px",
        color: "textMenuHovered",
        style: { cursor: "pointer" },
      };

      const mr = isMainFooter ? "20px" : index < socials.length - 1 ? "6px" : 0;
      return (
        <StyledDropdown
          key={index.toString()}
          style={isMainFooter ? {} : { flex: "1 1 45%", paddingLeft: "9px" }}
        >
          {social.items ? (
            <Dropdown position="top" target={<Icon {...iconProps} mr={mr} />}>
              {social.items.map((item, socialItemIndex) => (
                <Link
                  external
                  key={socialItemIndex.toString() + 10}
                  href={item.href}
                  aria-label={item.label}
                  color="menuBackground"
                >
                  {item.label}
                </Link>
              ))}
            </Dropdown>
          ) : (
            <Link
              external
              href={social.href}
              aria-label={social.label}
              mr={mr}
              pl={social.label == "Twitter" ? "2px" : "0px"}
            >
              <Icon {...iconProps} />
            </Link>
          )}
        </StyledDropdown>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
