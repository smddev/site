import React from 'react';
import Carousel from '../components/Carousel';
import Review from '../components/Review';
import VerticalCarousel from '../components/VerticalCarousel';
import styled from 'styled-components';
import {withBackground} from "../atoms";
import quote from "../quote.svg";
import { responsive } from "../utils";

const FeedbackList = withBackground(quote, 240, 160)(styled.div`
  width: 100%;
  min-height: 170px;
`)`
  margin-top: -60px;
  opacity: 0.3;
`;

// const CarouselCSS = css`
// 	height:400px;
//  	width:480px;
//  	@media(max-width: ${p => p.theme.breakpoints[1]}) {
//  		height:300px;
//  		width:380px;
//  	}
//  	@media(max-width: ${p => p.theme.breakpoints[0]}) {
//  		height:300px;
//  		width:250px;
//  	}
// `

const StyledVerticalCarousel = styled(VerticalCarousel)`
  height: 400px;
  width: 200px;
  @media (min-width: 400px) {
    height: 400px;
    width: 290px;
  }
  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    height: 400px;
    width: 370px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 400px;
    width: 480px;
  }
  margin: 0 auto;
`;

const StyledHorisontalCarousel = styled(Carousel)`
  height: 400px;
  width: 200px;
  @media (min-width: 400px) {
    height: 400px;
    width: 290px;
  }
  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    height: 400px;
    width: 370px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 400px;
    width: 480px;
  }
  margin: 0 auto;
`;

const Reviews = ({ reviews, className, isMobile }) => (
  <FeedbackList>
    {isMobile ? (
      <StyledHorisontalCarousel
        height={400}
        width={480}
        carousel={true}
        ml={4}
        alignItems="center"
      >
        {reviews.slice(0, 3).map((review, key) => (
          <div {...{ key }}>
            <Review {...{ review }} mb={3} />
          </div>
        ))}
      </StyledHorisontalCarousel>
    ) : (
      <StyledVerticalCarousel
        height={400}
        width={480}
        carousel={true}
        ml={4}
        alignItems="center"
      >
        {reviews.slice(0, 3).map((review, key) => (
          <div {...{ key }}>
            <Review {...{ review }} mb={3} />
          </div>
        ))}
      </StyledVerticalCarousel>
    )}
  </FeedbackList>
);

export default responsive(({ isMobile, ...props }) => (
  <Reviews {...{ ...props, isMobile }} />
));
