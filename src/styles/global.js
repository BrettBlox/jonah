import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

import reset from './reset'
import vars from './vars'

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${vars};

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <GlobalStyle />
  </>
)
