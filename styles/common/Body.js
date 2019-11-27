import styled from "styled-components";
import { colors } from "../_variables";

const Body = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: Work Sans;
  color: ${props => (props.color ? props.color : colors.black)};
  font-style: normal;
  margin-top: 5px;
  letter-spacing: 0.1px;
  font-weight: 400;
  ${props => (props.style ? props.style : null)}
`;

export { Body };
