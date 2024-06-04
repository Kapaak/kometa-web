import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StyleContext } from '~/contexts/StyleContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleContext>
        <Component {...pageProps} />
      </StyleContext>
    </QueryClientProvider>
  );
}
