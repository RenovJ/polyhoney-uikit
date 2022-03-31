import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const SocialLinks: React.FC = () => (
  <Flex flexWrap={"wrap"} ml={"10px"}>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = {
        width: "24px",
        color: "textMenu",
        style: { cursor: "pointer" },
      };
      const HoverIcon = styled(Icon)`
        transition: background-color 0.2s, opacity 0.2s;
        &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
          opacity: 0.65;
        }
      `;
      const mr = index < socials.length - 1 ? "6px" : 0;
      if (social.items) {
        return (
          <div
            key={social.label}
            style={{ flex: "1 1 45%", paddingLeft: "9px" }}
          >
            <Dropdown
              key={social.label}
              position="top"
              target={<HoverIcon {...iconProps} mr={mr} />}
            >
              {social.items.map((item) => (
                <Link
                  external
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  color="textMenu"
                >
                  {item.label}
                </Link>
              ))}
            </Dropdown>
          </div>
        );
      }
      return (
        <div key={social.label} style={{ flex: "1 1 45%", paddingLeft: "9px" }}>
          <Link
            external
            href={social.href}
            aria-label={social.label}
            mr={mr}
            pl={social.label == "Twitter" ? "2px" : "0px"}
          >
            <HoverIcon {...iconProps} />
          </Link>
        </div>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
