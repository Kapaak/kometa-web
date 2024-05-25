import { createGlobalStyle, css } from 'styled-components';

import { styleReset } from './style-reset';

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors, fonts } }) => css`
    ${styleReset}

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      font-family: ${fonts.primary};
    }

    html {
      font-size: 62.5%;
      min-height: 100%;
      height: 100%;
      scroll-behavior: smooth;
    }

    body {
      min-height: 100%;
      height: 100%;
      font: 400 1.6rem ${fonts.primary};
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: always;
      color: ${colors.grey['900']};
      background-color: ${colors.grey['200']};
    }

    #__next {
      min-height: 100%;
      height: 100%;
    }

    a,
    a[href^='tel'],
    a[href^='mail'] {
      color: inherit;
      text-decoration: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 3rem ${colors.grey[100]} inset;
    }
  `
);
