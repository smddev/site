import React, {Fragment} from 'react'
import {Box, Flex} from "@rebass/grid";
import MemberCard from "../components/MemberCard";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import {space} from "styled-system";

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

const Management = ({members, carousel, className}) => <Carousel width={265} height={452} carousel={carousel} {...{className}}>
	{members.map((m, i) =>
		<Cell key={i}>
			<MemberCard item={m} key={i} {...{className, carousel}}/>
		</Cell>
	)}
</Carousel>

const DesktopManagement = styled(Management)`
	@media(max-width: ${p => p.theme.brkpnts[0] - 1}px) {
    display: none;
  }
`;

const MobileManagement = styled(Management)`
	width: 265px;
	height: 452px;
	margin: 0 auto;
	
	@media(min-width: ${p => p.theme.breakpoints[0]}) {
    display: none;
  }
	
`;

const CMG = ({members, className}) => <Fragment>
	<MobileManagement {...{members, className}} carousel/>
	<DesktopManagement {...{members, className}}/>
</Fragment>

export default styled(CMG)`${space};`