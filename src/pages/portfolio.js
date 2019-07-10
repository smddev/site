import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {filterBy} from "../components";
import {description, H1WithBackground} from "../atoms";
import queryString from 'query-string'
import {Box, Flex} from "@rebass/grid";
import styled from "styled-components";
import {withLayout} from "../organisms";
import {withWindowLocation} from "../utils"
import ProjectCard from "../components/ProjectCard"
import {withSidebar} from "../hocs"


const Description = styled.div`
  margin-top: ${p => p.theme.space[5]}px};
  ${description}
`

const CardContainer = styled(Flex)`
  margin: 80px -12px 0; 
  flex-wrap: wrap;
`

const Cell = ({children}) => <Box width={[1, 1, 1, 1, 1 / 2]} px={'12px'} pb={'24px'}>
		{children}
</Box>

//order of HOCs is important nested HOCs expect props from parent props
export default withLayout()(withRouteData(withSidebar(withWindowLocation(({projects, industries, services, techs, location}) => {
		const query = queryString.parse(location.search);
		const selectedProjects = projects.filter(filterBy(query));

		return <Fragment>
				<H1WithBackground>Portfolio</H1WithBackground>
				<Description>
						For 7 years our specialists have developed more than 70 different projects.
						The most successful and interesting solutions are presented here.
				</Description>
				<CardContainer>
						{selectedProjects.map((p, i) => <Cell key={i}>
								<ProjectCard project={p}/>
						</Cell>)}
				</CardContainer>
		</Fragment>
}))))
