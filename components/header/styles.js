import styled from "styled-components";
import media from "../../styles/_media";

const StyledNavWrapper = styled.div`
  width: 100%;
  transition: all 0.3s ease-in;
  box-sizing: border-box;
  position: fixed;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 1;
  ${props =>
    props.stickyNav &&
    `box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1); padding-top: 16px;
    padding-bottom: 16px; background: white;`};
`;

export { StyledNavWrapper };
