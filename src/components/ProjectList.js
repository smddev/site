import React from 'react'
import {Link} from 'react-static'

export default ({projects}) =>
    <ul>{projects.map(project =>
        <li key={project.data.slug}>
            <Link to={`/projects/${project.data.slug}`}>{project.data.title}</Link>
        </li>)}
    </ul>
