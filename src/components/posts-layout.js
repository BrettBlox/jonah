import React from 'react'
import PropTypes from 'prop-types'

import Layout from './layout'

const PostsLayout = ({ children }) => (
  <Layout>
    <main>{children}</main>
  </Layout>
)

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
