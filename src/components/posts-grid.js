import React from 'react'
import PropTypes from 'prop-types'

const PostsGrid = ({ children, columns, rowHeight }) => (
  <div
    css={`
      display: grid;
      grid-template-columns: ${columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
      grid-auto-rows: ${rowHeight || 'auto'};
      grid-gap: 2rem;
      padding-top: 1rem;

      @media screen and (max-width: 844px) {
        grid-auto-rows: auto;
      }
    `}
  >
    {children}
  </div>
)

PostsGrid.propTypes = {
  children: PropTypes.array.isRequired,
  columns: PropTypes.string,
  rowHeight: PropTypes.string,
}

export default PostsGrid
