import { css } from 'styled-components'

const vars = css`
  :root {
    --dandelion-gradient: linear-gradient(to top, #526b2d, #f0e130);
    --green: #526b2d;
    --yellow: #f0e130;
    --beige: #b5b3b3;
    --dark-grey: #141618;
    --yellow-rgba: rgba(240, 225, 48, 1);
    --green-rgba: rgba(82, 107, 45, 1);
    --max-width: 1140px;
    --header-width: calc(1140px + 2rem);
    --footer-width: var(--header-width);
  }
`

export default vars
