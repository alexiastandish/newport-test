import React from "react";
import {
  StyledDesktopNav,
  StyledNewportMedLogo,
  StyledNavLinksWrapper
} from "./styles";
import Link from "next/link";
import { ATag } from "../../../styles/common";

const DesktopNav = ({ stickyNav, router, navLight }) => {
  return (
    <StyledDesktopNav stickyNav={stickyNav || navLight}>
      <StyledNewportMedLogo
        src="/images/logos/npm-logo.png"
        alt="newport-med"
        onClick={() => router.push("/").then(() => window.scrollTo(0, 0))}
      />
      <StyledNavLinksWrapper>
        <Link href="/about">
          <ATag>About Us</ATag>
        </Link>
        <Link href="/process">
          <ATag>Our Process</ATag>
        </Link>
        <Link href="/services">
          <ATag>Our Services</ATag>
        </Link>
        <Link href="/testimonials">
          <ATag>Testimonials</ATag>
        </Link>
      </StyledNavLinksWrapper>
    </StyledDesktopNav>
  );
};
export default DesktopNav;
