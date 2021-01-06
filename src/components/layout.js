import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import { ThemeStateContext } from '../context/theme-context'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/global'

const Main = styled(motion.main)`
  width: var(--max-width);
  max-width: 90vw;
  margin: 11rem auto 4rem;
  flex-grow: 1;

  > * > * + * {
    margin-top: 3em;
  }

  @media screen and (max-width: 500px) {
    margin: 11rem auto 3rem;
    > * > * + * {
      margin-top: 3em;
    }
  }
`

const Site = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

const Layout = ({ children, location }) => {
  const theme = useContext(ThemeStateContext)

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
      <Helmet
        bodyAttributes={{
          'data-theme': theme,
        }}
      />
      <GlobalStyle />
      <Site>
        <Header siteTitle={data.site.siteMetadata.title} />
        <AnimatePresence exitBeforeEnter>
          <Main
            key={location.pathname}
            initial='exit'
            animate='enter'
            exit='exit'
          >
            {children}
          </Main>
        </AnimatePresence>
        <Footer />
      </Site>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
