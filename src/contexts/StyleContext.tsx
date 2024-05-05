import { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '~/ui/theme'

export function StyleContext({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
