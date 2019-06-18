import React from 'react'
import {H5, Subtitle} from "../atoms";
import {StyledEmailLink} from "../components";
import {Image} from "cloudinary-react";
import {Flex, Box} from '@rebass/grid'
import styled from "styled-components"

const StyledImage = styled.div`
  img {
    border-radius: 2px
  }
`

export default ({item}) => <Box>
	<Flex width={1} {...{flexWrap:'wrap'}}>
		<StyledImage><Image publicId={`site/member/${item.data.avatar}`}
								gravity='face'
								crop="fill"
								width={160}
								height={160}
			/></StyledImage>
		<Box ml={[1, 4]}>
			<H5> {item.data.title}</H5>
			<Subtitle mt={2}>{item.data.role}</Subtitle>
			<StyledEmailLink mt={2} email={item.data.email}/>
		</Box>
	</Flex>
	<Box mt={'25px'}>
		{item.content}
	</Box>
</Box>
