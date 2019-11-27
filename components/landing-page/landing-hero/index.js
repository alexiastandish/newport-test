import React, { useState, useEffect } from "react";
import { ThemeProvider, base } from "../../../styles/theme";
import { Header, Row, ButtonLink, Subheader } from "../../../styles/common";
import { ServiceCircle } from "./service-circle";
import {
  StyledServiceCircleWrapper,
  StyledLandingPageHero,
  StyledHeroContentCol,
  StyledHeroContainer
} from "./styles";
import { EaseInLeft } from "../../../helpers/triggerAnimations";
import Link from "next/link";
import Services from "../landing-hero/services";
import { hero } from "../../../content/home-page.json";

const LandingHero = props => {
  const [beginAnimation, triggerAnimationFunc] = useState(false);

  useEffect(() => {
    triggerAnimationFunc(true);
  }, []);

  return (
    <ThemeProvider theme={base}>
      <StyledLandingPageHero>
        <StyledHeroContainer>
          <Row>
            <StyledHeroContentCol>
              <EaseInLeft
                style={{ display: "flex" }}
                target="header-left"
                triggerEaseIn={true}
              >
                <Header>{hero.header}</Header>
                <Subheader>{hero.subheader}</Subheader>
                <Link href={hero.button.link}>
                  <ButtonLink type="primary">{hero.button.text}</ButtonLink>
                </Link>
              </EaseInLeft>
            </StyledHeroContentCol>
            <StyledServiceCircleWrapper beginAnimation={beginAnimation}>
              <ServiceCircle />
            </StyledServiceCircleWrapper>
          </Row>
        </StyledHeroContainer>
      </StyledLandingPageHero>
      <Services />
    </ThemeProvider>
  );
};
export default LandingHero;
