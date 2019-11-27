import React, { useState } from "react";
import { ThemeProvider, lightGradient, base } from "../../styles/theme";
import ScrollIntoView from "../render-props/scroll-into-view";
import {
  Header,
  Container,
  Row,
  Subheader,
  Column,
  Hero
} from "../../styles/common";
import { EaseInLeft, EaseInRight } from "../../helpers/triggerAnimations";
import ContactForm from "./contact-form";

const ContactSection = props => {
  const [state, setAnimation] = useState(false);
  return (
    <ThemeProvider theme={lightGradient(base)}>
      <ScrollIntoView returnFunc={setAnimation}>
        <Hero>
          <Container>
            <Row>
              <Column>
                <EaseInLeft triggerEaseIn={state} target="contact-us">
                  <Header>Contact Us</Header>
                  <Subheader>Send a message! Let's chat...</Subheader>
                </EaseInLeft>
              </Column>
              <Column>
                <EaseInRight triggerEaseIn={state} target="contact-form">
                  <ContactForm />
                </EaseInRight>
              </Column>
            </Row>
          </Container>
        </Hero>
      </ScrollIntoView>
    </ThemeProvider>
  );
};
export default ContactSection;
