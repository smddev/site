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

const Cell = styled(({children, className}) => <Box {...{className}} width={[1 / 2, 1 / 2]}>
	{children}
</Box>)`
  @media(max-width: ${p => p.theme.breakpoints[0]}) {
    width: 100%;
  }
`

export default ({item}) => <Box>
	<Flex width={1} {...{flexWrap:'wrap'}}>
		<Cell>
			<StyledImage><Image publicId={`site/member/${item.data.avatar}`}
								gravity='face'
								crop="fill"
								width={160}
								height={160}
			/></StyledImage>
		</Cell>
		<Cell>
			<Box>
				<H5>{item.data.title}</H5>
				<Subtitle mt={2}>{item.data.role}</Subtitle>
				<StyledEmailLink mt={2} email={item.data.email}/>
			</Box>
		</Cell>
	</Flex>
	<Box mt={'25px'}>
		{item.content}
	</Box>
</Box>
