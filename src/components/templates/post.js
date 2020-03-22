import React from 'react'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout'
import ReadLink from '../read-link'

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>Written by {post.frontmatter.author}</p>
    <p>{post.frontmatter.date}</p>
    <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
    <ReadLink to='/'>&larr; back to all posts</ReadLink>
  </Layout>
)

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

export default PostTemplate
