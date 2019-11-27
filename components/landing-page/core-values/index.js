import React, { useState } from "react";
import { ThemeProvider, base, centered } from "../../../styles/theme";
import ScrollIntoView from "../../render-props/scroll-into-view";
import {
  Hero,
  Container,
  Row,
  Column,
  Header,
  Subheader,
  Body
} from "../../../styles/common";
import { EaseInBottom } from "../../../helpers/triggerAnimations";
import { coreValues } from "../../../content/home-page.json";
import {
  StyledValue,
  StyledValueBox,
  StyledCoreValues,
  StyledVerse
} from "./styles";

const CoreValues = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={base}>
      <ScrollIntoView returnFunc={setAnimation}>
        <Hero layout={centered}>
          <Container>
            <EaseInBottom triggerEaseIn={state} target="our-core-values">
              <Header>{coreValues.header}</Header>
              <Subheader
                style={{
                  marginBottom: 50,
                  maxWidth: 800,
                  margin: "10px auto"
                }}
              >
                {coreValues.subheader}
              </Subheader>
            </EaseInBottom>
            <EaseInBottom triggerEaseIn={state} target="core-values">
              <StyledCoreValues>
                {coreValues.values.map(value => {
                  return (
                    <StyledValueBox key={value.value}>
                      <StyledValue>
                        <img
                          src={value.icon}
                          alt={value.value}
                          style={{ width: "75px" }}
                        />
                        <Subheader style={{ marginBottom: 10 }}>
                          {value.value}
                        </Subheader>
                        <Body>{value.desc}</Body>
                        <StyledVerse>{value.verse}</StyledVerse>
                      </StyledValue>
                    </StyledValueBox>
                  );
                })}
              </StyledCoreValues>
            </EaseInBottom>
          </Container>
        </Hero>
      </ScrollIntoView>
    </ThemeProvider>
  );
};
export default CoreValues;
