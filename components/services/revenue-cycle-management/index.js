import React, { useEffect, useState } from "react";
import {
  Hero,
  Header,
  Subheader,
  Body,
  Row,
  Column,
  Container
} from "../../../styles/common";
import { StyledRCMImg, StyledServiceHero } from "./styles";
import { ThemeProvider, leftAlign, base } from "../../../styles/theme";
import { colors } from "../../../styles/_variables";
import { StyledServiceHeadingColumn } from "../styles";
import { EaseInLeft, EaseInRight } from "../../../helpers/triggerAnimations";
import ScrollIntoView from "../../render-props/scroll-into-view";
import { revenueCycleManagement } from "../../../content/services-page.json";

const RevenueCycleManagement = props => {
  const [state, setAnimation] = useState(false);

  return (
    <ThemeProvider theme={base}>
      <StyledServiceHero layout={leftAlign}>
        <Container>
          <ScrollIntoView returnFunc={setAnimation}>
            <Row>
              <StyledServiceHeadingColumn flexColumn>
                <EaseInLeft
                  triggerEaseIn={state}
                  target="revenue-cycle-management-service"
                >
                  <Header>{revenueCycleManagement.header}</Header>
                  <StyledRCMImg
                    src="/images/services/rcm.png"
                    alt="revenue cycle management"
                    width="100%"
                  />
                </EaseInLeft>
              </StyledServiceHeadingColumn>
              <Column>
                <EaseInRight
                  triggerEaseIn={state}
                  target="revenue-cycle-management-service-body"
                >
                  <Body color={colors.gray}>{revenueCycleManagement.body}</Body>
                  <br />
                  <Body color={colors.gray}>
                    {revenueCycleManagement.secondaryBody}
                  </Body>
                </EaseInRight>
              </Column>
            </Row>
          </ScrollIntoView>
        </Container>
      </StyledServiceHero>
    </ThemeProvider>
  );
};
export default RevenueCycleManagement;
