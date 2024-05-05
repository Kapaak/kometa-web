import Head from 'next/head'
import { useRouter } from 'next/router'

import { data } from './head.data'

export const HeadSelector = () => {
  const router = useRouter()

  const currentRoute = router.pathname

  const routeMetaData = data[currentRoute] ?? data.default

  return (
    <Head>
      <title>{routeMetaData.title}</title>
      <link rel="icon" href="/icons/tucnak.svg" />
      <link rel="canonical" href="https://www.plavani-luzanky.cz" />
      <meta name="title" content={routeMetaData.title} />
      <meta name="author" content="Pavel Zapletal & Barbora Novakova" />
      <meta name="keywords" content={routeMetaData.keywords} />
      <meta name="description" content={routeMetaData.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.plavani-luzanky.cz" />
      <meta property="og:title" content={routeMetaData.title} />
      <meta property="og:description" content={routeMetaData.description} />
      <meta property="og:image" content="/images/social-media-card.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.plavani-luzanky.cz" />
      <meta property="twitter:title" content={routeMetaData.title} />
      <meta
        property="twitter:description"
        content={routeMetaData.description}
      />
      <meta property="twitter:image" content="/images/social-media-card.jpg" />
    </Head>
  )
}
