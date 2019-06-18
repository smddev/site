import React from 'react'
import {H5, Subtitle} from "../atoms";
import {StyledEmailLink} from "../components";
import {Image} from "cloudinary-react";
import {Flex, Box} from '@rebass/grid'
import styled from "styled-components"

const StyledImage = styled.div`
  img {
	border-radius: 2px;
  }
  margin-right: ${p => `${p.theme.fontSizes[4]}px`};
  @media (max-width: 360px) {
	  margin: auto;
  }
`;

const NewH5 = styled(H5)`
@media (max-width: 360px) {
	 text-align:center;
	 width:100%;
	 margin: 0 auto;
  }
`;

const NewSubtitle = styled(Subtitle)`
  @media (max-width: 360px) {
	text-align:center;
	width:100%;
	margin: 0 auto;
  }
`;

export default ({ item }) => (
  <Box>
    <Flex width={1} {...{ flexWrap: "wrap" }}>
      <StyledImage>
        <Image
          publicId={`site/member/${item.data.avatar}`}
          gravity="face"
          crop="fill"
          width={160}
          height={160}
        />
      </StyledImage>
      <Box>
        <NewH5> {item.data.title}</NewH5>
        <NewSubtitle mt={2}>{item.data.role}</NewSubtitle>
        <StyledEmailLink mt={2} email={item.data.email} />
      </Box>
    </Flex>
    <Box mt={"25px"}>{item.content}</Box>
  </Box>
);
