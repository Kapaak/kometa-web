import 'styled-components';

interface ButtonVariant {
  background: string;
  text: string;
  border?: string;
  hover?: {
    border?: string;
    background?: string;
    text?: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
      };
      tetriary: {
        light: string;
        main: string;
        dark: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
      };
      grey: {
        100: string;
        200: string;
        // 300: string
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    button: {
      filled: {
        primary: ButtonVariant;
        secondary: ButtonVariant;
        tetriary: ButtonVariant;
        success: ButtonVariant;
        error: ButtonVariant;
        disabled: ButtonVariant;
        white: ButtonVariant;
      };
      outlined: {
        primary: ButtonVariant;
        secondary: ButtonVariant;
        tetriary: ButtonVariant;
        success: ButtonVariant;
        error: ButtonVariant;
        disabled: ButtonVariant;
        white: ButtonVariant;
      };
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body6: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
    maxWidth: {
      small: string;
      main: string;
      wide: string;
    };
    shadows: {
      main: string;
      dark: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }
}
