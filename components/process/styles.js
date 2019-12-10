import styled from "styled-components";
import media from "../../styles/_media";
import { Container } from "../../styles/common";

const StyledNMEImg = styled.img`
  margin: 0 auto;
  width: 80%;

  ${media.smxs`
    width: 100%;
  `}
`;

const StyledProcessContainer = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;
`;

export { StyledNMEImg, StyledProcessContainer };
