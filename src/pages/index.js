import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import PostsGrid from '../components/posts-grid'
import Insta from '../components/insta'

import usePosts from '../hooks/use-posts'

const easing = [0.175, 0.85, 0.42, 0.96]

const textVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const postsVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.25, duration: 0.5, ease: easing },
  },
}

const instaVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
}

const RecentPosts = styled(motion.section)`
  padding: 4rem 0;
`

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout title='Home' lang='en'>
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.section variants={textVariants}>
          <h1>Hi Jonah!!!</h1>
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
        <RecentPosts variants={postsVariants}>
          <h2
            css={`
              text-align: center;
            `}
          >
            Recent Blog Posts
          </h2>
          <PostsGrid>
            {posts.map(post => (
              <PostPreview direction='column' key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </RecentPosts>
        <Insta variants={instaVariants} />
      </motion.div>
    </Layout>
  )
}

export default IndexPage
