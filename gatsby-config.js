module.exports = {
  siteMetadata: {
    title: `The Humdrum Dandelion`,
    description: `Creative outlet for Jonah's incredible mind and a canvas for her beautiful words.`,
    author: `Brett Bloxom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
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
        name: `writing`,
        path: `${__dirname}/content/writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Page Content`,
        path: `${__dirname}/content/page-content`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `the.humdrum.dandelion`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Humdrum Dandelion`,
        short_name: `Humdrum Dandelion`,
        start_url: `/`,
        icon: `content/icons/dandelion.svg`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
