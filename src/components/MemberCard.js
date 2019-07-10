import { Box, Flex } from '@rebass/grid';
import { Image } from "cloudinary-react";
import React from 'react';
import styled from "styled-components";
import { H5, Subtitle } from "../atoms";
import { StyledEmailLink } from "../components";

const StyledImage = styled.div`
  img {
    border-radius: 2px;
  }
  margin-right: ${p => `${p.theme.fontSizes[4]}px`};
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    margin: 0 auto 8px;
  }
`;

const MorphBox = styled(Box)`
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    text-align: center;
    margin: 0 auto;
  }
`;

const TextBox = styled(Box)`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  @media (min-width: ${p => p.theme.breakpoints[0]}) {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default ({ item, carousel }) => (
  <Box mb={3}>
    <Flex width={1} {...{ flexWrap: carousel ? "wrap" : "nowrap" }}>
      <StyledImage>
        <Image
          publicId={`site/member/${item.data.avatar}`}
          gravity="face"
          crop="fill"
          width={160}
          height={160}
        />
      </StyledImage>
      <MorphBox>
        <H5> {item.data.title}</H5>
        <Subtitle mt={2}>{item.data.role}</Subtitle>
        <StyledEmailLink mt={2} email={item.data.email} />
      </MorphBox>
    </Flex>
    <TextBox mt={"10px"}>{item.content}</TextBox>
  </Box>
);
