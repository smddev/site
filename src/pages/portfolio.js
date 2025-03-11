import React, {Fragment} from 'react'
import {withRouteData, withSiteData} from 'react-static'
import {filterBy} from "../components";
import {description, H1WithBackground} from "../atoms";
import queryString from 'query-string'
import {Box, Flex} from "@rebass/grid";
import styled from "styled-components";
import {withLayout} from "../organisms";
import {withWindowLocation} from "../utils"
import ProjectCard from "../components/ProjectCard"
import {withSidebar} from "../hocs"
import { FormattedMessage } from 'react-intl'


const CardContainer = styled(Flex)`
  margin: 80px -12px 0; 
  flex-wrap: wrap;
`

const Cell = ({children}) => <Box width={[1, 1, 1, 1, 1 / 2]} px={'12px'} pb={'24px'}>
    {children}
</Box>

//order of HOCs is important nested HOCs expect props from parent props
export default withLayout()(withRouteData(withSidebar(withSiteData(withWindowLocation(({projects, industries, services, expertise, techs, location, routes}) => {
    const query = queryString.parse(location.search);
    const selectedProjects = projects.filter(filterBy(query));
    const data = {
        industry: industries,
        service: services,
        expertise: expertise,
        tech: techs
    }
    var tag = null
    for (var key in query) {
        if (data[key]) {
            const selector = data[key].find(e => e.data.slug == query[key])
            if (selector) {
                tag = selector.data.title
                break
            }
        }
    }

    return <Fragment>
        <H1WithBackground><FormattedMessage id='message.portfolio'/></H1WithBackground>
        <CardContainer>
            {selectedProjects.map((p, i) => <Cell key={i}>
                <ProjectCard project={p}/>
            </Cell>)}
        </CardContainer>
    </Fragment>
})))))
