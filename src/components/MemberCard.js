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
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
	  margin: auto;
  }
`;

const MorphBox = styled(Box)`
	@media (max-width: ${p => p.theme.breakpoints[0]}) {
		text-align: center;
		margin: 0 auto;
	}
`

export default ({item, carousel}) => (
		<Box mb={3}>
				<Flex width={1} {...{flexWrap: carousel ? "wrap" : "nowrap"}}>
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
								<StyledEmailLink mt={2} email={item.data.email}/>
						</MorphBox>
				</Flex>
				<Box mt={"25px"}>{item.content}</Box>
		</Box>
);
