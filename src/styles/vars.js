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

    --ratio: 1.2;
    --base: 1;
    --base-em: calc(var(--base) * 1em);
    --base-px: calc(var(--base) * 16px);
    --ms0: 1;
    --ms1: var(--ratio); /* 1.2   */
    --ms2: calc(var(--ratio) * var(--ms1)); /* 1.44  */
    --ms3: calc(var(--ratio) * var(--ms2)); /* 1.728 */
    --ms4: calc(var(--ratio) * var(--ms3)); /* 2.074 */
    --ms5: calc(var(--ratio) * var(--ms4)); /* 2.488 */
    --ms6: calc(var(--ratio) * var(--ms5)); /* 2.986 */
    --ms7: calc(var(--ratio) * var(--ms6)); /* 3.583 */
    --fluid-type-min-screen: 20;
    --fluid-type-max-screen: 88;
  }
`

export default vars
