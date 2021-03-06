import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'gatsby-image'

import { primary, secondary } from '../variants'

import SEO from '../components/seo'
import PostPreview from '../components/post-preview'
import PostsGrid from '../components/posts-grid'
import Insta from '../components/insta'
import ReadLink from '../components/read-link'

import usePosts from '../hooks/use-posts'

const HeroImage = styled(Image)`
  max-height: 400px;
  margin-bottom: 1.45em;
  margin-top: -2.75rem;
  @media screen and (max-width: 600px) {
    margin-top: -4.3rem;
  }
`

const IndexPage = () => {
  const posts = usePosts()

  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/page-content/index.md" }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                sharp: childImageSharp {
                  fluid {
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
      <SEO title='Home' image={frontmatter.image.sharp.fluid.src} lang='en' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.section variants={primary}>
          <HeroImage
            fluid={frontmatter.image.sharp.fluid}
            alt='Geometric dandelion image'
            className='full-bleed'
          />
        </motion.section>
        <motion.section aria-labelledby='welcome-message' variants={secondary}>
          <h1
            css={`
              text-align: center;
            `}
            id='welcome-message'
          >
            {frontmatter.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </motion.section>
        <motion.section aria-labelledby='recent-writing' variants={secondary}>
          <h2 id='recent-writing'>Recent Writing</h2>
          <PostsGrid>
            <PostPreview
              direction='column'
              key={posts[0].slug}
              post={posts[0]}
            />
            <PostPreview
              direction='column'
              key={posts[1].slug}
              post={posts[1]}
            />
            <PostPreview
              direction='column'
              key={posts[2].slug}
              post={posts[2]}
            />
          </PostsGrid>
          <ReadLink
            css={`
              font-size: 1rem;
              margin-top: 1.5rem;
            `}
            to='/writing'
          >
            All Writing &rarr;
          </ReadLink>
        </motion.section>

        <Insta variants={secondary} />
      </motion.div>
    </>
  )
}

export default IndexPage
