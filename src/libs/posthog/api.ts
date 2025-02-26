import posthog, { PostHogConfig } from 'posthog-js';

import { CookieConsent } from '~/types';
import { hasEssentialAnalyticsConsents } from '~/utils/cookies';

export const PERSON_PROCESSING_MODE: 'always' | 'identified_only' | 'never' =
  (process.env.NEXT_PUBLIC_POSTHOG_PERSON_PROCESSING_MODE as any) ||
  'identified_only';

export const configForConsent = (
  consentGiven?: boolean
): Partial<PostHogConfig> => {
  return {
    persistence: consentGiven ? 'localStorage+cookie' : 'memory',
    disable_surveys: !consentGiven,
    autocapture: consentGiven,
    disable_session_recording: !consentGiven,
  };
};

export const updatePostHogConsent = (acceptedConsent: CookieConsent) => {
  const posthogAllowed = hasEssentialAnalyticsConsents(acceptedConsent);

  posthog.set_config(configForConsent(posthogAllowed));
};
