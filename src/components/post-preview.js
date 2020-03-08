import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Preview = styled.article``

const PostPreview = ({ post }) => (
  <Preview>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>read this post &rarr;</Link>
  </Preview>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
