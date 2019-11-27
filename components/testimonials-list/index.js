import React, { useState } from "react";
import { Body, Hero } from "../../styles/common";
import { ThemeProvider } from "../../styles/theme";
import {
  StyledTestimonialsContainer,
  StyledTestimonialBox,
  StyledTestimonialsList
} from "./styles";
import ScrollIntoView from "../render-props/scroll-into-view";
import { EaseInBottom } from "../../helpers/triggerAnimations";

const TestimonialsList = ({ setSlide, testimonials }) => {
  const [easeUpBoxesAnimation, easeUpBoxesAnimationFunc] = useState(false);
  return (
    <ThemeProvider>
      <Hero>
        <StyledTestimonialsContainer>
          <ScrollIntoView returnFunc={easeUpBoxesAnimationFunc}>
            <StyledTestimonialsList>
              {testimonials.map((testimonial, index) => {
                return (
                  <EaseInBottom
                    triggerEaseIn={easeUpBoxesAnimation}
                    key={testimonial.person}
                    className="styled-box-cols"
                  >
                    <StyledTestimonialBox
                      columns={1}
                      onClick={() => setSlide(index)}
                    >
                      <Body>"{testimonial.review}"</Body>
                      <Body className="person">{testimonial.person}</Body>
                      <Body className="position">{testimonial.person}</Body>
                    </StyledTestimonialBox>
                  </EaseInBottom>
                );
              })}
            </StyledTestimonialsList>
          </ScrollIntoView>
        </StyledTestimonialsContainer>
      </Hero>
    </ThemeProvider>
  );
};
export default TestimonialsList;
