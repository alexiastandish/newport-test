import styled from "styled-components";
import { Hero, Box, Subheader } from "../../styles/common";
import media from "../../styles/_media";

const StyledServicesHero = styled(Hero)`
  background-image: url("/images/services/services-hero-bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const StyledServiceBoxes = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 30px;
  ${media.sm`
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const StyledServiceBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 10px;
  align-items: center;
  img {
    width: 75px;
    margin-top: 25px;
  }

  a {
    text-decoration: none;
  }

  ${media.sm`
  width: 48%;
  margin: 0px;
  margin-bottom: 20px;
  `}

  ${media.xs`
  padding: 20px;
  img {
    margin-top: 0px;
  }
  ${Subheader}{
    display: none;
  }
  `}
`;

export { StyledServicesHero, StyledServiceBoxes, StyledServiceBox };
