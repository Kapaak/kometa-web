type BannerData = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url?: string;
  actionLabel?: string;
};

export const banner: Record<string, BannerData> = {
  synchro: {
    title: 'Přihlašte se na synchronizované plavání',
    description:
      'Vaše dítě splňuje podmínky pro synchronizaované plavání. Pojďte si to vyzkoušet!',
    imageUrl: '/images/service/synchro.png',
    imageAlt: 'Ženy ve vodě při synchronizovaném plavání na bazéně Komety.',
    url: 'https://klubova-zona.kometaplavani.cz/synchro/synchronizovane-plavani',
    actionLabel: 'Více informací',
  },
  initial: {
    title: 'Učíme malé neplavce od úplných základů až po šikovné závodníky.',
    description:
      'Patříme k největším a nejúspěšnějším plaveckým klubům v ČR. Tradice, profesionalita, zkušenost a radost to je KOMETA BRNO.',
    imageUrl: '/images/place/banner.jpeg',
    imageAlt: 'Plavecký bazén Komety Brno.',
  },
};
