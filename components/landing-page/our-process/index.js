import React, { useState } from "react";
import { ThemeProvider, lightGradient, base } from "../../../styles/theme";
import {
  Header,
  Container,
  Row,
  ButtonLink,
  Subheader,
  Body
} from "../../../styles/common";
import { EaseInLeft, EaseInRight } from "../../../helpers/triggerAnimations";
import { ourProcess } from "../../../content/home-page.json";
import {
  StyledProcessHero,
  StyledCol,
  StyledContentCol,
  StyledProcessContainer
} from "./styles";
import ScrollIntoView from "../../render-props/scroll-into-view";

import Link from "next/link";

const OurProcess = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={lightGradient(base)}>
      <ScrollIntoView returnFunc={setAnimation}>
        <StyledProcessHero>
          <StyledProcessContainer>
            <Row>
              <StyledCol>
                <EaseInLeft triggerEaseIn={state} target="gears-left">
                  <img
                    src="/images/home/our-process-gears.png"
                    alt="our-process"
                  />
                </EaseInLeft>
              </StyledCol>
              <StyledContentCol>
                <EaseInRight
                  triggerEaseIn={state}
                  style={{ display: "flex" }}
                  target="no-suprises"
                >
                  <Header>{ourProcess.header}</Header>
                  <Subheader>{ourProcess.subheader}</Subheader>
                  <Body>{ourProcess.desc}</Body>
                  <br />

                  <Link href={ourProcess.button.link}>
                    <ButtonLink type="primary">
                      {ourProcess.button.text}
                    </ButtonLink>
                  </Link>
                </EaseInRight>
              </StyledContentCol>
            </Row>
          </StyledProcessContainer>
        </StyledProcessHero>
      </ScrollIntoView>
    </ThemeProvider>
  );
};
export default OurProcess;
