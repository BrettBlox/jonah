import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './header'
import Footer from './footer'

import GlobalStyle from '../styles/global'
import SEO from './seo'

const Main = styled(motion.main)`
  width: var(--max-width);
  max-width: 90vw;
  margin: 11rem auto 4rem;
  flex-grow: 1;

  > * > * + * {
    margin-top: 4em;
  }

  @media screen and (max-width: 500px) {
    margin: 11rem auto 3rem;
    > * > * + * {
      margin-top: 3em;
    }
  }
`

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

const Layout = ({ children, location }) => {
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
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} />
        <AnimatePresence exitBeforeEnter>
          <Main key={location.pathname} initial='exit' animate='enter' exit='exit'>
            {children}
          </Main>
        </AnimatePresence>
        <Footer />
      </Body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
