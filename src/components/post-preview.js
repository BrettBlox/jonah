import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'

import ReadLink from './read-link'

const StyledArticle = styled.article`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: 1rem;
  border-radius: 0.125rem;
  display: flex;

  :first-of-type {
    margin-top: 2rem;
  }
`

const PostPreview = ({ post }) => (
  <StyledArticle>
    <Link
      to={post.slug}
      css={`
        margin: 1rem 1rem 0 0;
        margin-top: 0;
        width: 300px;
      `}
    >
      <Image fluid={post.image.sharp.fluid} alt={post.title} />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </StyledArticle>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
