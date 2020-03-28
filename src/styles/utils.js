import { css } from 'styled-components'

const utils = css`
  .full-bleed {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .wrapper {
    width: var(--max-width);
    max-width: 90vw;
    margin: 0 auto;
  }

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  .flow {
    --flow-space: 1em;
  }

  .flow > * + * {
    margin-top: 1em;
    margin-top: var(--flow-space);
  }

  .fluid-type {
    --fluid-type-min-size: 1;
    --fluid-type-max-size: 2;
    --fluid-type-min-screen: 20;
    --fluid-type-max-screen: 88;

    font-size: calc(
      (var(--fluid-type-min-size) * 1rem) + (var(--fluid-type-max-size) - var(--fluid-type-min-size)) *
        (100vw - (var(--fluid-type-min-screen) * 1rem)) / (var(--fluid-type-max-screen) - var(--fluid-type-min-screen))
    );
  }
`

export default utils
