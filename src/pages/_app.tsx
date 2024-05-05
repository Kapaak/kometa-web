import type { AppProps } from 'next/app'

import { StyleContext } from '~/contexts/StyleContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleContext>
      <Component {...pageProps} />
    </StyleContext>
  )
}
