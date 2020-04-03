import React from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import PostsGrid from '../components/posts-grid'
import ReadLink from '../components/read-link'

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

const WritingPage = () => {
  const posts = usePosts()

  return (
    <Layout title='Writing' lang='en'>
      <motion.div initial='exit' animate='enter' exit='exit'>
        <motion.section variants={textVariants}>
          <h1>Writing Page</h1>
          <p>
            This Page will list all of your posts and have an archive. Possibly some way of categorizing posts through
            tags so that there can be different collections of similar content. Eventually it might need to be paginated
            so that there are next and previous links at the bottom for getting to newer/older posts. Or it could just
            be a long, scrollable list of posts that can be filterable by those tags I mentioned.
          </p>
          <p>Maybe a sexy little sidebar over there &larr; or over there &rarr;</p>
        </motion.section>
        <section>
          <PostsGrid columns='1fr'>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </PostsGrid>
        </section>
        <ReadLink to='/'>&larr; Back Home</ReadLink>
      </motion.div>
    </Layout>
  )
}

export default WritingPage
