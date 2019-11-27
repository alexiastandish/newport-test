import React from "react";
import {
  StyledOpenMobileMenu,
  StyledMobileLinkList,
  StyledMobileLink
} from "./styles";
import Link from "next/link";

const OpenMobileMenu = ({ menuOpen, handleMenuToggle, ...props }) => {
  const navLinks = [
    {
      slug: "/about",
      link: "About Us"
    },
    {
      slug: "/process",
      link: "Our Process"
    },
    {
      slug: "/services",
      link: "Our Services"
    },
    {
      slug: "/testimonials",
      link: "Testimonials"
    }
  ];

  return (
    <StyledOpenMobileMenu
      menuOpen={menuOpen}
      className={menuOpen ? "open" : "closed"}
    >
      <StyledMobileLinkList>
        {navLinks.map((item, index) => {
          return (
            <StyledMobileLink key={item.link} {...props}>
              <Link href={item.slug}>
                <a>{item.link}</a>
              </Link>
            </StyledMobileLink>
          );
        })}
      </StyledMobileLinkList>
    </StyledOpenMobileMenu>
  );
};
export default OpenMobileMenu;
