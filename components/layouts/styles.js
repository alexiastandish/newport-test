import styled from 'styled-components';
import media from '../../styles/_media';

const StyledBodyWrapper = styled.div`
  ${media.md`
  opacity: ${props => (props.menuOpen ? '.2' : '1')};
  transition: opacity 400ms ease-in;
  `};
`;

const StyledLayoutWrapper = styled.div`
  ${media.md`
  ${props => props.menuOpen && `height: 100vh; overflow: hidden`};
  `};
`;

export { StyledBodyWrapper, StyledLayoutWrapper };
