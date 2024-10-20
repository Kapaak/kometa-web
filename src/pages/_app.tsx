import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CookieConsentBar, SEO } from '~/components';
import { AnalyticsProvider, StyleContext } from '~/contexts';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsProvider>
        <StyleContext>
          <SEO />
          <Component {...pageProps} />
          <CookieConsentBar />
        </StyleContext>
      </AnalyticsProvider>
    </QueryClientProvider>
  );
}
