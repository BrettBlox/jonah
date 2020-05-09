import React from 'react'
import Layout from './src/components/layout'
import ThemeContextProvider from './src/context/theme-context'

export const wrapPageElement = ({ element, props }) => (
  <ThemeContextProvider>
    <Layout {...props}>{element}</Layout>
  </ThemeContextProvider>
)
