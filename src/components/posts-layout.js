import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/global'
import SEO from './seo'

const PostMain = styled.main`
  width: var(--max-width);
  max-width: 90vw;
  margin: 11rem auto 4rem;
  flex-grow: 1;

  > * + * {
    margin-top: 4em;
  }
`

const PostBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const PostLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query PostsSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <GlobalStyle />
      <PostBody>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PostMain>{children}</PostMain>
        <Footer />
      </PostBody>
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout
