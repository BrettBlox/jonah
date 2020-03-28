import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import ReadLink from './read-link'

const StyledArticle = styled.article`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.5em;
  box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
  margin-bottom: 1.618em;
  overflow: auto;
  text-align: left;

  :first-of-type {
    margin-top: 2rem;
  }

  div {
    padding: 1.15em 1.85em;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    > a {
      width: 100%;
    }
  }
`

const PostPreview = ({ post }) => (
  <StyledArticle>
    <Link
      to={post.slug}
      css={`
        margin: 1rem 1rem 0 0;
        margin-top: 0;
      `}
    >
      <BackgroundImage
        css={`
          background-position: 50% 50%;
          background-size: cover;
          display: flex;
          justify-content: center;
          height: 100%;
          min-height: 8em;
          min-width: 13em;
          position: relative;
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
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
