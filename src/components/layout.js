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
    <div
      css={`
        position: relative;
      `}
    >
      <SEO />
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={`
          width: var(--max-width);
          max-width: 90vw;
          margin: 200px auto 4rem;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
