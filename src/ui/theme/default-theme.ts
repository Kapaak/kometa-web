import { DefaultTheme } from 'styled-components';

import { calculateEmFromPx } from '~/utils/dimensions';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      light: '#DCE9FA',
      main: '#014B8B',
      dark: '#013F6E',
    },
    secondary: {
      light: '#FFCA0F',
      main: '#FFCA0F',
      dark: '#e6b812',
    },
    tetriary: {
      light: '#85FFD1',
      main: '#73F0C0',
      dark: '#5BCBA6',
    },
    error: {
      light: '#FF0000',
      main: '#FF0000',
      dark: '#FF0000',
    },
    success: {
      light: '#34C759',
      main: '#34C759',
      dark: '#34C759',
    },
    grey: {
      100: '#fff',
      200: '#F8F8F8',
      400: '#EDEDED',
      500: '#DADADA',
      600: '#C2C2C2',
      700: '#999999',
      800: '#9A9A9A',
      900: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: '2.4rem',
      fontWeight: 600,
      lineHeight: '3.6rem',
    },
    h2: {
      fontSize: '5.6rem',
      fontWeight: 400,
      lineHeight: '3.5rem',
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: '3rem',
    },
    h4: {
      fontSize: '2.4rem',
      fontWeight: 400,
      lineHeight: '3.6rem',
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
    body3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: '3.2rem',
    },
    body4: {
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
    body5: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: '2.4rem',
    },
    body6: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: '2.4rem',
    },
  },
  maxWidth: {
    small: '108rem',
    main: '145rem',
    wide: '145rem',
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
    lg: calculateEmFromPx(1023),
    xl: calculateEmFromPx(1200),
    xxl: calculateEmFromPx(1920),
  },
};
