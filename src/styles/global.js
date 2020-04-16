import React from 'react'
import { createGlobalStyle, css } from 'styled-components'

import reset from './reset'
import vars from './vars'
import typography from './typography'
import utils from './utils'

import bg from '../../content/images/bg-waves.png'

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${vars};
  ${typography};

  body {
    background: linear-gradient(180deg, rgba(82, 107, 45, .1), rgba(82, 107, 45, .1)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, .9)),
    linear-gradient(179deg, hsla(34deg, 38%, 99%, 1) 8em, hsla(34deg, 38%, 99%, 0) 10em),
    linear-gradient(0deg, hsla(34deg, 38%, 99%, 1) 20em, hsla(34deg, 38%, 99%, 0) 42em), url(${bg}) 0 0,
    url(${bg}) 250px -50px, hsla(34deg, 38%, 99%, 0.6);
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
