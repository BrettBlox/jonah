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

import usePosts from '../hooks/use-posts'

const HeroImage = styled(Image)`
  max-height: 400px;
  margin-bottom: 1.45em;
  margin-top: -2.75rem;
`

const IndexPage = () => {
  const posts = usePosts()

  const indexData = useStaticQuery(graphql`
    query IndexQuery {
      file(absolutePath: { glob: "**/content/images/hero-dandelion.jpg" }) {
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
      <SEO title='Home' lang='en' />
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.div variants={primary}>
          <HeroImage fluid={indexData.file.sharp.fluid} alt='Geometric dandelion image' className='full-bleed' />
        </motion.div>
        <motion.section aria-labelledby='welcome-message' variants={primary}>
          <h1 id='welcom-message'>Hi Jonah!!!</h1>
          <p>I love you so much and cant wait for you to be able to use this thing.</p>
          <p>
            Im not sure what you will end up wanting on this homepage. Maybe a handful of posts and some other stuff?
          </p>
          <p>
            Right now, I was thinking your about page, writing page and contact form would all be on separate pages, but
            its also possible to stick the about and contact on this homepage if you would like
          </p>
          <p>
            Also, you are the love of my life. The most beautiful creature walking this earth. I just want to love you.
            Thats all. Thats all my life is for. You are brilliant. So incredibly wise and this blog will be a way for
            you to share that brilliance with me and the rest of the world. I'm so excited to hear your words.
          </p>
        </motion.section>
        <section aria-labelledby='recent-writing' variants={secondary}>
          <h2
            id='recent-writing'
            css={`
              text-align: center;
            `}
          >
            Recent Writing
          </h2>
          <PostsGrid>
            {posts.map(post => (
              <PostPreview direction='column' key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </section>
        <Insta variants={secondary} />
      </motion.div>
    </>
  )
}

export default IndexPage
