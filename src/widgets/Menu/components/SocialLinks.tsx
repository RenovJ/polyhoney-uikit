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
  <Flex justifyContent="space-between" ml="10px" width="100%">
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = {
        width: "28px",
        color: "secondary",
        style: {
          cursor: "pointer",
          transition: "background-color 0.2s, opacity 0.2s",
        },
      };
      const mr = index < socials.length - 1 ? "6px" : 0;
      if (social.items) {
        return (
          <div key={social.label} style={{ flex: "1 1 20%" }}>
            <Dropdown
              key={social.label}
              position="top"
              target={<Icon {...iconProps} mr={mr} />}
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
        <div key={social.label} style={{ flex: "1 1 20%" }}>
          <Link
            external
            href={social.href}
            aria-label={social.label}
            mr={mr}
            pl={social.label == "Twitter" ? "2px" : "0px"}
          >
            <Icon {...iconProps} />
          </Link>
        </div>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
