import React, { useState } from "react";
import { ThemeProvider, base } from "../../../styles/theme";
import {
  Hero,
  Container,
  Column,
  Header,
  Subheader,
  Body,
  Row
} from "../../../styles/common";
import { colors } from "../../../styles/_variables";
import { StyledIntegrationsImg } from "./styles";
import {
  StyledServiceHeadingColumn,
  StyledServiceTagItem,
  StyledServiceTagSection
} from "../styles";
import { solutionsIntegration } from "../../../content/services-page.json";
import ScrollIntoView from "../../render-props/scroll-into-view";
import { EaseInLeft, EaseInRight } from "../../../helpers/triggerAnimations";

const SolutionsIntegration = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={base}>
      <Hero>
        <Container>
          <ScrollIntoView returnFunc={setAnimation}>
            <Row>
              <StyledServiceHeadingColumn flexColumn>
                <EaseInLeft
                  style={{ width: "100%" }}
                  triggerEaseIn={state}
                  target="solutions-integration-header-section"
                >
                  <Header>{solutionsIntegration.header}</Header>
                  <StyledIntegrationsImg
                    src="/images/services/integration.png"
                    alt="revenue cycle management"
                    width="100%"
                  />
                </EaseInLeft>
              </StyledServiceHeadingColumn>
              <Column>
                <EaseInRight
                  triggerEaseIn={state}
                  target="solutions-integration-body-section"
                >
                  <Body color={colors.gray}>{solutionsIntegration.body}</Body>
                  <br />
                  <Body color={colors.gray}>
                    {solutionsIntegration.secondaryBody}
                  </Body>
                  <br />
                  <br />
                </EaseInRight>
                <StyledServiceTagSection leftAlign>
                  <EaseInRight
                    triggerEaseIn={state}
                    target="solutions-integration-tags"
                  >
                    {solutionsIntegration.otherSolutions.map(solution => {
                      return (
                        <StyledServiceTagItem key={solution}>
                          {solution}
                        </StyledServiceTagItem>
                      );
                    })}
                  </EaseInRight>
                </StyledServiceTagSection>
              </Column>
            </Row>
          </ScrollIntoView>
        </Container>
      </Hero>
    </ThemeProvider>
  );
};
export default SolutionsIntegration;
