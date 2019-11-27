import styled from "styled-components";
import { Hero, Container, Subheader } from "../../../styles/common";
import media from "../../../styles/_media";

const StyledGradientHero = styled(Hero)`
  // background-size: ${props => (props.inView ? `100% 400%` : `400% 400%`)};
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledReviewWrapper = styled.div`
  height: 325px;
  ${props => props.currentSlide && "height: 375px"};
  ${props => !props.currentSlide && "margin-top: 25px"};
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;

  ${media.smxs`
  height: 425px;
  ${props => props.currentSlide && "height: 475px"};
  ${props => !props.currentSlide && "margin-top: 25px"};
  `}
`;

const StyledTestimonialsContainer = styled(Container)`
  padding-right: 0px;
  padding-left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-width: 1400px;
  ${media.lg`
  padding-right: 0px;
  padding-left: 0px;
  `}
  ${media.md`
  padding-right: 0px;
  padding-left: 0px;
  `}

  ${media.sm`
  padding-right: 0px;
  padding-left: 0px;
    padding-top: 50px;
    padding-bottom: 50px;
  `}

  ${media.smxs`
    display: none;
  `}
`;

const StyledMobileResponsiveCarousel = styled(Container)`
  display: none;

  ${media.smxs`
  overflow: hidden;
  display: block;
  padding-left: 0px;
  padding-right: 0px;


  ${Subheader}{
    margin-bottom: 50px;
  }
  `}
`;

export {
  StyledMobileResponsiveCarousel,
  StyledGradientHero,
  StyledReviewWrapper,
  StyledTestimonialsContainer
};

// &:before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

// background: ${colors.blue};
// transition: background 800ms;
// `;
// z-index: 1;
// background: ${props =>
//   props.inView
//     ? `linear-gradient(to bottom, transparent 5%,  transparent 25%,  ${colors.blue} )`
//     : `linear-gradient(to bottom, transparent, ${colors.blue})`};
// z-index: -1;
// }

// ${props => !props.inView && `background: ${colors.lightblue}`};
