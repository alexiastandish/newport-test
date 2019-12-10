import React, { useState, useEffect } from "react";
import { ThemeProvider, base } from "../styles/theme";
import { centered } from "../styles/theme/_layout";
import { Container, Header, Subheader, Box } from "../styles/common";
import {
  StyledServicesHero,
  StyledServiceBoxes,
  StyledServiceBox
} from "../components/services/styles";
import { hero } from "../content/services-page.json";
import Layout from "../components/layouts";
import { withRouter } from "next/router";

import RevenueCycleManagement from "../components/services/revenue-cycle-management";
import CloudBasedServices from "../components/services/cloud-based-services";
import SolutionsIntegration from "../components/services/solutions-integration";
import PracticeAdvocates from "../components/services/practice-advocates";

import { EaseInBottom } from "../helpers/triggerAnimations";

import anime from "animejs";

const Services = props => {
  const [beginAnimation, triggerAnimationFunc] = useState(false);
  const setSection = section => {
    let target = document.getElementById(`scrolling-${section}`);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  beginAnimation &&
    anime({
      targets: ".ease-in-bottom",
      translateY: [100, 0],
      easing: "easeOutQuad",
      duration: 700,
      autoplay: false,
      loop: false,
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 600 })
    }).play();

  useEffect(() => {
    triggerAnimationFunc(true);
    if (props.router && props.router.query.name) {
      return scrollingFunction(props.router.query.name);
    }
  }, [beginAnimation, props.router && props.router.query.name]);

  const scrollingFunction = slug => {
    let target = document.getElementById(`scrolling-${slug}`);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // history.pushState(null, null, `/features#${section}`);
    }
  };

  return (
    <Layout>
      <ThemeProvider theme={base}>
        <StyledServicesHero layout={centered}>
          <Container headingContainer>
            <EaseInBottom
              triggerEaseIn={beginAnimation}
              className="services-heading"
            >
              <Header>{hero.header}</Header>
              <Subheader>{hero.subheader}</Subheader>
            </EaseInBottom>
            <StyledServiceBoxes>
              {hero.services.map(service => {
                return (
                  <StyledServiceBox
                    className="ease-in-bottom"
                    onClick={() => setSection(service.link)}
                    key={service.service}
                  >
                    <img src={service.icon} alt={service.service} />
                    <Subheader>{service.service}</Subheader>
                  </StyledServiceBox>
                );
              })}
            </StyledServiceBoxes>
          </Container>
        </StyledServicesHero>
      </ThemeProvider>

      <div id={`scrolling-${hero.services[0].link}`}>
        <RevenueCycleManagement />
      </div>
      <div id={`scrolling-${hero.services[1].link}`}>
        <CloudBasedServices />
      </div>
      <div id={`scrolling-${hero.services[2].link}`}>
        <SolutionsIntegration />
      </div>
      <div id={`scrolling-${hero.services[3].link}`}>
        <PracticeAdvocates />
      </div>
    </Layout>
  );
};

export default withRouter(Services);
