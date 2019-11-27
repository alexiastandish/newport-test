import React from "react";
import {
  StyledReview,
  StyledReviewHeader,
  StyledReviewBody,
  StyledReviewImg,
  StyledPerson
} from "./styles";
import { Body, Subheader, StyledBlockQuote } from "../../../../styles/common";

const Review = ({ person, position, image, review, currentSlide }) => {
  return (
    <StyledReview currentSlide={currentSlide}>
      <StyledReviewHeader>
        <StyledBlockQuote currentSlide={currentSlide}>&#8220;</StyledBlockQuote>
        <StyledReviewImg currentSlide={currentSlide}>
          <img src={image} alt={person} />
        </StyledReviewImg>
        <StyledPerson currentSlide={currentSlide}>
          <Subheader>{person}</Subheader>
          <Body>{position}</Body>
        </StyledPerson>
      </StyledReviewHeader>
      <StyledReviewBody>"{review}"</StyledReviewBody>
    </StyledReview>
  );
};
export default Review;
