import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'

import usePosts from '../hooks/use-posts'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi Jonah!!!</h1>
      <p>I love you so much and cant wait for you to be able to use this thing.</p>
      <p>Im not sure what you will end up wanting on this homepage. Maybe a handful of posts and some other stuff?</p>
      <p>
        Right now, I was thinking your about page, writing page and contact form would all be on separate pages, but its
        also possible to stick the about and contact on this homepage if you would like
      </p>
      <p>
        Also, you are the love of my life. The most beautiful creature walking this earth. I just want to love you.
        Thats all. Thats all my life is for. You are brilliant. So incredibly wise and this blog will be a way for you
        to share that brilliance with me and the rest of the world. I'm so excited to hear your words.
      </p>
      <h2>Here's some fake blog posts</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
