import styled from 'styled-components';
import media from '../_media';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ${media.md`
  justify-content: center;
  `}
`;

export { Row };
