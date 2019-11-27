import styled from "styled-components";
import { Column, Hero, Container } from "../../../styles/common";
import media from "../../../styles/_media";

const StyledServiceCircleWrapper = styled(Column)`
  opacity: 0;
  padding-left: 8em;
  ${props => props.beginAnimation && `opacity: 1`};
  transition: 1200ms ease-in;

  ${media.md`
    display: none;
  `}
`;

const StyledLandingPageHero = styled(Hero)`
  background-image: url("/images/home/home-hero-bg.png");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const StyledHeroContentCol = styled(Column)`
  display: flex;
  justify-content: flex-start;

  ${media.md`
    flex-direction: column;
  `}
  ${media.sm`
    text-align: center;
    align-items: center;
    max-width: 90%;
  `}
`;

const StyledHeroContainer = styled(Container)`
  padding-bottom: 25px;
  ${media.md`
    padding-top: 0px;
  `}
`;

export {
  StyledServiceCircleWrapper,
  StyledLandingPageHero,
  StyledHeroContentCol,
  StyledHeroContainer
};
