import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import ReadLink from './read-link'

const Article = styled.article`
  display: flex;
  flex-direction: ${props => props.direction && props.direction};
  border-radius: 0.5em;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  background-color: var(--white);
  background: linear-gradient(180deg, rgba(82, 107, 45, 0.04), rgba(82, 107, 45, 0.04)),
    linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  overflow: hidden;
  text-align: left;
  transition: all 0.15s ease-out;
  height: 100%;

  :hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    transform: translateY(-3px) scale(1.01);
  }

  div {
    padding: 1.15em 1.85em;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    > a {
      width: 100%;
    }
  }
`

const PostImage = styled(BackgroundImage)`
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 14em;
  min-width: 26em;
`

const PostPreview = ({ post, direction }) => (
  <Article direction={direction}>
    <Link to={post.slug} aria-label='Read this post'>
      <PostImage fluid={post.image.sharp.fluid} alt={post.title} />
    </Link>
    <div>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
      </Link>

      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </Article>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  direction: PropTypes.string,
}

export default PostPreview
