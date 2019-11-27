import styled from "styled-components";
import { colors, buttonAndLinkHover } from "../_variables";

const getButtonStyles = type => {
  switch (type) {
    case "primary":
      return {
        backgroundColor: colors.red,
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
        color: "#FFFFFF"
      };
    case "secondary":
      return {
        backgroundColor: "#FFFFFF",
        color: colors.blue,
        boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)"
      };
    case "centered":
      return {
        backgroundColor: colors.lightblue,
        color: colors.blue
      };
    case "link-btn":
      return {
        color: "#FFFFFF",
        backgroundColor: colors.blue
      };
    case "link-btn-inverted":
      return {
        color: colors.blue,
        border: `1px solid ${colors.blue}`,
        backgroundColor: "#FFFFFF"
      };
    default:
      break;
  }
};

// const ButtonLink = ({ label, ...props }) => {
//   return <StyledButtonLink {...props}>{props.children}</StyledButtonLink>;
// };

const ButtonLink = styled.a`
text-transform: uppercase;
font-family: Work Sans;
font-weight 400;
border-radius: 25px;
position: relative;
display: flex;
justify-content: center
flex-direction: row;
align-items: center;
justify-items: center;
font-size: 14px;
text-transform: uppercase;
// line-height: 1.71;
letter-spacing: 1px;
padding-top: 13px;
padding-bottom: 12px;
padding-right: ${props =>
  props.type.includes("transparent") ? "0px" : "20px"};
padding-left: ${props => (props.type.includes("transparent") ? "0px" : "20px")};
outline: none;
border: none;
transition: all 400ms ease;

&:hover {
  ${buttonAndLinkHover}
}
${props =>
  props.isDisabled &&
  `background: ${colors.gray}; color: ${colors.black}; border: none; box-shadow: none;
  &:hover{
    cursor: default;
    transform: translateY(0px)
  }
  `}

a {
  font-size: 14px;
  color: white;
  text-decoration: none;
}

img {
  margin-right: 4px;
  margin-left: 4px;
}

${props =>
  props.type ? getButtonStyles(props.type) : getButtonStyles("primary")}


${props => (props.mobileHide ? `display: none` : `display: flex`)};
${props => (props.style ? props.style : null)}
`;

export { ButtonLink };
