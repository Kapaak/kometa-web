export type FooterContentData = {
  title: string;
  data: {
    label: string;
    details: {
      value: string;
      href?: string;
      action?: 'contact' | 'download';
      external?: boolean;
    }[];
  }[];
};

export const footerMainContentData: FooterContentData[] = [
  {
    title: 'Kontaktní osoba',
    data: [
      {
        label: 'Bazén Lužánky',
        details: [
          {
            value: 'Ing. Anna Matušová',
          },
          {
            value: '+420 773 708 287',
            href: '+420773708287',
            action: 'contact',
          },
          {
            value: 'plavaniluzanky@kometaplavani.cz',
            href: 'plavaniluzanky@kometaplavani.cz',
            action: 'contact',
          },
        ],
      },
      {
        label: 'Bazén Kraví hora',
        details: [
          {
            value: 'Kateřina Hašková',
          },
          {
            value: '+420 777 645 517',
            href: '+420777645517',
            action: 'contact',
          },
          {
            value: 'plakaha@seznam.cz',
            href: 'plakaha@seznam.cz',
            action: 'contact',
          },
        ],
      },
      {
        label: 'Školní bazény, Aquapark Kohoutovice',
        details: [
          {
            value: 'Bc. Petr Hašek',
          },
          {
            value: '+420 776 799 220',
            href: '+420776799220',
            action: 'contact',
          },
          {
            value: 'zakladni.plavani@kometabrno.cz',
            href: 'zakladni.plavani@kometabrno.cz',
            action: 'contact',
          },
        ],
      },
    ],
  },
  {
    title: 'Užitečné odkazy',
    data: [
      {
        label: 'Plavecké kurzy Kometa',
        details: [
          {
            value: 'Kraví hora',
            href: 'https://www.plavanikometa.cz/kravi-hora/',
            external: true,
          },
          {
            value: 'Kohoutovice',
            href: 'https://www.plavanikometa.cz/aquapark-kohoutovice/',
            external: true,
          },
          {
            value: 'Bazénky',
            href: 'https://www.plavanikometa.cz/skolni-bazenky/',
            external: true,
          },
        ],
      },
      {
        label: 'Tábory a letní akce',
        details: [
          {
            value: 'Kraví hora',
            href: 'https://www.plavanikometa.cz/tabor-kravi-hora/',
            external: true,
          },
          {
            value: 'Pisárky',
            href: 'https://www.plavanikometa.cz/tabor-pisarky/',
            external: true,
          },
          {
            value: 'Lužánka',
            href: 'https://www.primestak-brno.cz/',
            external: true,
          },
        ],
      },
    ],
  },
  {
    title: 'Informace',
    data: [
      {
        label: '',
        details: [
          {
            value: 'GDPR',
            href: '/files/VSEOBECNE-PODMINKY.pdf',
            action: 'download',
          },
          {
            value: 'IČO: 44992432',
          },
        ],
      },
    ],
  },
];
