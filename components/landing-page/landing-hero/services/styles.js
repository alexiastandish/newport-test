import styled from "styled-components";
import { Row, Box, Subheader, Container } from "../../../../styles/common";
import media from "../../../../styles/_media";

const StyledServiceBox = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding: 35px 30px;
  width: 410px;
  height: 350px;

  margin-bottom: 25px;
  position: relative;

  h1 {
    margin-top: 10px;
  }

  button {
    position: absolute;
    bottom: 30px;
  }

  ${media.md`
  width: 350px;
  height: 350px;
  `}
  ${media.xs`
  width: 300px;
  height: auto;
  `}
`;

const StyledBoxesRow = styled(Row)`
  max-width: 850px;
  margin: 0 auto;

  ${media.md`
  justify-content: space-around;
  `}
`;

const StyledServiceIcon = styled.div`
  width: 75px;
  height: 75px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    height: auto;
  }

  ${media.md`
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
  `}
`;

const StyledBoxSubheader = styled(Subheader)`
  margin-bottom: 10px;
  margin-top: 0px;
`;

const StyledServicesContainer = styled(Container)`
  ${media.md`
    margin-top: -200px;
  `}
`;

export {
  StyledBoxesRow,
  StyledServiceBox,
  StyledServiceIcon,
  StyledBoxSubheader,
  StyledServicesContainer
};
