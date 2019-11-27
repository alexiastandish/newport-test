import styled from "styled-components";
import { Box } from "../../../styles/common";
import { colors } from "../../../styles/_variables";
import media from "../../../styles/_media";

const StyledValue = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledValueBox = styled(Box)`
  margin: 15px;
  align-content: flex-start;
  padding: 20px;
  text-align: left;
  width: 33%;
  ${media.md`
    width: 50%;
  `}
  ${media.smxs`
  width: 100%;
  `}
`;

const StyledCoreValues = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 800px;
  width: 100%;
  justify-content: flex-start;
  margin-top: 50px;

  & > ${StyledValueBox} {
    align-self: flex-start;
  }

  ${media.md`
  height: 1000px;
  `}
  ${media.smxs`
  height: 1700px;
  `}
`;

const StyledVerse = styled.p`
  font-family: Work Sans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  color: ${colors.gray};
`;

export { StyledValue, StyledValueBox, StyledCoreValues, StyledVerse };
