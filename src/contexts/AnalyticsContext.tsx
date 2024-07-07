import { useRouter } from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { PropsWithChildren, useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

//Posthog must be defined outside component !
// //disable posthog in development
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <PostHogProvider client={posthog}>
      <Analytics />
      <GoogleAnalytics
        trackPageViews
        defaultConsent="granted"
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      {children}
    </PostHogProvider>
  );
};
