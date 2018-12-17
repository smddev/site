import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ posts: projects }) => (
  <div>
    <h1>Our projects</h1>
    <ul>
      {projects.map(post => (
        <li key={post.data.slug}>
          <Link to={`/projects/post/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
