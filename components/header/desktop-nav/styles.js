import styled from "styled-components";
import media from "../../../styles/_media";
import { sizes } from "../../../styles/_sizes";

const StyledDesktopNav = styled.div`
  font-family: Work Sans;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding-left: 3em;
  padding-right: 3em;
  padding-top: ${props => (props.stickyNav ? `0px` : `10px`)};
  box-sizing: border-box;

  // max-width: ${sizes.xl}px;
  margin: 0 auto;

  ${media.lg`
  padding-left: 1.5em;
  padding-right: 1.5em;
  `};

  ${media.md`
  display: none;
  `};
  transition: 400ms ease;
`;

const StyledNewportMedLogo = styled.img`
  width: 200px;
`;

const StyledNavLinksWrapper = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
`;

export { StyledDesktopNav, StyledNewportMedLogo, StyledNavLinksWrapper };
