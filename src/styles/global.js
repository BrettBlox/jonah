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
    background: var(--body-bg);
    /* background-color: var(--body-bg); */
    transition: background .3s;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;

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
