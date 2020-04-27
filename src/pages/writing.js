import React from 'react'
import { motion } from 'framer-motion'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import PostPreview from '../components/post-preview'
import PostsGrid from '../components/posts-grid'
import ReadLink from '../components/read-link'

import { primary, secondary } from '../variants'

import usePosts from '../hooks/use-posts'

const HeroImage = styled(Image)`
  max-height: 400px;
  margin-bottom: 1.45em;
  margin-top: -2.75rem;
`

const WritingPage = () => {
  const posts = usePosts()

  const data = useStaticQuery(graphql`
    query WritingQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/content/page-content/writing.md" } }) {
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
      <SEO title='Writing' lang='en' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.section variants={primary}>
          <HeroImage fluid={frontmatter.image.sharp.fluid} alt='White dandelion image' className='full-bleed' />
        </motion.section>
        <motion.section aria-labelledby='writing-page-title' variants={secondary}>
          <h1 id='writing-page-title'>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </motion.section>
        <motion.section variants={secondary}>
          <PostsGrid columns='1fr' rowHeight='min-content;'>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </motion.section>
        <motion.div variants={secondary}>
          <ReadLink to='/'>&larr; Back Home</ReadLink>
        </motion.div>
      </motion.div>
    </>
  )
}

export default WritingPage
