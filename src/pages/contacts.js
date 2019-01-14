import React from 'react'
import {withRouteData} from 'react-static'
import {H1} from "../atoms";
import Markdown from "react-markdown";
import framed from "../templates/framed";

export default framed(withRouteData(({page}) => (
    <div>
        <H1>{page.data.title}</H1>
        <p>Email : {page.data.email}</p>
        <p>Phone : {page.data.phone}</p>
        <Markdown source={page.content} escapeHtml={false}/>
    </div>
)))


