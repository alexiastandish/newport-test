import { Container, Hero, Box } from "../../styles/common";
import styled from "styled-components";
import { colors } from "../../styles/_variables";
import media from "../../styles/_media";

const StyledTestimonialsHero = styled(Hero)`
  min-height: 600px;
  height: 600px;

  ${media.sm`
  height: auto;
  padding-top: 50px;
  `}
`;
const StyledTestimonialsContainer = styled(Container)`
  padding-top: 30px;
  box-sizing: border-box;
`;

const StyledHeroTestimonial = styled(Box)`
  padding: 10px 30px 20px 30px;
  box-sizing: border-box;
  width: 100%;

  ${media.sm`
    margin-top: 50px;
  `}
`;

const StyledHeroTestimonialInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .hero-testimonial-info {
    p:nth-of-type(1) {
      text-transform: uppercase;
    }
    p:nth-of-type(2) {
      font-size: 12px;
    }
  }
`;

const StyledHeroTestimonialImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const StyledTestimonialBox = styled(Box)`
  box-sizing: border-box;
  font-family: Work Sans;
  padding: 20px;
  border: 1px solid transparent;
  margin: 0 auto;

  .person {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.red};
    letter-spacing: 1px;
    margin-top: 20px;
  }
  .position {
    font-size: 12px;
    font-weight: 500;
    margin-top: 0px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.red};
  }

  transition: 0.2s all linear;

  ${media.sm`
    width: 100%;
  `}
`;

const StyledTestimonialsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  flex-wrap: wrap;

  .styled-box-cols {
    width: 33.3%;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  ${media.xl`
    height: 1000px;
  `}
  ${media.lg`
    height: 1100px;
  `}
  ${media.md`
      height: 1550px;
  .styled-box-cols {
    width: 50%;
  }
  `}

  ${media.sm`
  height: auto;
  .styled-box-cols {
    width: 100%;
  }
  `}
`;

export {
  StyledTestimonialsContainer,
  StyledTestimonialsHero,
  StyledHeroTestimonial,
  StyledHeroTestimonialInfo,
  StyledHeroTestimonialImage,
  StyledTestimonialBox,
  StyledTestimonialsList
};
