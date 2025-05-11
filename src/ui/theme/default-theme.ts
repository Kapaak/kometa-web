import { DefaultTheme } from 'styled-components';

import { calculateEmFromPx } from '~/utils/dimensions';

const colors: DefaultTheme['colors'] = {
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
};

export const theme: DefaultTheme = {
  colors,
  button: {
    filled: {
      primary: {
        background: colors.primary.main,
        text: colors.grey[200],
        hover: {
          background: colors.primary.dark,
        },
      },
      secondary: {
        background: colors.secondary.main,
        text: colors.primary.main,
        border: colors.secondary.main,
        hover: {
          background: colors.secondary.dark,
          border: colors.secondary.dark,
        },
      },
      tetriary: {
        background: colors.tetriary.main,
        text: colors.grey[900],
        border: colors.tetriary.main,
        hover: {
          border: colors.tetriary.dark,
          background: colors.tetriary.dark,
        },
      },
      success: {
        background: colors.success.main,
        text: colors.grey[200],
        hover: {
          background: colors.success.dark,
        },
      },
      error: {
        background: colors.error.main,
        text: colors.grey[200],
        hover: {
          background: colors.error.dark,
        },
      },
      disabled: {
        background: colors.grey[600],
        text: colors.grey[200],
      },
      white: {
        background: colors.grey[200],
        border: colors.grey[200],
        text: colors.grey[900],
      },
    },
    outlined: {
      primary: {
        border: colors.primary.main,
        background: 'transparent',
        text: colors.primary.main,
        hover: {
          background: colors.primary.dark,
          text: colors.grey[200],
          border: colors.primary.dark,
        },
      },
      secondary: {
        border: colors.secondary.main,
        background: 'transparent',
        text: colors.secondary.main,
        hover: {
          background: colors.secondary.dark,
          text: colors.grey[200],
          border: colors.secondary.dark,
        },
      },
      tetriary: {
        border: colors.tetriary.main,
        background: 'transparent',
        text: colors.tetriary.main,
        hover: {
          background: colors.tetriary.dark,
          text: colors.grey[200],
          border: colors.tetriary.dark,
        },
      },
      success: {
        border: colors.success.main,
        background: 'transparent',
        text: colors.success.main,
        hover: {
          background: colors.success.dark,
          text: colors.grey[200],
          border: colors.success.dark,
        },
      },
      error: {
        border: colors.error.main,
        background: 'transparent',
        text: colors.error.main,
        hover: {
          background: colors.error.dark,
          text: colors.grey[200],
          border: colors.error.dark,
        },
      },
      disabled: {
        border: colors.grey[600],
        background: 'transparent',
        text: colors.grey[600],
      },
      white: {
        border: colors.grey[200],
        background: 'transparent',
        text: colors.grey[200],
      },
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
    h5: {
      fontSize: '2.2rem',
      fontWeight: 500,
      lineHeight: '2.2rem',
    },
    body1: {
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
    body2: {
      fontSize: '1.6rem',
      fontWeight: 300,
      lineHeight: '2.4rem',
    },
    body3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: '2.4rem',
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
