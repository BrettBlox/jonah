import { css } from 'styled-components'

const typography = css`
  body {
    --fluid-type-min-size: 0.875;
    --fluid-type-max-size: 1;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    font-size: calc(
      (var(--fluid-type-min-size) * 1rem) + (var(--fluid-type-max-size) - var(--fluid-type-min-size)) *
        (100vw - (var(--fluid-type-min-screen) * 1rem)) / (var(--fluid-type-max-screen) - var(--fluid-type-min-screen))
    );
    color: #333;
    letter-spacing: 0.08em;
    line-height: 1.58;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    font-size: calc(
      (var(--fluid-type-min-size) * 1rem) + (var(--fluid-type-max-size) - var(--fluid-type-min-size)) *
        (100vw - (var(--fluid-type-min-screen) * 1rem)) / (var(--fluid-type-max-screen) - var(--fluid-type-min-screen))
    );
  }

  h1 {
    --fluid-type-min-size: 1.62671;
    --fluid-type-max-size: 2.25;
  }

  h2 {
    --fluid-type-min-size: 1.38316;
    --fluid-type-max-size: 1.62671;
  }

  h3 {
    --fluid-type-min-size: 1;
    --fluid-type-max-size: 1.38316;
  }

  h4 {
    --fluid-type-min-size: 0.85028;
    --fluid-type-max-size: 1;
  }

  h5 {
    --fluid-type-min-size: 0.78405;
    --fluid-type-max-size: 0.85028;
  }

  h6 {
    --fluid-type-min-size: 0.6115;
    --fluid-type-max-size: 0.78405;
  }
`

export default typography
