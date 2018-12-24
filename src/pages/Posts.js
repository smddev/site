import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ items }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {items.map(post => (
        <li key={post.data.slug}>
          <Link to={`/posts/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
