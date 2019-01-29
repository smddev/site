import React from 'react'
import {withRouteData} from "react-static";
import Markdown from "react-markdown";
import {Container, H1} from "../atoms";
import {TeamGallery} from "../components";

export default withRouteData(({page, members}) => (
    <Container>
        <H1>{page.data.title}</H1>
        <p>{page.data.subtitle}</p>
        <p>{page.data.intro}</p>
        <Markdown source={page.content} escapeHtml={false}/>
        <h2>Management team</h2>
        <TeamGallery members={members.filter(m => m.data.category == 'management')}/>
    </Container>
))
