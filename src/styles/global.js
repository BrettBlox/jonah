import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

import reset from './reset'
import vars from './vars'
import typography from './typography'
import utils from './utils'

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${vars};
  ${typography};

  body {
    background-color: var(--grey-100);
  }

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ${utils};
`

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <GlobalStyle />
  </>
)
