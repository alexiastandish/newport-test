import styled from "styled-components";
import media from "../../../../styles/_media";
import { colors } from "../../../../styles/_variables";

const StyledOpenMobileMenu = styled.div`
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};

  ${media.md`
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  transition-delay: ${props => props.menuOpen && "0.25s"};
  margin: 0px;
  padding: 40px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: ${colors.blue};
  font-size: 18px;
  line-height: 36px;
  box-sizing: border-box;
  z-index: 8;

  button {
    width: 100%;
    margin-top: 30px;
  }
  height: 0px;
  transition: all 400ms ease-in;

  ${props =>
    props.menuOpen &&
    `height: 50vh; background: white;   transition: all 400ms ease-in; box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);`};
  `};

  ${media.sm`
    ${props =>
      props.menuOpen &&
      `height: 100vh; background: white; transition: all 400ms ease-in; box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);`}
  `}
`;

const StyledMobileLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 80px;
  transition: all 400ms ease-in;
`;

const StyledMobileLink = styled.li`
  font-family: Work Sans;
  border-bottom: 1.2px solid ${colors.gray};
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
  transition: all 400ms ease-in;
  height: auto;
  &:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${colors.blue};
  }
`;

export { StyledOpenMobileMenu, StyledMobileLinkList, StyledMobileLink };
