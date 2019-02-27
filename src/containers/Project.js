import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {Container, H1WithBackground, H1, H2, Subtitle, withBackground} from "../atoms";
import {Box} from '@rebass/grid'
import {Footer} from '../organisms'
import styled from "styled-components";
import {space} from "styled-system";
import AspectBox from "../atoms/AspectBox";
import cloudinary from "../cloudinary";
import {SideNav, Markdown, TechList, ProjectCard, Carousel, PROJECT_CARD_RATIO} from '../components';
import background from '../OtherProjects.svg'

const serviceList = (serviceIds, services) => {
    return services.filter(item => serviceIds && serviceIds.includes(item.data.slug)).
    map(item => item.data.title).
    join(', ');
}

const Cover= styled(AspectBox)`
  background-image: url(${p=>cloudinary.url('site/project/' + p.item.data.cover)});
  background-size: cover;
  ${space}
`


const ProjectCarousel = withBackground(background, 937, 542)(styled(({projects, className}) =>
    <Box width={1}{...{className}}>
        <H1> Other projects</H1>
        <Carousel mt={6} width={400} height={400 * PROJECT_CARD_RATIO}>
            {projects.
            //reduce((acc, e) => acc.concat([e,e]), []).
            map((p,i) => <ProjectCard  key={i} project={p}/>)}
        </Carousel>
    </Box>
)`
  ${space}
`)`
    right: -355px;
    top: -325px;
`


export default withRouteData(({item, data}) => (
    <Fragment>
        <Container>
            <Box width={2/3}>
                <H1WithBackground>{item.data.title}</H1WithBackground>
                <Subtitle>{serviceList(item.data.services, data.services)}</Subtitle>

                <Cover mt={5} mb={5} ratio={.5} item={item}></Cover>

                <Markdown source={item.content} escapeHtml={false}/>
                <H2>Technologies</H2>
                <TechList large mt={4} techs={data.techs} techIds={item.data.techs}/>
            </Box>
            <Box width={1/3}>
                <SideNav {...data}/>
            </Box>

        </Container>
        <Container>
            <ProjectCarousel mt={'200px'} projects={data.projects}/>
        </Container>

        <Footer mt={10} mb={6}/>
    </Fragment>
))
