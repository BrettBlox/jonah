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
      <h1>Hi people</h1>
      <p>Welcome to Jonah's new Gatsby blog.</p>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage