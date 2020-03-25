import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/global'
import SEO from './seo'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={`
          padding: 2rem calc((100vw - 1140px) / 2) 2rem;
          width: 100%;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
