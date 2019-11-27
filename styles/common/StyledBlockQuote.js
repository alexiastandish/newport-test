import styled from "styled-components";
import media from "../_media";
import { colors } from "../_variables";

const StyledBlockQuote = styled.h2`
  ${props =>
    props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.gray}`};
  opacity: ${props => (props.currentSlide ? `1` : `.5`)};
  font-size: 80px;
  margin-bottom: -30px;
  margin-right: 20px;

  ${media.smxs`
   margin-right: auto;
   margin-left: auto;
   margin-bottom: -20px;
    text-align: center;
  `}
`;

export { StyledBlockQuote };
