import React from 'react';
import styled from 'styled-components';
import { colors, buttonAndLinkHover } from '../_variables';

const options = [
  'primary',
  'primary--reversed',
  'secondary',
  'transparent--blue',
  'transparent--green',
  'transparent--red',
  'transparent--white',
  'save',
  'save--reversed',
  'delete',
  'delete--reversed',
  'inverted',
  'inverted--reversed',
  'secondary--green'
];

const getButtonStyles = type => {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: colors.red,
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)',
        color: '#FFFFFF'
      };
    case 'secondary':
      return {
        backgroundColor: '#FFFFFF',
        color: colors.blue,
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.2)'
      };
    case 'centered':
      return {
        backgroundColor: colors.lightblue,
        color: colors.blue
      };
    case 'link-btn':
      return {
        color: '#FFFFFF',
        backgroundColor: colors.blue
      };
    case 'link-btn-inverted':
      return {
        color: colors.blue,
        border: `1px solid ${colors.blue}`,
        backgroundColor: '#FFFFFF'
      };
    default:
      break;
  }
};

const StyledButton = styled.button`
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
    props.type.includes('transparent') ? '0px' : '20px'};
  padding-left: ${props =>
    props.type.includes('transparent') ? '0px' : '20px'};
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
    props.type ? getButtonStyles(props.type) : getButtonStyles('primary')}


  ${props => (props.mobileHide ? `display: none` : `display: flex`)};
  ${props => (props.style ? props.style : null)}
`;

// {props.isLoading ? (
//   <>
//     <Loader {...props} />
//     <div style={{ color: 'transparent' }}>{props.children}</div>
//   </>
// ) : (
//   props.children
// )}

const Button = ({ label, ...props }) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export { Button };

// const Loader = styled.span`
//   text-indent: -9999em;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background: ${props => {
//     return props.type
//       ? getColors(props.type).background === 'transparent'
//         ? '#D8D8D8'
//         : 'rgba(255, 255, 255, 0.2)'
//       : 'white';
//   }};

//   position: absolute;
//   -webkit-animation: load3 1s infinite linear;
//   animation: load3 1s infinite linear;
//   -webkit-transform: translateZ(0);
//   -ms-transform: translateZ(0);
//   transform: translateZ(0);

//   &:before {
//     width: 50%;
//     height: 50%;
//     background: ${props => {
//       return props.type ? getColors(props.type).color : 'white';
//     }};
//     border-radius: 100% 0 0 0;
//     position: absolute;
//     top: 0;
//     left: 0;
//     content: '';
//   }

//   &:after {
//     background: ${props => {
//       return props.type
//         ? getColors(props.type).background === 'transparent'
//           ? 'white'
//           : getColors(props.type).background
//         : 'white';
//     }};
//     width: 78%;
//     height: 78%;
//     border-radius: 50%;
//     content: '';
//     margin: auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//   }

//   @-webkit-keyframes load3 {
//     0% {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes load3 {
//     0% {
//       -webkit-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
// `;
