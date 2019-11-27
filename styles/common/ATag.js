import styled from 'styled-components';
import { buttonAndLinkHover, colors } from '../_variables';

const ATag = styled.p`
  font-size: 15px;
  line-height: 28px;
  color: ${props => (props.color ? props.color : '#000000')};
  font-family: Work Sans;
  margin-top: 5px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-right: 15px;
  margin-left: 15px;
  color: ${colors.blue};
  &:hover {
    ${buttonAndLinkHover}
  }

  ${props => (props.style ? props.style : null)}
`;

export { ATag };
