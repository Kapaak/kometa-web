import { useRouter } from 'next/router';
import Script from 'next/script';
import { consent, GoogleAnalytics } from 'nextjs-google-analytics';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Analytics } from '@vercel/analytics/react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { posthogPersistanceAllowed } from '~/libs/posthog';
import { CookieConsent } from '~/types';
import { cookieConsentGiven } from '~/utils/cookies';

//Posthog must be defined outside component !
// //disable posthog in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    opt_out_capturing_by_default: true,
    persistence: posthogPersistanceAllowed(cookieConsentGiven())
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
  const [defaultCookieConsent, setDefaultCookieConsent] =
    useState<CookieConsent>();

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
      setDefaultCookieConsent(cookieConsentGiven());
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && defaultCookieConsent) {
      consent({
        arg: 'update',
        params: defaultCookieConsent,
      });
      posthogPersistanceAllowed(cookieConsentGiven())
        ? posthog.opt_in_capturing()
        : posthog.opt_out_capturing();
    }
  }, [defaultCookieConsent]);

  return (
    <PostHogProvider client={posthog}>
      <Analytics />
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
        strategy="afterInteractive"
      />

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
