import styled from "styled-components";
import { colors } from "../_variables";
import media from "../_media";

const Header = styled.h1`
  font-family: Work Sans;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  color: ${props => props.theme.fg || colors.blue};
  transition: 400ms ease-in;

  ${media.smxs`
    font-size: 34px;
    line-height: 42px;
  `}
`;

export { Header };
