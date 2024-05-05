import { ThemeProvider } from 'styled-components'

import { theme } from './default-theme'

export function withTheme(children: React.ReactElement) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
