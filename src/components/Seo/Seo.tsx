import Head from 'next/head';

import { data } from './Seo.data';

export const SEO = () => {
  const routeMetaData = data.default;

  return (
    <Head>
      <title>{routeMetaData.title}</title>
      <link rel="icon" href="/icons/kometa-logo-black.svg" />
      <link rel="canonical" href="https://www.kometaplavani.cz" />
      <meta name="title" content={routeMetaData.title} />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content={routeMetaData.keywords} />
      <meta name="description" content={routeMetaData.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kometaplavani.cz/" />
      <meta property="og:title" content={routeMetaData.title} />
      <meta property="og:description" content={routeMetaData.description} />
      <meta
        property="og:image"
        content="/images/banner/social-media-card.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.kometaplavani.cz/" />
      <meta property="twitter:title" content={routeMetaData.title} />
      <meta
        property="twitter:description"
        content={routeMetaData.description}
      />
      <meta
        property="twitter:image"
        content="/images/banner/social-media-card.jpg"
      />
    </Head>
  );
};
