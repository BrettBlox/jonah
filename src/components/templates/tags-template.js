import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { motion } from 'framer-motion'

import PostPreview from '../post-preview'
import PostsGrid from '../posts-grid'
import ReadLink from '../read-link'

import { primary, secondary } from '../../variants'
import usePosts from '../../hooks/use-posts'
import SEO from '../seo'

const Tags = ({ pageContext, data }) => {
  const posts = usePosts()
  const { tag } = pageContext
  const seoTag = tag.charAt(0).toUpperCase() + tag.slice(1)
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged "${tag}"`
  return (
    <>
      <SEO title={seoTag} />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.h1 id='tag-header' variants={primary}>
          {tagHeader}
        </motion.h1>
        <motion.section
          css={`
            margin-top: 0;
          `}
          aria-labelledby='tag-header'
          variants={secondary}
        >
          <PostsGrid columns='1fr'>
            {posts.map(post => post.tags.includes(tag) && <PostPreview key={post.slug} post={post} />)}
          </PostsGrid>
        </motion.section>
        <motion.div variants={secondary}>
          <ReadLink to='/writing'>&larr; All Writing</ReadLink>
        </motion.div>
      </motion.div>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
