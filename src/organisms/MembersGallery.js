import React, {Fragment} from 'react'
import {Box, Flex} from "@rebass/grid";
import {MemberCard, Carousel} from "../components";
import styled from "styled-components";
import {space} from "styled-system";
import {responsive} from "../utils";

const Cell = styled(({children, className}) => <Box {...{className}}>
		{children}
</Box>)`
width: 100%;
 @media(min-width: 930px) {
 	width: 50%;
 		&:nth-child(even) {
    	padding-left: 30px;
  	}
  }
  @media(min-width: ${p => p.theme.breakpoints[3]}) {
  	&:nth-child(even) {
    	padding-left: 60px;
  	}
  	&:nth-child(odd) {
    	padding-right: 60px;
  	}
  }
`

const CMG = styled(({members, carousel, className}) =>
		<Carousel width={265} height={560} carousel={carousel} {...{className}}>
				{members.map((m, i) =>
						<Cell key={i}>
								<MemberCard item={m} key={i} {...{className, carousel}}/>
						</Cell>
				)}
		</Carousel>)`
	@media (max-width: ${p => p.theme.breakpoints[0]}) {
		width: 265px;
		height: 560px;
		margin: 0 auto;
	}
  ${space}
`;

export default responsive(({isXMobile, ...props}) => <CMG carousel={isXMobile} {...{...props}}/>);