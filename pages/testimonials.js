import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider, leftAlign } from "../styles/theme";
import {
  Hero,
  Container,
  Row,
  Column,
  Subheader,
  Header,
  Body,
  StyledBlockQuote
} from "../styles/common";
import Layout from "../components/layouts";
import TestimonialsList from "../components/testimonials-list";
import { useInterval } from "../components/helpers/useInterval";
import { hero, testimonials } from "../content/testimonials-page.json";
import {
  StyledTestimonialsHero,
  StyledHeroTestimonial,
  StyledHeroTestimonialInfo,
  StyledHeroTestimonialImage
} from "../components/testimonials-list/styles";
import { EaseInLeft, EaseInRight } from "../helpers/triggerAnimations";

const Testimonials = props => {
  const [slideIdx, setSlide] = useState(0);
  const [beginAnimation, triggerAnimationFunc] = useState(false);

  useInterval(() => {
    if (slideIdx === testimonials.length - 1) {
      setSlide(0);
    } else {
      setSlide(slideIdx + 1);
    }
  }, 10000);

  useEffect(() => {
    triggerAnimationFunc(true);
  }, []);

  return (
    <Layout>
      <ThemeProvider>
        <StyledTestimonialsHero layout={leftAlign}>
          <Container style={{ paddingBottom: 0 }}>
            <Row>
              <Column>
                <EaseInLeft
                  style={{ display: "flex" }}
                  target="testimonials-hero-left"
                  triggerEaseIn={true}
                >
                  <Header>{hero.header}</Header>
                  <Subheader style={{ maxWidth: "80%" }}>
                    {hero.subheader}
                  </Subheader>
                </EaseInLeft>
              </Column>
              <Column>
                <EaseInRight
                  style={{ display: "flex" }}
                  target="testimonials-hero-right"
                  triggerEaseIn={true}
                >
                  <StyledHeroTestimonial columns={1}>
                    <StyledBlockQuote
                      style={{ textAlign: "left", marginLeft: "0px" }}
                    >
                      &#8220;
                    </StyledBlockQuote>
                    <Subheader style={{ marginTop: 5, marginBottom: 5 }}>
                      {testimonials[slideIdx].review}
                    </Subheader>
                    <StyledBlockQuote style={{ textAlign: "right" }}>
                      &#8221;
                    </StyledBlockQuote>
                    <StyledHeroTestimonialInfo>
                      <StyledHeroTestimonialImage
                        src={testimonials[slideIdx].image}
                        alt={testimonials[slideIdx].person}
                      />
                      <div className="hero-testimonial-info">
                        <Body>{testimonials[slideIdx].person}</Body>
                        <Body>{testimonials[slideIdx].position}</Body>
                      </div>
                    </StyledHeroTestimonialInfo>
                  </StyledHeroTestimonial>
                </EaseInRight>
              </Column>
            </Row>
          </Container>
        </StyledTestimonialsHero>
      </ThemeProvider>
      <TestimonialsList testimonials={testimonials} setSlide={setSlide} />
    </Layout>
  );
};
export default Testimonials;
