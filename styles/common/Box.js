import React from "react";
import styled from "styled-components";
import { boxShadow } from "../_variables";

const ContainerStyle = styled.section`
  border-radius: 3px;
  background: white;
  box-sizing: border-box;
  width: ${props => (props.columns ? `${100 / props.columns - 5}%` : "100%")};
  ${boxShadow};
  ${props => (props.style ? props.style : null)}
`;

const Box = props => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export { Box };
