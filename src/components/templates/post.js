import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layout'
import ReadLink from '../read-link'

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>Written by {post.frontmatter.author}</p>
    <p>{post.frontmatter.date}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to='/'>&larr; back to all posts</ReadLink>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        title
      }
    }
  }
`

export default PostTemplate
