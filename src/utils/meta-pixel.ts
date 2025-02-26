import { CookieConsent } from '~/types';

import { hasEssentialAnalyticsConsents } from './cookies';

export class MetaPixelManager {
  private static async getReactPixel() {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    return ReactPixel;
  }

  private static async initPixel() {
    const ReactPixel = await this.getReactPixel();
    ReactPixel.init(process.env.NEXT_PUBLIC_METAPIXEL_KEY ?? '', undefined, {
      autoConfig: true,
      debug: process.env.NODE_ENV === 'development',
    });

    ReactPixel.revokeConsent();
  }

  static async revokeConsent() {
    const ReactPixel = await this.getReactPixel();
    ReactPixel.revokeConsent();
  }

  static async grantConsent() {
    await this.initPixel();

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
