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
      box-sizing: inherit;
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

    //this class puts padding on body and it moves the whole page
    .yarl__no_scroll {
      padding-right: 0 !important;
    }

    br {
      //fixes br height in Firefox to be the same as in Chromium browsers
      margin-bottom: 2.3rem;
    }

    strong {
      font-weight: 600;
    }

    #__next {
      min-height: 100%;
      height: 100%;
      //To prevent the scale down if some item overflows
      /* overflow: auto; */
      //This broke pages and on next page it would retain scroll position
      //TODO: FIX
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
