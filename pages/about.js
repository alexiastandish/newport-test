import React, { useState, useEffect } from "react";
import Layout from "../components/layouts";
import { Header, Hero, Container, Body, Row, Column } from "../styles/common";
import { ThemeProvider, base, invert, lightGradient } from "../styles/theme";
import { StyledAboutRow } from "../components/about/styles";
import {
  EaseInBottom,
  EaseInLeft,
  EaseInRight
} from "../helpers/triggerAnimations";
import ScrollIntoView from "../components/render-props/scroll-into-view";

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
                <Header>
                  NewportMed is a specialty specific Revenue Cycle Management
                  (RCM) Company.
                </Header>
                <br />
                <Body color="white">
                  We offer our clients a unique, blended approach to running the
                  business of their practice(s). We have expertise in
                  Orthopedics, Neurosurgery, Pain Management, Oncology and
                  Gynecology. We have found that by focusing on the specialty
                  practice, we are able to navigate the nuances that are common
                  and unique to each specialty.
                </Body>
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
                <Column cols={2}>
                  <EaseInLeft triggerEaseIn={state} target="about-us-our-story">
                    <Header>Our Story.</Header>
                    <br />
                    <Body>
                      NewportMed was founded in 2004 with a focus on surgical
                      specialties. In 2016, we formed OmniMed Solutions, Pvt.
                      Ltd. in Hyderabad, India to give us a work force that can
                      scale so we can focus on specific areas of the non-patient
                      facing aspects of Healthcare that demand volume, data
                      driven processes and integrity. Instead of focusing on one
                      aspect of the practice, our partnership brings expertise
                      on multiple levels to ensure financial stability and
                      promote growth. Utilizing technology and process
                      efficiency as key resources, we are able to capture our
                      clients’ revenue while minimizing their staffing overhead
                      and other associated costs.
                    </Body>
                  </EaseInLeft>
                </Column>
                <Column cols={2}>
                  <EaseInRight
                    triggerEaseIn={state}
                    target="about-us-our-approach"
                  >
                    <Header>Our Approach.</Header>
                    <br />
                    <Body>
                      Our overall approach is simplifying the complicated. Our
                      clients will tell you that we focus on every aspect of the
                      RCM process from beginning to end. We help them maximize
                      their revenue goals and minimize their expenditures. We do
                      this by managing every part of our clients’ practices from
                      appointment scheduling, pre-surgical payment capture,
                      authorizations, benefit validation, coding, data analytics
                      and reporting, and proactive feedback, which we call a
                      “Value-Add.”
                      <br />
                      <br />
                      Together we fill a significant void by bringing
                      scalability, integrity and expertise to our marketplace.
                    </Body>
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
