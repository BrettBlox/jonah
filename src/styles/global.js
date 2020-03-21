import { createGlobalStyle } from 'styled-components'

import reset from './reset'
import vars from './vars'

const GlobalStyle = createGlobalStyle`
    ${vars}
    ${reset}

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
