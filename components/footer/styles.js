import styled from "styled-components";
import { Hero, Container, Body, Column } from "../../styles/common";
import media from "../../styles/_media";

const StyledFooterWrapper = styled(Hero)`
  min-height: 1px;
`;

const StyledFooterContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const StyledFooterLogo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const StyledLocationHeader = styled(Body)`
  text-transform: uppercase;
  letter-spacing: 1px;
  ${media.md`
  margin-top: 25px;
  `}
`;

const StyledFooterColumnLeft = styled(Column)`
  max-width: 40%;
  flex: 0 0 40%;

  ${media.md`
  max-width: 40%;
  flex: 0 0 40%;
  `}
  ${media.sm`
  max-width: 100%;
  flex: 0 0 100%;
  `}
`;
const StyledFooterColumnRight = styled(Column)`
  max-width: 60%;
  flex: 0 0 60%;

  ${media.md`
  max-width: 60%;
  flex: 0 0 60%;
  `}
  ${media.sm`
  margin-top: 30px;
  max-width: 100%;
  flex: 0 0 100%;
  `}
`;

export {
  StyledFooterWrapper,
  StyledFooterContainer,
  StyledFooterLogo,
  StyledLocationHeader,
  StyledFooterColumnRight,
  StyledFooterColumnLeft
};
