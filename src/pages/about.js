import React from 'react'
import {withRouteData} from "react-static";
import Markdown from "react-markdown";
import {H1} from "../atoms";
import framed from "../templates/framed";

const MemberList = ({members}) =>
    <ul>
        {
            members.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>

export default framed(withRouteData(({page, members}) => (
    <div>
        <H1>{page.data.title}</H1>
        <p>{page.data.subtitle}</p>
        <p>{page.data.intro}</p>
        <Markdown source={page.content} escapeHtml={false}/>
        <h2>Management team</h2>
        <MemberList members={members}/>
    </div>
)))
