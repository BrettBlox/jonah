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
      <div
        css={`
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          css={`
            width: var(--max-width);
            max-width: 90vw;
            margin: 11rem auto 4rem;
            flex-grow: 1;

            > * + * {
              margin-top: 4em;
            }
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
