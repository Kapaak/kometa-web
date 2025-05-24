import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { MetaPixelManager } from '~/utils/meta-pixel';

const pageview = () => {
  MetaPixelManager.pageView();
};

export function MetaPixel() {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loaded) return;

    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [loaded, router.events]);

  return (
    <Script
      id="fb-pixel"
      onLoad={() => setLoaded(true)}
      src="/scripts/pixel.js"
      data-pixel-id={process.env.NEXT_PUBLIC_METAPIXEL_KEY}
    />
  );
}
