import { css } from 'styled-components'

const vars = css`
  :root {
    /* Colors */
    --white: #ffffff;
    --black: #000000;
    --beige: #b5b3b3;
    --yellow: #f0e130;
    --yellow-rgba: rgba(240, 225, 48, 1);
    --green-rgba: rgba(82, 107, 45, 1);
    --dandelion-gradient: linear-gradient(to top, #526b2d, #f0e130);

    /* greys */
    --grey-100: #f7fafc;
    --grey-200: #edf2f7;
    --grey-300: #e2e8f0;
    --grey-400: #cbd5e0;
    --grey-500: #a0aec0;
    --grey-600: #718096;
    --grey-700: #4a5568;
    --grey-800: #2d3748;
    --grey-900: #1a202c;

    /* greens */
    --green-100: #b8d193;
    --green-200: #9fb87a;
    --green-300: #859e60;
    --green-400: #6c8547;
    --green-500: #526b2d;
    --green-600: #395214;
    --green-700: #1f3800;
    --green-800: #061f00;
    --green-900: #000500;

    --max-width: 1140px;
    --header-width: calc(1140px + 2rem);
    --footer-width: var(--header-width);
    --fluid-type-min-screen: 20;
    --fluid-type-max-screen: 88;
  }
`

export default vars
