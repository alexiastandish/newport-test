import styled from "styled-components";
// import media from "../_media";

const Hero = styled.section`
  width: 100%;
  display: flex;
  min-height: 700px;
  margin: 0px;
  overflow: hidden;
  align-items: center;
  flex-direction: ${props => (props.layout ? props.layout.direction : "row")};
  justify-content: ${props => {
    return props.layout ? props.layout.justify : "flex-start";
  }};
  justify-items: ${props => {
    return props.layout ? props.layout.justify : "flex-start";
  }};
  text-align: ${props => (props.layout ? props.layout.textAlign : "left")};

  ${props => props.theme && `background: ${props.theme.bg}`};
`;

export { Hero };
