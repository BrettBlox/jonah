import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'

import { primary, secondary } from '../variants'

import SEO from '../components/seo'
import ReadLink from '../components/read-link'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/page-content/about.md" }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                sharp: childImageSharp {
                  fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node

  return (
    <>
      <SEO title='About' image={frontmatter.image.sharp.fluid.src} lang='en' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <h1 id={frontmatter.title}>{frontmatter.title}</h1>
        <motion.div variants={primary}>
          <Image
            css={`
              width: 400px;
              height: 400px;
              max-width: 60vw;
              max-height: 60vw;
              border-radius: 50%;
              margin: 0 auto;
              float: left;
              shape-outside: circle(50%);
              margin: 1em 2em 1em 0;
            `}
            fluid={frontmatter.image.sharp.fluid}
            imgStyle={{
              objectPosition: '0 -35px',
            }}
          />
        </motion.div>
        <motion.section
          aria-labelledby={frontmatter.title}
          variants={secondary}
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </motion.section>
        <motion.div variants={secondary}>
          <ReadLink to='/'>&larr; Back Home</ReadLink>
        </motion.div>
      </motion.div>
    </>
  )
}

export default AboutPage
