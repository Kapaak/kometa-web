import { DefaultTheme } from 'styled-components'

import { calculateEmFromPx } from '~/utils/dimensions'

export const theme: DefaultTheme = {
  colors: {
    primary: {
      light: '#DCE9FA',
      main: '#2172DD',
    },
    secondary: {
      main: '#FFCA0F',
    },
    tetriary: {
      main: '#73F0C0',
    },
    grey: {
      100: '#fff',
      200: '#F8F8F8',
      900: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: '2.8rem',
      fontWeight: 400,
      lineHeight: '4.8rem',
    },
    h2: {
      fontSize: '5.6rem',
      fontWeight: 400,
      lineHeight: '4.8rem',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '4.8rem',
    },
    body1: {
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
    body2: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
  },
  shadows: {
    main: '0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
    dark: '0px 0px 15px 0px rgba(0, 0, 0, 0.15)',
  },
  fonts: {
    primary: '"Poppins", sans-serif',
    secondary: '"Bebas Neue", sans-serif',
  },
  breakpoints: {
    sm: calculateEmFromPx(600),
    md: calculateEmFromPx(790),
    lg: calculateEmFromPx(1024),
    xl: calculateEmFromPx(1200),
    xxl: calculateEmFromPx(1920),
  },
}
