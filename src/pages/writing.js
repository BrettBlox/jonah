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
      file(absolutePath: { glob: "**/content/images/white-dandelion.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title='Writing' lang='en' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.section variants={primary}>
          <HeroImage fluid={data.file.sharp.fluid} alt='White dandelion image' className='full-bleed' />
        </motion.section>
        <motion.section variants={primary}>
          <h1>Writing Page</h1>
          <p>
            This Page will list all of your posts and have an archive. Possibly some way of categorizing posts through
            tags so that there can be different collections of similar content. Eventually it might need to be paginated
            so that there are next and previous links at the bottom for getting to newer/older posts. Or it could just
            be a long, scrollable list of posts that can be filterable by those tags I mentioned.
          </p>
          <p>Maybe a sexy little sidebar over there &larr; or over there &rarr;</p>
        </motion.section>
        <motion.section variants={secondary}>
          <PostsGrid columns='1fr'>
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
