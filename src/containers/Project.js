import React, {Fragment} from 'react'
import {withRouteData} from 'react-static'
import {Container, H1, Subtitle} from "../atoms";
import {Box} from '@rebass/grid'
import {Footer} from '../organisms'
import styled from "styled-components";
import {space} from "styled-system";
import AspectBox from "../atoms/AspectBox";
import cloudinary from "../cloudinary";
import {SideNav, Markdown, TechList} from '../components';

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

export default withRouteData(({item, data}) => (
    <Fragment>
        <Container>
            <Box width={2/3}>
                <H1>{item.data.title}</H1>
                <Subtitle>{serviceList(item.data.services, data.services)}</Subtitle>

                <Cover mt={5} mb={5} ratio={'50%'} item={item}></Cover>

                <Markdown source={item.content} escapeHtml={false}/>
                <h2>Technologies</h2>
                <TechList large mt={4} techs={data.techs} techIds={item.data.techs}/>
            </Box>
            <Box width={1/3}>
                <SideNav {...data}/>
            </Box>
        </Container>
        <Footer mt={10} mb={6}/>
    </Fragment>
))
