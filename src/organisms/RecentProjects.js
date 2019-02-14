import React, {Fragment} from 'react'
import {Container} from '../atoms'
import {Box} from '@rebass/grid'
import styled from 'styled-components';
import {space} from 'styled-system';
import {AspectBox, H1, Subtitle} from "../atoms";
import {ProjectCard, PROJECT_CARD_RATIO} from '../components'

const Title = () => <AspectBox ration={PROJECT_CARD_RATIO}>
    <H1 mt={3}>Latest projects</H1>
    <Subtitle width={'60%'}>60+ successfully completed projects around the world</Subtitle>
</AspectBox>

const Cell = ({children}) => <Box width={[1, 1 / 2, 1 / 3]} px={'12px'} pb={'24px'}>
    {children}
</Box>

const RecentProjects = ({projects, className}) => <Container px={'4px'} {...{className, flexWrap:'wrap'}}>
    <Cell>
        <Title/>
    </Cell>

    {projects.map( (p, i)=>
        <Cell key={i}>
            <ProjectCard project={p}/>
        </Cell>
    )}

</Container>

export default styled(RecentProjects)`
  ${space}
`