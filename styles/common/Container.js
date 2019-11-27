import styled from "styled-components";
import media from "../_media";
import { sizes } from "../_sizes";

const Container = styled.section`
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${sizes.xl}px;
  padding-left: 5em;
  padding-right: 5em;
  z-index: 1;
  padding-top: 100px;
  padding-bottom: 100px;

  ${media.lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
`};

  ${media.md`
  width: 100%;
`};

  ${media.sm`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 25px;
  padding-right: 25px;
  `};

  ${media.xs`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
  `};
`;

export { Container };
