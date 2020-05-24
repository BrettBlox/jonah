module.exports = {
  siteMetadata: {
    title: `The Humdrum Dandelion`,
    description: `𝙰 𝚌𝚘𝚖𝚖𝚘𝚗 𝚐𝚊𝚛𝚍𝚎𝚗 𝚠𝚎𝚎𝚍’𝚜 𝚖𝚞𝚜𝚒𝚗𝚐𝚜 𝚘𝚗 𝚕𝚒𝚏𝚎, 𝚕𝚘𝚟𝚎, 𝚖𝚘𝚝𝚑𝚎𝚛𝚑𝚘𝚘𝚍, 𝚊𝚗𝚍 𝚝𝚑𝚎 𝚖𝚒𝚗𝚍.`,
    author: `Brett Bloxom`,
    img: `/images/hero-dandelion.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://humdrumdandelion.us18.list-manage.com/subscribe/post?u=234b192e423b934aaba92693f&amp;id=6175c22a91`,
      },
    },
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
