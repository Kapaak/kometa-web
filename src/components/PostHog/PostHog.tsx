import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import {
  cookieConsentGiven,
  hasEssentialAnalyticsConsents,
} from '~/utils/cookies';
import { isDevelopment } from '~/utils/environment';

//Posthog must be defined outside component !
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    opt_out_capturing_by_default: true,
    persistence: hasEssentialAnalyticsConsents(cookieConsentGiven())
      ? 'localStorage+cookie'
      : 'memory',
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    loaded: (posthog) => {
      if (isDevelopment) posthog.debug();
    },
  });
}

export function PostHog() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}
