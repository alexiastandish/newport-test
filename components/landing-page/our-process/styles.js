import styled from "styled-components";
import { Hero, Column, Container } from "../../../styles/common";
import media from "../../../styles/_media";

const StyledProcessHero = styled(Hero)`
  min-height: 400px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

const StyledCol = styled(Column)`
  img {
    width: 100%;
  }
`;

const StyledContentCol = styled(Column)`
  flex: 0 0 40%;
  max-width: 40%;
  justify-items: flex-start;
  display: flex;
  flex-direction: column;

  a {
    align-self: flex-start;
    justify-self: flex-start;
  }
`;

const StyledProcessContainer = styled(Container)`
  ${media.smxs`
    padding-top: 50px;
    padding-bottom: 50px;
    `}
`;

export {
  StyledProcessHero,
  StyledCol,
  StyledContentCol,
  StyledProcessContainer
};
