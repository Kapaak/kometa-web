import posthog, { PostHogConfig } from 'posthog-js';

import { CookieConsent, CookieConsentType } from '~/types';

export const PERSON_PROCESSING_MODE: 'always' | 'identified_only' | 'never' =
  (process.env.NEXT_PUBLIC_POSTHOG_PERSON_PROCESSING_MODE as any) ||
  'identified_only';

/**
 * Below is an example of a consent-driven config for PostHog
 * Lots of things start in a disabled state and posthog will not use cookies without consent
 *
 * Once given, we enable autocapture, session recording, and use localStorage+cookie for persistence via set_config
 * This is only an example - data privacy requirements are different for every project
 */

export const posthogPersistanceAllowed = (
  cookieConsent?: CookieConsent
): boolean => {
  if (!cookieConsent) {
    return false;
  }

  const storageConsentGranted =
    cookieConsent[CookieConsentType.AD_STORAGE] === 'granted';
  const analyticsConsentGranted =
    cookieConsent[CookieConsentType.ANALYTICS_STORAGE] === 'granted';

  return storageConsentGranted && analyticsConsentGranted;
};

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
  const posthogAllowed = posthogPersistanceAllowed(acceptedConsent);

  posthog.set_config(configForConsent(posthogAllowed));
};
