import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'
import ReadLink from '../components/read-link'

import usePosts from '../hooks/use-posts'

const WritingPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title='Writing' lang='en' />
      <section>
        <h1>Writing Page</h1>
        <p>
          This Page will list all of your posts and have an archive. Possibly some way of categorizing posts through
          tags so that there can be different collections of similar content. Eventually it might need to be paginated
          so that there are next and previous links at the bottom for getting to newer/older posts. Or it could just be
          a long, scrollable list of posts that can be filterable by those tags I mentioned.
        </p>
        <p>Maybe a sexy little sidebar over there &larr; or over there &rarr;</p>
      </section>
      <section
        css={`
          margin-bott: 4rem;
        `}
      >
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
      <ReadLink to='/'>&larr; Back Home</ReadLink>
    </Layout>
  )
}

export default WritingPage
