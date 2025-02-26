import { CookieConsent, CookieConsentState, CookieConsentType } from '~/types';

export const initializeCookieConsent = (
  defaultValue?: CookieConsentState | boolean
) => {
  return Object.values(CookieConsentType).reduce(
    (acc, name) => ({ ...acc, [name]: defaultValue ?? false }),
    {}
  );
};

/**
 * Checks if the user has given consent to all essential cookies.
 * These consents are required in order to use some analytics and tracking services.
 * @param cookieConsent
 * @returns boolean
 */
export function hasEssentialAnalyticsConsents(cookieConsent?: CookieConsent) {
  if (!cookieConsent) {
    return false;
  }

  const storageConsentGranted =
    cookieConsent[CookieConsentType.AD_STORAGE] === 'granted';

  const analyticsConsentGranted =
    cookieConsent[CookieConsentType.ANALYTICS_STORAGE] === 'granted';

  return storageConsentGranted && analyticsConsentGranted;
}

export const transformCookieConsent = (
  cookieConsent: Record<string, boolean>
): CookieConsent => {
  return Object.entries(cookieConsent).reduce((acc, [key, value]) => {
    acc[key] = value ? 'granted' : 'denied';
    return acc;
  }, {} as CookieConsent);
};

export const updateCookieConsent = (acceptedConsent: CookieConsent) => {
  if (!acceptedConsent) {
    return;
  }

  localStorage.setItem('cookie_consent', JSON.stringify(acceptedConsent));
};

export const cookieConsentGiven = (): undefined | CookieConsent => {
  if (typeof window === 'undefined') return;

  const cookieConsents = localStorage.getItem('cookie_consent');

  if (!cookieConsents) {
    return;
  }

  return JSON.parse(cookieConsents);
};
