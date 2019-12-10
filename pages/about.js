import React, { useState, useEffect } from "react";
import Layout from "../components/layouts";
import { Header, Hero, Container, Body, Row, Column } from "../styles/common";
import { ThemeProvider, base, invert, lightGradient } from "../styles/theme";
import { StyledAboutRow, StyledAboutBody } from "../components/about/styles";
import {
  EaseInBottom,
  EaseInLeft,
  EaseInRight
} from "../helpers/triggerAnimations";
import ScrollIntoView from "../components/render-props/scroll-into-view";
import { hero, ourStory, ourApproach } from "../content/about-page.json";

const About = props => {
  const [beginAnimation, triggerAnimationFunc] = useState(false);
  const [state, setAnimation] = useState(false);

  useEffect(() => {
    triggerAnimationFunc(true);
  }, []);

  return (
    <Layout navLight>
      <ThemeProvider theme={invert(base)}>
        <Hero>
          <Container>
            <Row>
              <EaseInBottom
                className="styled-about-hero"
                triggerEaseIn={beginAnimation}
              >
                <Header>{hero.header}</Header>
                <br />
                <StyledAboutBody color="white">
                  {hero.subheader}
                </StyledAboutBody>
              </EaseInBottom>
            </Row>
          </Container>
        </Hero>
      </ThemeProvider>
      <ThemeProvider theme={lightGradient(base)}>
        <Hero>
          <Container>
            <ScrollIntoView returnFunc={setAnimation}>
              <StyledAboutRow>
                <Column>
                  <EaseInLeft triggerEaseIn={state} target="about-us-our-story">
                    <Header>{ourStory.header}</Header>
                    <br />
                    <StyledAboutBody>{ourStory.body}</StyledAboutBody>
                  </EaseInLeft>
                </Column>
                <Column>
                  <EaseInRight
                    triggerEaseIn={state}
                    target="about-us-our-approach"
                  >
                    <Header>{ourApproach.header}</Header>
                    <br />
                    <StyledAboutBody>
                      {ourStory.body}
                      <br />
                      <br />
                      {ourApproach.secondaryBody}
                    </StyledAboutBody>
                  </EaseInRight>
                </Column>
              </StyledAboutRow>
            </ScrollIntoView>
          </Container>
        </Hero>
      </ThemeProvider>
    </Layout>
  );
};
export default About;
