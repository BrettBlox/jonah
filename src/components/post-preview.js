import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import ReadLink from './read-link'
import Tags from './tags'

const Article = styled.article`
  display: flex;
  flex-direction: ${props => props.direction && props.direction};
  border-radius: 0.5em;
  box-shadow: var(--card-shadow);
  background: var(--card-bg);
  overflow: hidden;
  text-align: left;
  transition: all 0.3s ease-out;
  height: 100%;

  :hover {
    box-shadow: var(--card-shadow-hover);
    transform: translateY(-3px) scale(1.01);
  }

  > div {
    flex: 1;
    padding: 1.15em 1.85em;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: ${props => props.direction || 'row'};
      align-items: ${props => (props.direction === 'column' ? 'flex-start' : 'center')};
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 0;
    }

    > p:first-of-type {
      font-weight: bold;
      color: var(--text-tertiary);
    }
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    font-size: 0.875rem;
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
    <Link to={post.slug} aria-label='Read more'>
      <PostImage fluid={post.image.sharp.fluid} alt={post.title} />
    </Link>
    <div>
      <Link to={post.slug}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.date}</p>
      <p>{post.excerpt}</p>
      <div>
        <ReadLink
          css={`
            width: ${direction === 'column' ? '100%' : 'auto'};
            @media screen and (max-width: 767px) {
              width: 100%;
            }
          `}
          to={post.slug}
        >
          read more &rarr;
        </ReadLink>
        <Tags tags={post.tags} />
      </div>
    </div>
  </Article>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  direction: PropTypes.string,
}

export default PostPreview
