import styled from 'styled-components';
import media from '../_media';

const Column = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  flex: 0 0 50%;
  max-width: 50%;
  right: auto;
  left: auto;
  flex-wrap: wrap;

  ${media.md`
  flex: 0 0 100%;
  max-width: 100%;
  margin: 0 auto;
  `}
`;

export { Column };
