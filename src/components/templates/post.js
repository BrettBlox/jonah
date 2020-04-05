import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { primary, secondary } from '../../variants'

import ReadLink from '../read-link'
import SEO from '../seo'

const PostImage = styled(Image)`
  max-height: 400px;
  margin-bottom: 1.45em;
`

const Post = styled(motion.div)`
  margin-top: -2.75rem;
`

const PostTemplate = ({ data: { markdownRemark: post }, pageContext }) => {
  const { next, prev, image } = pageContext
  return (
    <>
      <SEO title={post.frontmatter.title} lang='en' />
      <Post initial='exit' animate='enter' exit='exit'>
        <motion.div variants={primary}>
          <PostImage fluid={image.sharp.fluid} alt={post.frontmatter.title} className='full-bleed' />
        </motion.div>
        <motion.div variants={secondary}>
          <h1>{post.frontmatter.title}</h1>
          <p>Written by {post.frontmatter.author}</p>
          <p>{post.frontmatter.date}</p>
          <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
        </motion.div>
        {prev && <ReadLink to={prev.fields.slug}>&larr; {prev.frontmatter.title}</ReadLink>}
        {next && <ReadLink to={next.fields.slug}>{next.frontmatter.title} &rarr; </ReadLink>}
      </Post>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        title
      }
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

PostTemplate.defaultProps = {
  data: {},
  pageContext: {},
}

export default PostTemplate
