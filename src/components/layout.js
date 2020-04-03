import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@reach/router'
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

  > * + * {
    margin-top: 4em;
  }
`

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

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
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} />
        <AnimatePresence exitBeforeEnter>
          <Location>{({ location }) => <Main key={location.pathname}>{children}</Main>}</Location>
        </AnimatePresence>
        <Footer />
      </Body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
