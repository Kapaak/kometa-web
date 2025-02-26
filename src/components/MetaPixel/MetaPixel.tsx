import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init(process.env.NEXT_PUBLIC_METAPIXEL_KEY ?? '', undefined, {
  autoConfig: true,
  debug: process.env.NODE_ENV === 'development',
});

ReactPixel.revokeConsent();

export function MetaPixel() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => ReactPixel.pageView();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}
