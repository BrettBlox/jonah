import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layout'
import ReadLink from '../read-link'
import SEO from '../seo'

const PostTemplate = ({ data: { markdownRemark: post }, pageContext }) => {
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} lang='en' />
      <h1>{post.frontmatter.title}</h1>
      <p>Written by {post.frontmatter.author}</p>
      <p>{post.frontmatter.date}</p>
      <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
      {prev && <ReadLink to={prev.fields.slug}>&larr; {prev.frontmatter.title}</ReadLink>}
      {next && <ReadLink to={next.fields.slug}>{next.frontmatter.title} &rarr; </ReadLink>}
    </Layout>
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
