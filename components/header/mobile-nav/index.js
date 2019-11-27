import React from "react";
import { StyledMobileNav, StyledMobileNewportMedLogo } from "./styles";
import HamburgerMenu from "./hamburger-menu";
import OpenMobileMenu from "./open-mobile-menu";

const MobileNav = ({ menuOpen, handleMenuToggle, stickyNav, router }) => {
  return (
    <StyledMobileNav menuOpen={menuOpen}>
      <StyledMobileNewportMedLogo
        src="/images/logos/npm-logo.png"
        alt="newport-med"
        onClick={() => router.push("/")}
      />
      <HamburgerMenu menuOpen={menuOpen} onClick={handleMenuToggle} />
      <OpenMobileMenu router={router} menuOpen={menuOpen} />
    </StyledMobileNav>
  );
};
export default MobileNav;
