const { fmImagesToRelative } = require(`gatsby-remark-relative-images`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('slugify')
const remark = require('remark')
const remarkHTML = require('remark-html')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  if (node.frontmatter.credit) {
    const { credit } = node.frontmatter
    const value = remark()
      .use(remarkHTML)
      .processSync(credit)
      .toString()

    // new node at:
    // fields {
    //   credit_html
    // }
    createNodeField({
      name: `credit`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { glob: "**/content/writing/*" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
            }
            fields {
              slug
              credit
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates/post-template.js`),
      context: {
        slug: node.fields.slug,
        credit: node.fields.credit,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/writing/${slugify(tag.fieldValue, { replacement: '-', lower: true })}/`,
      component: path.resolve(`./src/components/templates/tags-template.js`),
      context: {
        tag: tag.fieldValue,
        slugTag: slugify(tag.fieldValue, { replacement: '-', lower: true }),
      },
    })
  })
}
