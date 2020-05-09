import { css } from 'styled-components'

import bg from '../../content/images/bg-waves.png'

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

    --body-bg: #ecece4;
    --header-bg: rgb(247, 247, 247, 0.9);
    --footer-bg: linear-gradient(0deg, rgba(0, 5, 0, 0.5), rgb(0, 5, 0)),
      linear-gradient(90deg, var(--green-500), var(--green-800));
    --card-bg: linear-gradient(180deg, rgba(82, 107, 45, 0.06), rgba(82, 107, 45, 0.06)),
      linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
    --card-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    --card-shadow-hover: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    --text-primary: var(--green-900);
    --text-secondary: var(--green-800);
    --text-tertiary: var(--green-500);

    [data-theme='dark'] {
      --body-bg: rgb(0, 5, 0);
      --header-bg: rgba(0, 5, 0, 0.9);
      --card-bg: var(--green-900);
      --card-shadow: 0 13px 27px -5px var(--green-800);
      --card-shadow-hover: 0 30px 60px -12px var(--green-700);
      --text-primary: var(--beige);
      --text-secondary: var(--green-100);
      --text-tertiary: var(--green-400);
      --beige: #ecece4;
    }
  }
`

export default vars
