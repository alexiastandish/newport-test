import styled from "styled-components";
import { Hero, Box, Subheader, Column, Body } from "../../styles/common";
import media from "../../styles/_media";
import { colors } from "../../styles/_variables";

const StyledServicesHero = styled(Hero)`
  background-image: url("/images/services/services-hero-bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 720px;
  ${media.sm`
    min-height: 800px;
  `}
  ${media.xs`
    min-height: 700px;
  `}
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
  padding: 10px;
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

const StyledServiceHeadingColumn = styled(Column)`
  h1 {
    order: 1;
  }
  img {
    order: 2;
  }
  ${media.md`
  flex-flow: wrap-reverse;
    h1 {
      order: 2;
      width: 100%;
      margin-bottom: 30px;
    }
    img {
      order: 1;
      margin-bottom: 20px;
    }
  `}
`;

const StyledServiceTagSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  ${props =>
    props.leftAlign && `justify-content: flex-start; margin-left: -4px`};

  ${media.sm`
  justify-content: center;
  margin-left: auto;
  `}

  .cloud-based-services-tags {
    width: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    padding: 0 8px;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 12px;
    list-style: none;
    border-radius: 6px;
    margin: 0 4px 8px 4px;
    text-transform: uppercase;

    ${media.sm`
    height: auto;
    padding: 5px 15px;
    line-height: 16px;
    margin: 0 auto;
    `}
  }
`;

const StyledServiceTagItem = styled(Body)`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  padding: 0 8px;
  box-sizing: border-box;
  letter-spacing: 1px;
  font-size: 12px;
  list-style: none;
  border-radius: 6px;
  margin: 0 4px 8px 4px;
  background: ${colors.red};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;

  ${media.sm`
  height: auto;
  padding: 5px 15px;
  line-height: 16px;
  `}
`;

export {
  StyledServicesHero,
  StyledServiceBoxes,
  StyledServiceBox,
  StyledServiceHeadingColumn,
  StyledServiceTagSection,
  StyledServiceTagItem
};
