import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ items }) => (
  <div>
    <h1>Our projects</h1>
    <ul>
      {items.map(project => (
        <li key={project.data.slug}>
          <Link to={`/projects/${project.data.slug}`}>{project.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
