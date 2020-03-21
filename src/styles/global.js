import { createGlobalStyle, css } from 'styled-components'

import reset from './reset'

const GlobalStyle = createGlobalStyle`
  ${reset};

  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
