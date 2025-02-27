import { CookieConsent } from '~/types';
import { hasEssentialAnalyticsConsents } from './cookies';

export class MetaPixelManager {
  static async revokeConsent() {
    if (typeof fbq === 'undefined') return;
    fbq('consent', 'revoke');
  }

  static async grantConsent() {
    if (typeof fbq === 'undefined') return;
    fbq('consent', 'grant');
  }

  static async pageView() {
    if (typeof fbq === 'undefined') return;

    if (process.env.NODE_ENV === 'development') console.log('Page View fired');
    fbq('track', 'PageView');
  }

  static async updateConsent(cookieConsent: CookieConsent) {
    const metaPixelAllowed = hasEssentialAnalyticsConsents(cookieConsent);
    await (metaPixelAllowed ? this.grantConsent() : this.revokeConsent());
  }
}
