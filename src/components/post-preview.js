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
  background: linear-gradient(180deg, rgba(82, 107, 45, 0.06), rgba(82, 107, 45, 0.06)),
    linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  overflow: hidden;
  text-align: left;
  transition: all 0.3s ease-out;
  height: 100%;

  :hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    transform: translateY(-3px) scale(1.01);
  }

  > div {
    flex: 1;
    padding: 1.15em 1.85em;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    > p:first-of-type {
      font-weight: bold;
      color: var(--green-500);
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
      <div
        css={`
          display: flex;
          flex-direction: ${direction || 'row'};
          align-items: ${direction === 'column' ? 'flex-start' : 'center'};
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          padding: 0;
        `}
      >
        <ReadLink to={post.slug}>read more &rarr;</ReadLink>
        <div
          css={`
            margin: 0;
            padding: 0.25rem 0;
          `}
        >
          {post.tags
            .join('')
            .split(', ')
            .map(tag => (
              <ReadLink
                to={tag}
                css={`
                  font-size: 0.75rem;
                  font-weight: bold;
                  color: var(--green-500);
                  margin-right: 8px;
                  ::after {
                    content: ', ';
                  }
                  &:last-child {
                    margin-right: 0;
                    ::after {
                      content: '';
                    }
                  }
                `}
              >
                {tag}
              </ReadLink>
            ))}
        </div>
      </div>
    </div>
  </Article>
)

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  direction: PropTypes.string,
}

export default PostPreview
