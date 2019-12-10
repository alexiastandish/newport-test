import React, { useState } from "react";
import { ThemeProvider, lightGradient, base, centered } from "../styles/theme";
import { Hero, Container, Header, Subheader, Body } from "../styles/common";
import Layout from "../components/layouts";
import {
  StyledNMEImg,
  StyledProcessContainer
} from "../components/process/styles";
import { hero, newportmedEffect } from "../content/process-page.json";
import ScrollIntoView from "../components/render-props/scroll-into-view";
import { EaseInBottom } from "../helpers/triggerAnimations";

const Process = props => {
  const [heroState, setHeroAnimation] = useState(false);
  const [chartState, setChartAnimation] = useState(false);
  return (
    <Layout>
      <ThemeProvider theme={lightGradient(base)}>
        <ScrollIntoView returnFunc={setHeroAnimation}>
          <Hero layout={centered}>
            <StyledProcessContainer>
              <EaseInBottom triggerEaseIn={heroState} target="our-process-hero">
                <Header>{hero.header}</Header>
                <br />
                <br />
                <Body>{hero.body}</Body>
              </EaseInBottom>
            </StyledProcessContainer>
          </Hero>
        </ScrollIntoView>
      </ThemeProvider>
      <ThemeProvider theme={base}>
        <ScrollIntoView returnFunc={setChartAnimation}>
          <Hero layout={centered}>
            <Container>
              <EaseInBottom
                triggerEaseIn={chartState}
                target="our-process-chart"
              >
                <Header>{newportmedEffect.header}</Header>
                <Subheader>{newportmedEffect.subheader}</Subheader>
                <StyledNMEImg
                  src="/images/process/newportmed-effect-process.jpg"
                  alt="newportmed-effect"
                />
              </EaseInBottom>
            </Container>
          </Hero>
        </ScrollIntoView>
      </ThemeProvider>
    </Layout>
  );
};
export default Process;
