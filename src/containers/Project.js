import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {Container, H1WithBackground, H1, H2, Subtitle, withBackground} from "../atoms";
import {Box} from '@rebass/grid'
import {Footer, withLayout} from '../organisms'
import styled from "styled-components";
import {space} from "styled-system";
import AspectBox from "../atoms/AspectBox";
import cloudinary from "../cloudinary";
import {Markdown, CategoryList, Carousel} from '../components';
import ProjectCard, {PROJECT_CARD_RATIO} from '../components/ProjectCard';
import background from '../OtherProjects.svg'
import {withSidebar} from '../hocs'
import {DEFAULT_PROJECT_COVER, normalizeName} from "../utils";
import { FormattedMessage } from 'react-intl'


const serviceList = (serviceIds, services) => {
    return services.filter(item => serviceIds && serviceIds.includes(item.data.slug)).
    map(item => item.data.title).
    join(', ');
}

const Cover= styled(AspectBox)`
  background-image: url(${p=>cloudinary.url('site/project/' + (normalizeName(p.item.data.cover) || DEFAULT_PROJECT_COVER), {width: 800, height: 400, crop: 'fill'})});
  background-size: cover;
  background-position: center;
  ${space}
`


const ProjectCarousel = withBackground(background, 937, 542)(styled(({projects, className}) =>
    <Box width={1}{...{className}}>
        <H1> <FormattedMessage id="message.other.projects"/> </H1>
        <Carousel carousel={true} mt={6} width={400} height={400 * PROJECT_CARD_RATIO}>
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


const Project = ({item, techs, services}) => <Fragment>
    <H1WithBackground>{item.data.title}</H1WithBackground>
    <Subtitle>{serviceList(item.data.services, services)}</Subtitle>

    <Cover mt={5} mb={5} ratio={.5} item={item}></Cover>

    <Markdown source={item.content} escapeHtml={false}/>
  {item.data.techs &&
    <Fragment>
      <H2><FormattedMessage id='message.technologies'/></H2>
      <CategoryList large mt={4} categories={techs} categoryIds={item.data.techs}/>
    </Fragment>
  }
</Fragment>

const ProjectWithSidebar = ({item, data}) => {
    const WS = withSidebar(Project);
    return <WS {...{item, ...data}}/>
}

export default withLayout()(withRouteData(({item, data}) => (
    <Fragment>
        <ProjectWithSidebar {...{item, data}}/>
        <Container>
            <ProjectCarousel mt={'200px'} projects={data.projects}/>
        </Container>
    </Fragment>
)))
