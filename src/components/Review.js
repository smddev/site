import {Box, Flex} from "@rebass/grid";
import React from "react";
import styled from "styled-components";
import {paragraph, Subtitle} from "../atoms";
import {Image} from "cloudinary-react";

const ItalicText = styled.div`
  color: white;
  font-style: italic;
  min-height: 350px;

  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    line-height: ${p => p.theme.lineHeight[3]}px;
  }
  ${paragraph}
`;

const Text = styled(Subtitle)`
  color: white;
  font-weight: ${p => p.theme.fontWeights[1]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const HideBox = styled(Box)`
 @media (max-width: ${p => p.theme.breakpoints[1]}) {
    visibility: hidden;
  }
`

const Review = ({review, className}) => {
  return (
    <div {...{className}}>
      <ItalicText>{review.data.review}</ItalicText>
      <Flex width={1} mb={3}>
        <HideBox width={[0, 0, 1 / 2]}>
          {typeof review.data.icon !== 'undefined' ?
            <A href={review.data.link} target="_blank" rel="noopener noreferrer">
              <Image
                publicId={`site/clients-icons/${review.data.icon}`}
                gravity="face"
                crop="fill"
                height={65}
                width={160}/>
            </A>
            : <A/>}
        </HideBox>
        <Box width={[1, 1, 1 / 2]}>
          <A href={review.data.link} target="_blank" rel="noopener noreferrer">
            <Text>{review.data.reviewer}</Text>
            <Subtitle mt={2}>{review.data.position}</Subtitle>
          </A>
        </Box>
      </Flex>
    </div>
  );
};

export default styled(Review)`
  height: 448px;
  width: 480px;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    height:428px;
    width:280px;
  }
`;
