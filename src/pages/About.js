import React from 'react'
import {withRouteData} from "react-static";

const MemberList = ({members}) =>
    <ul>
        {
            members.map(s => <li key={s.data.slug}>{s.data.title}</li>)
        }
    </ul>

export default withRouteData(({page, data}) => (
    <div>
        <h1>{page.data.title}</h1>
        <p>{page.data.subtitle}</p>
        <p>{page.data.intro}</p>
        <p>{page.content}</p>
        <h2>Management team</h2>
        <MemberList members={data.members}/>
    </div>
))
