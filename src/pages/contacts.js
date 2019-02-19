import React from 'react'
import {withRouteData} from 'react-static'
import {Container, H1} from "../atoms";
import {Markdown} from "../components";

export default withRouteData(({page}) => (
    <Container>
        <H1>{page.data.title}</H1>
        <p>Email : {page.data.email}</p>
        <p>Phone : {page.data.phone}</p>
        <Markdown source={page.content} escapeHtml={false}/>
    </Container>
))


