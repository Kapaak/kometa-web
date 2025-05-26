export type SeoData = {
  title?: string;
  keywords: string;
  description: string;
  path?: string;
};

const keywords = `Plavání pro děti Brno,
Dětské plavecké kurzy Brno,
Plavecký klub Kometa Brno,
Plavání pro dospělé Brno,
Plavecké kurzy Brno,
Synchronizované plavání Brno,
Závodní plavání,
Závodní plavání Brno,
Plavecké tábory pro děti Brno,
Plavecké lekce pro děti Brno,
Plavecké kurzy pro dospělé Brno,
Plavecká škola Kometa Brno,
Plavání pro předškoláky Brno,
Plavecké soutěže Brno,
Individuální plavecké lekce Brno,
Letní plavecké tábory,
Plavecké aktivity pro děti,
Plavecký trénink pro děti,
Plavecké kurzy pro děti,
Synchronizované plavecké lekce,
Závodní plavání pro děti,
Plavecký sportovní klub Brno
`;

const keywordsLuzanky =
  'plavání Lužánky, bazén Lužánky, bazén za Lužánkami, výuka plavání v Brně, plavání Brno, plavecké kurzy brno, plavání brno, plavání pro děti, plavání s dětmi';

export const defaultSeoData: SeoData = {
  title: 'Plavecká škola | Kometa',
  keywords,
  description:
    'Pod hlavičkou KPSP Kometa Brno (KomBr) se připravují sportovci v bazénovém plavání, dálkovém plavání, synchronizovaném plavání a ve vodním póle',
};

export const data: SeoData[] = [
  {
    title: 'Plavecká škola | Lužánky',
    keywords: keywordsLuzanky,
    path: '/bazeny/luzanky',
    description:
      'Plavecké kurzy pro děti i dospělé. Vedené kvalifikovanými trenéry, kteří působí na bazénech po celém Brně. Přijď si s námí zaplavat a navštiv bazén za Lužánkami.',
  },
];
