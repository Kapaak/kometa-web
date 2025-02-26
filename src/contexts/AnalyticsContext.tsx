import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { consent, GoogleAnalytics } from 'nextjs-google-analytics';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { PostHog } from '~/components/PostHog';

import { CookieConsent } from '~/types';
import {
  cookieConsentGiven,
  hasEssentialAnalyticsConsents,
} from '~/utils/cookies';
import { MetaPixelManager } from '~/utils/meta-pixel';

const ReactMetaPixel = dynamic(
  () => import('../components/MetaPixel').then((mod) => mod.MetaPixel),
  {
    ssr: false,
  }
);

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const [defaultCookieConsent, setDefaultCookieConsent] =
    useState<CookieConsent>();

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

      const hasEssentialConsents =
        hasEssentialAnalyticsConsents(cookieConsentGiven());

      if (hasEssentialConsents) {
        posthog.opt_in_capturing();
        MetaPixelManager.grantConsent();
      } else {
        posthog.opt_out_capturing();
        MetaPixelManager.revokeConsent();
      }
    }
  }, [defaultCookieConsent]);

  return (
    <PostHogProvider client={posthog}>
      <SpeedInsights />
      <Analytics />
      <ReactMetaPixel />
      <PostHog />

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
