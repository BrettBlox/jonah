import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import ReadLink from './read-link'

const Preview = styled.article`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.125rem;
`

const PostPreview = ({ post }) => (
  <Preview>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </Preview>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
