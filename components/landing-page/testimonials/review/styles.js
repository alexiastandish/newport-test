import styled from "styled-components";
import { Box, Body } from "../../../../styles/common";
import { colors } from "../../../../styles/_variables";
import media from "../../../../styles/_media";

const StyledReview = styled(Box)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 40px 25px;

  ${media.smxs`
    padding: 20px 10px;
  `}
`;

const StyledReviewBody = styled(Body)`
  align-self: flex-end;
  text-indent: -0.4125em;
  margin: 0.5rem;
  text-align: left;
  margin-top: 30px;
`;

const StyledReviewHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${media.smxs`
  align-items: center;
  height: auto;
  flex-direction: column;
`}
`;

const StyledReviewImg = styled.div`
  height: 100px;
  margin-top: -10px;
  width: 100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;
  background: ${colors.blue};

  img {
    height: 100%;
    object-fit: cover;
    ${props =>
      props.currentSlide
        ? `opacity: 1`
        : `opacity: .2; filter: grayscale(100%)`};
  }

  ${media.smxs`
  height: 50px;
  margin-top: -10px;
  width: 50px;
`}
`;

const StyledPerson = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: left;

  p:nth-of-type(1) {
    margin-bottom: 0px;
    margin-top: 0px;
    ${props =>
      props.currentSlide
        ? `  color: ${colors.red}`
        : `  color: ${colors.blue}`};
  }
  p:nth-of-type(2) {
    font-size: 14px;
    line-height: 20px;
    color: ${colors.gray};
  }

  ${media.smxs`
  right: auto;
  width:100%;
  text-align: center;
  position: relative;
  p:nth-of-type(2) {
    font-size: 12px;
    line-height: 18px;
    color: ${colors.gray};
  }
  `}
`;

export {
  StyledReview,
  StyledReviewHeader,
  StyledReviewBody,
  StyledReviewImg,
  StyledPerson
};

// ${props =>
//   props.currentSlide ? `  color: ${colors.red}` : `  color: ${colors.blue}`};
