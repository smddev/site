import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {ProjectCard, SideNav, filterBy} from "../components";
import {Container, description, H1WithBackground} from "../atoms";
import {withRouter} from "react-router";
import queryString from 'query-string'
import {Box, Flex} from "@rebass/grid";
import styled from "styled-components";
import {Footer, withLayout} from "../organisms";
import {withWindowLocation} from "../utils"

const Description = styled.div`
  margin-top: ${p => `${p.theme.space[5]}px`};
  ${description}
`

const CardContainer = styled(Flex)`
  margin: 80px -12px 0; 
  flex-wrap: wrap;
`

const Cell = ({children}) => <Box width={[1, 1 / 2]} px={'12px'} pb={'24px'}>
    {children}
</Box>

export default withLayout()(withRouteData(withWindowLocation(({projects, industries, services, techs, location}) => {
    const query = queryString.parse(location.search);
    const selectedProjects = projects.filter(filterBy(query));

    return <Fragment>
        <Container>
            <Box mt={6} width={2/3}>
                <H1WithBackground>Portfolio</H1WithBackground>
                <Description>
                    For 7 years our specialists have developed more than 70 different projects.
                    The most successful and interesting solutions are presented here.
                </Description>
                <CardContainer>
                    {selectedProjects.map((p,i) => <Cell key={i}>
                            <ProjectCard  project={p}/>
                    </Cell>)}
                </CardContainer>
            </Box>
            <Box width={1/3}>
                <SideNav {...{industries, services, techs}}/>
            </Box>
        </Container>

    </Fragment>

})))
