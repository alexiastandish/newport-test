import React from "react";
import { ThemeProvider, base, invert } from "../../styles/theme";
import { Body, Row, Column } from "../../styles/common";
import {
  StyledFooterWrapper,
  StyledFooterContainer,
  StyledFooterLogo,
  StyledLocationHeader,
  StyledFooterColumnLeft,
  StyledFooterColumnRight
} from "./styles";

const Footer = props => {
  return (
    <ThemeProvider theme={invert(base)}>
      <StyledFooterWrapper>
        <StyledFooterContainer>
          <Row>
            <StyledFooterColumnLeft>
              <StyledFooterLogo
                src="/images/newportmed-logos/b+w-logo.svg"
                alt="newportmed"
              />
              <Body color="white">(800) 865-2490</Body>
              <Body color="white">Josh@newportmed.com</Body>
            </StyledFooterColumnLeft>
            <StyledFooterColumnRight>
              <Row>
                <Column>
                  <StyledLocationHeader color="white">
                    California
                  </StyledLocationHeader>
                  <Body color="white">
                    NewportMed
                    <br />
                    625 The City Drive, Suite 200
                    <br />
                    Orange, CA 92646
                  </Body>
                </Column>

                <Column>
                  <StyledLocationHeader color="white">
                    Texas
                  </StyledLocationHeader>
                  <Body color="white">
                    NewportMed
                    <br />
                    6735 Salt Cedar Way, Suite 120
                    <br />
                    Frisco, Tx 75034
                  </Body>
                </Column>
              </Row>
            </StyledFooterColumnRight>
          </Row>
        </StyledFooterContainer>
      </StyledFooterWrapper>
    </ThemeProvider>
  );
};
export default Footer;
