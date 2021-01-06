import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

import ReadLink from './read-link'

const Tags = ({ tags }) => (
  <div
    css={`
      margin: 0;
      padding: 0.25rem 0;
    `}
  >
    {tags.map((tag) => (
      <ReadLink
        key={tag}
        to={`/writing/${slugify(tag, { replacement: '-', lower: true })}`}
        css={`
          font-size: 0.75rem;
          font-weight: bold;
          color: var(--text-tertiary);
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
)

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags
