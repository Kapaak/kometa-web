import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { MetaPixelManager } from '~/utils/meta-pixel';

const pageview = () => {
  MetaPixelManager.pageView();
};

export function MetaPixel() {
  const router = useRouter();

  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <Script
      id="fb-pixel"
      dangerouslySetInnerHTML={{
        __html: `
  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', ${process.env.NEXT_PUBLIC_METAPIXEL_KEY});
  fbq('track', 'PageView');
  `,
      }}
    />
  );
}
