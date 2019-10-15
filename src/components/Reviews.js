import React from 'react';
import Carousel from '../components/Carousel';
import VerticalCarousel from '../components/VerticalCarousel';
import Review from '../components/Review';
import styled from 'styled-components';
import {withBackground} from "../atoms";
import quote from "../quote.svg";

const FeedbackList = withBackground(quote, 240, 160)(styled.div`
  width: 100%;
  min-height: 170px;
  margin-left: 10px;
  margin-top: -10px;
`)`
  margin-top: -50px;
  margin-left: -10px;
  opacity: 0.3;
`;

const StyledVerticalCarousel = styled(VerticalCarousel)`
  height: 442px;
  width: 566px;
  margin: 0 auto;
  @media(max-width: ${p => p.theme.brkpnts[1] - 1}px) {
    display: none;
  }
`;

const StyledHorizontalCarousel = styled(Carousel)`
  height: 464px;
  width: 280px;
  margin: 0 auto;
  @media(min-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const Reviews = ({reviews}) => (
  <FeedbackList>
    <StyledHorizontalCarousel
      height={428}
      width={280}
      carousel={true}
      alignItems="center">
      {reviews.slice(0, 3).map((review, key) => (
        <Review {...{review, key}} mb={3}/>
      ))}
    </StyledHorizontalCarousel>
    <StyledVerticalCarousel
      height={448}
      width={500}
      carousel={true}
      ml='45px'>
      {reviews.slice(0, 3).map((review, key) => (
        <Review {...{review, key}} mb={3}/>
      ))}
    </StyledVerticalCarousel>

  </FeedbackList>
);

export default Reviews;
