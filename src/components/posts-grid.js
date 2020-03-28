import React from 'react'

const PostsGrid = ({ children, columns }) => (
  <div
    css={`
      display: grid;
      grid-template-columns: ${columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
      grid-gap: 2rem;
    `}
  >
    {children}
  </div>
)

export default PostsGrid
