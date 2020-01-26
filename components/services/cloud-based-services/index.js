import React, { useState, useEffect } from "react";
import { ThemeProvider, centered } from "../../../styles/theme";
import { Hero, Container, Header, Body, Row } from "../../../styles/common";
import { transparentToGradient, base } from "../../../styles/theme/_theme";
import { colors } from "../../../styles/_variables";
import { cloudBasedServices } from "../../../content/services-page.json";
import {
  StyledCloudBasedServicesColumn,
  StyledCloudBasedServicesBody
} from "./styles";
import { StyledServiceTagSection, StyledServiceTagItem } from "../styles";
import ScrollIntoView from "../../render-props/scroll-into-view";
import { EaseInBottom } from "../../../helpers/triggerAnimations";
import anime from "animejs";

const CloudBasedServices = props => {
  const [state, setAnimation] = useState(false);

  return (
    <ThemeProvider theme={transparentToGradient(base)}>
      <Hero layout={centered}>
        <Container>
          <ScrollIntoView returnFunc={setAnimation}>
            <Row>
              <StyledCloudBasedServicesColumn>
                <EaseInBottom
                  triggerEaseIn={state}
                  target="cloud-based-services-heading"
                >
                  <Header>{cloudBasedServices.header}</Header>
                  <img
                    src="/images/services/cloud-based.png"
                    alt="cloud based services"
                    width="50%"
                  />

                  <br />
                </EaseInBottom>
                <StyledServiceTagSection>
                  <EaseInBottom
                    className="cloud-based-services-tags"
                    triggerEaseIn={state}
                    target="cloud-based-services-individuals"
                  >
                    {cloudBasedServices.itOverviewItems.map(item => {
                      return (
                        <StyledServiceTagItem key={item}>
                          {item}
                        </StyledServiceTagItem>
                      );
                    })}
                  </EaseInBottom>
                </StyledServiceTagSection>
              </StyledCloudBasedServicesColumn>
              <StyledCloudBasedServicesBody>
                <EaseInBottom
                  triggerEaseIn={state}
                  target="cloud-based-services-body-section"
                >
                  <Body color={colors.gray}>{cloudBasedServices.body}</Body>
                </EaseInBottom>
              </StyledCloudBasedServicesBody>
            </Row>
          </ScrollIntoView>
        </Container>
      </Hero>
    </ThemeProvider>
  );
};
export default CloudBasedServices;
