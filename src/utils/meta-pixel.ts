import { CookieConsent } from '~/types';

import { hasEssentialAnalyticsConsents } from './cookies';

export class MetaPixelManager {
  private static async getReactPixel() {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    return ReactPixel;
  }

  static async revokeConsent() {
    const ReactPixel = await this.getReactPixel();
    ReactPixel.revokeConsent();
  }

  static async grantConsent() {
    const ReactPixel = await this.getReactPixel();
    ReactPixel.grantConsent();
  }

  static async updateConsent(cookieConsent: CookieConsent) {
    const metaPixelAllowed = hasEssentialAnalyticsConsents(cookieConsent);
    await (metaPixelAllowed ? this.grantConsent() : this.revokeConsent());
  }
}

export function updateMetaPixel(cookieConsent: CookieConsent) {
  const metaPixelAllowed = hasEssentialAnalyticsConsents(cookieConsent);

  if (metaPixelAllowed) {
    MetaPixelManager.grantConsent();
  } else {
    MetaPixelManager.revokeConsent();
  }
}
