import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
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
      <h2>Here's some fake blog posts</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
