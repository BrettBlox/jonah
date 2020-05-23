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
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/content/page-content/about.md" } }) {
        edges {
          node {
            frontmatter {
              title
              image {
                sharp: childImageSharp {
                  fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid_tracedSVG
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
      <SEO title='About' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.div variants={primary}>
          <Image
            css={`
              width: 400px;
              height: 400px;
              max-width: 70vw;
              max-height: 70vw;
              border-radius: 50%;
              margin: 0 auto;
            `}
            fluid={frontmatter.image.sharp.fluid}
            imgStyle={{
              objectPosition: '0 -35px',
            }}
          />
        </motion.div>
        <motion.section aria-labelledby={frontmatter.title} variants={secondary}>
          <h1 id={frontmatter.title}>{frontmatter.title}</h1>
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
