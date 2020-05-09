import React from 'react'
import Layout from './src/components/layout'
import ThemeContextProvider from './src/context/theme-context'

const transitionDelay = 500

export const wrapPageElement = ({ element, props }) => (
  <ThemeContextProvider>
    <Layout {...props}>{element}</Layout>
  </ThemeContextProvider>
)

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay)
  }
  return false
}
