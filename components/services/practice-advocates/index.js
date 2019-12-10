import React, { useState } from "react";
import { ThemeProvider, leftAlign } from "../../../styles/theme";
import {
  Hero,
  Header,
  Subheader,
  Body,
  Container,
  Row,
  Column
} from "../../../styles/common";
import { transparentToGradient, base } from "../../../styles/theme/_theme";
import { StyledServiceHeadingColumn } from "../styles";
import { practiceAdvocates } from "../../../content/services-page.json";
import { StyledInnovationImg } from "./styles";
import { colors } from "../../../styles/_variables";
import ScrollIntoView from "../../render-props/scroll-into-view";
import { EaseInLeft, EaseInRight } from "../../../helpers/triggerAnimations";

const PracticeAdvocates = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={transparentToGradient(base)}>
      <Hero layout={leftAlign}>
        <Container>
          <ScrollIntoView returnFunc={setAnimation}>
            <Row>
              <StyledServiceHeadingColumn flexColumn>
                <EaseInLeft
                  style={{ width: "100%" }}
                  triggerEaseIn={state}
                  target="practice-advocates-header"
                >
                  <Header>{practiceAdvocates.header}</Header>
                  <StyledInnovationImg
                    src="/images/services/innovation.png"
                    alt="innovation"
                    width="100%"
                  />
                </EaseInLeft>
              </StyledServiceHeadingColumn>
              <Column>
                <EaseInRight
                  triggerEaseIn={state}
                  target="practice-advocates-body"
                >
                  <Body color={colors.gray}>{practiceAdvocates.body}</Body>
                  <br />
                  <Body color={colors.gray}>
                    {practiceAdvocates.secondaryBody}
                  </Body>
                  <br />
                  <Body color={colors.gray}>
                    {practiceAdvocates.conclusiveBody}
                  </Body>
                </EaseInRight>
              </Column>
            </Row>
          </ScrollIntoView>
        </Container>
      </Hero>
    </ThemeProvider>
  );
};
export default PracticeAdvocates;
