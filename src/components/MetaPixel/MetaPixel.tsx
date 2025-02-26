import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

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
