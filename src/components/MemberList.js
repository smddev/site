import React from 'react'
import {Link} from 'react-static'

export default ({members}) =>
    <ul>{members.map(member =>
        <li key={member.data.slug}>
            <Link to={`/projects/${member.data.slug}`}>{member.data.title}</Link>
        </li>)}
    </ul>
