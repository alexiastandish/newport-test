import media from "../_media";
import styled from "styled-components";
import { colors } from "../_variables";

const Subheader = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-family: Work Sans;
  font-style: normal;
  letter-spacing: 0.3px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${props => props.theme.fg || colors.blue};

  ${media.sm`
  font-size: 18px;
  line-height: 28px;
`};

  ${props => (props.style ? props.style : null)}
`;

export { Subheader };
