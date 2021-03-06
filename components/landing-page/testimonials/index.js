import React, { useState, useEffect } from "react";
import { ThemeProvider, base, invert, centered } from "../../../styles/theme";
import { Header, Container, Button, Subheader } from "../../../styles/common";
import { StyledGradientHero } from "./styles";
import { Waypoint } from "react-waypoint";
import Carousel from "nuka-carousel";
import Review from "./review";
import {
  StyledReviewWrapper,
  StyledTestimonialsContainer,
  StyledMobileResponsiveCarousel
} from "./styles";
import { testimonials } from "../../../content/home-page.json";

const Testimonials = () => {
  const [currentSlide, updateCurrentSlide] = useState(0);

  const beforeSlide = current => {
    if (current === testimonials.reviews.length - 1) {
      return updateCurrentSlide(0);
    }
    return updateCurrentSlide(current + 1);
  };

  const [inView, setView] = useState(false);

  return (
    <ThemeProvider theme={invert(base)}>
      <StyledGradientHero layout={centered} inView={inView}>
        <Header
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 100,
            overflow: "hidden"
          }}
        >
          {testimonials.header}
        </Header>
        <Subheader
          style={{ width: "80%", textAlign: "center", overflow: "hidden" }}
        >
          {testimonials.subheader}
        </Subheader>

        <StyledTestimonialsContainer>
          <Carousel
            withoutControls={true}
            wrapAround={true}
            autoplay={true}
            dragging={false}
            beforeSlide={beforeSlide}
            cellSpacing={0}
            slidesToShow={3}
            slideWidth="600px"
            cellAlign="center"
            style={{ width: "100%" }}
          >
            {testimonials.reviews.map((review, idx) => {
              return (
                <StyledReviewWrapper
                  currentSlide={currentSlide === idx}
                  key={review.person}
                >
                  <Review
                    key={review.person}
                    person={review.person}
                    position={review.position}
                    image={review.image}
                    review={review.review}
                    currentSlide={currentSlide === idx}
                  />
                </StyledReviewWrapper>
              );
            })}
          </Carousel>
        </StyledTestimonialsContainer>

        <StyledMobileResponsiveCarousel>
          <Carousel
            withoutControls={true}
            wrapAround={true}
            autoplay={true}
            dragging={false}
            beforeSlide={beforeSlide}
            cellSpacing={0}
            slidesToShow={1}
            cellAlign="center"
          >
            {testimonials.reviews.map((review, idx) => {
              return (
                <StyledReviewWrapper
                  currentSlide={currentSlide === idx}
                  key={review.person}
                >
                  <Review
                    key={review.person}
                    headshot={review.headshot}
                    person={review.person}
                    position={review.position}
                    image={review.image}
                    review={review.review}
                    currentSlide={currentSlide === idx}
                  />
                </StyledReviewWrapper>
              );
            })}
          </Carousel>
        </StyledMobileResponsiveCarousel>
      </StyledGradientHero>
    </ThemeProvider>
  );
};
export default Testimonials;

Testimonials.defaultProps = {
  reviews: [
    {
      review:
        "NewportMed’s passion for healthcare and attention to detail cannot be overestimated. We are very pleased with our working relationship and continue to use them to improve our efficiencies and revenue cycle.",
      person: "James T. Caillouette",
      position: "M.D. of Newport Orthopedic Institute in Newport Beach, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "NewportMed has done a terrific job and we are very pleased with their collaboration. Their education services and custom charge ticket development has had a direct impact on our bottom line.",
      person: "Cara M. Waller",
      position: "Newport Orthopedic Institute in Newport Beach, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "With your help, we made a smooth transition to electronic medical records (EMR) and achieved our goal of satisfying the criteria for Phase I of Meaningful Use for 100% of our physicians.",
      person: "Michael J. Fitzpatrick",
      position:
        "M.D., President of South Orange County Orthopedics in Mission Viejo, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "We made the change to Newport Medical Services back in February 2018. Since we have made the change, our monthly revenue has continued to increase! We are averaging almost 35-40% more than in previous years under our old system.",
      person: "Ian Corland",
      position: "Administrator of Expert Spine Care in Nashville, TN",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "We have been working with Newport Medical Solutions for nearly 8 years now. NMS has repeatedly demonstrated professionalism and attention to detail on every single claim as well as the willingness to educate and work with our entire team.",
      person: "Ting Chi",
      position:
        "M.D. of Orange County Hand Surgery Specialists in Fountain Valley, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "I have been extremely happy using NewportMed as our billing company. In all my years of experience, I have never been as satisfied as I am with them.",
      person: "Michael Gillman",
      position: "M.D. of Restore Orthopedic and Spine Center in Orange, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "NewportMed’s services are second-to-none. Your partnership with my practice has also enabled me to focus more time on surgeries and services I specialize in.",
      person: "Christopher Duma",
      position:
        "M.D. of Brain &amp; Spine Surgeons of Orange County in Newport Beach, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "I’ve been extremely impressed with your knowledge of my specialty and expertise in the coding nuances. In addition, your understanding and direct involvement in credentialing and proper dictation has been invaluable.",
      person: "Richard Kim",
      position:
        "M.D., M.S. of DISC Sports and Spine Center in Newport Beach, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    },
    {
      review:
        "The meetings to review my coding, my dictation and carrier reimbursements have been essential to my understanding of what specific areas of surgery generate revenue for my practice.",
      person: "William Dobkin",
      position: "M.D. of William Dobkin, MD, Inc. in Newport Beach, CA",
      image:
        "https://en.bcdn.biz/Images/2014/2/20/2d572872-a8da-40b3-9dcc-378200fcaf71.jpg"
    }
  ]
};
