import React from 'react'
import {withRouteData} from "react-static";
import Markdown from "react-markdown";
import {H1} from "../atoms";

const MemberList = ({members}) =>
    <ul>
        {
            members.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>

export default withRouteData(({page, data}) => (
    <div>
        <H1>{page.data.title}</H1>
        <p>{page.data.subtitle}</p>
        <p>{page.data.intro}</p>
        <Markdown source={page.content} escapeHtml={false}/>
        <h2>Management team</h2>
        <MemberList members={data.members}/>
    </div>
))
