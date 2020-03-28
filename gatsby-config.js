module.exports = {
  siteMetadata: {
    title: `The Humdrum Dandelion`,
    description: `Jo's personal website and blog.`,
    author: `Brett Bloxom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: ['.mdx', '.md'],
    //     defaultLayout: {
    //       // blog: require.resolve('./src/components/blog-layout.js'),
    //       default: require.resolve('./src/components/layout.js'),
    //     },
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `The Humdrum Dandelion`,
    //     short_name: `Humdrum Dandelion`,
    //     start_url: `/`,
    //     icon: `content/images/dandelion.svg`,
    //   },
    // },
    `gatsby-plugin-netlify-cms`,
  ],
}
