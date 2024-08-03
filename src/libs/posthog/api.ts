import posthog, { PostHogConfig } from 'posthog-js';

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
export function cookieConsentGiven(): null | boolean {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('cookie_consent') === 'true';
}

export const configForConsent = (): Partial<PostHogConfig> => {
  const consentGiven = localStorage.getItem('cookie_consent') === 'true';

  return {
    persistence: consentGiven ? 'localStorage+cookie' : 'memory',
    disable_surveys: !consentGiven,
    autocapture: consentGiven,
    disable_session_recording: !consentGiven,
  };
};

export const updatePostHogConsent = (consentGiven: boolean) => {
  if (consentGiven) {
    localStorage.setItem('cookie_consent', 'true');
  } else {
    localStorage.setItem('cookie_consent', 'false');
  }

  posthog.set_config(configForConsent());
};
