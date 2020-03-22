import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.fields.slug,
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))
}

export default usePosts
