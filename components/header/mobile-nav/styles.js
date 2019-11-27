import styled from "styled-components";
import media from "../../../styles/_media";

const StyledMobileNav = styled.div`
  display: none;
  ${media.md`
  padding-left: 1.5em;
  padding-right: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `}
`;

const StyledMobileNewportMedLogo = styled.img`
  width: 20%;
  height: 100%;

  ${media.smxs`
  height: 25px;
  width: auto;
  `}
`;

export { StyledMobileNav, StyledMobileNewportMedLogo };
