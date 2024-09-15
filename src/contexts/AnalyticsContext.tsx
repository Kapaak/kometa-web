import { useRouter } from 'next/router';
import { consent, GoogleAnalytics } from 'nextjs-google-analytics';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

//Posthog must be defined outside component !
// //disable posthog in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    persistence:
      localStorage.getItem('cookie_consent') === 'true'
        ? 'localStorage+cookie'
        : 'memory',
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const [defaultCookieConsent, setDefaultCookieConsent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDefaultCookieConsent(
        localStorage.getItem('cookie_consent') === 'true' ? true : false
      );
    }
  }, []);

  useEffect(() => {
    consent({
      arg: 'update',
      params: {
        ad_storage: defaultCookieConsent ? 'granted' : 'denied',
        analytics_storage: defaultCookieConsent ? 'granted' : 'denied',
      },
    });
  }, [defaultCookieConsent]);

  return (
    <PostHogProvider client={posthog}>
      <Analytics />
      <GoogleAnalytics
        debugMode={process.env.NODE_ENV === 'development'}
        trackPageViews
        defaultConsent={defaultCookieConsent ? 'granted' : 'denied'}
        gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
      />
      {children}
    </PostHogProvider>
  );
};
