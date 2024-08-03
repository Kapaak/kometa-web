export type SeoData = Record<
  string,
  { title?: string; keywords: string; description: string }
>;

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

export const data: SeoData = {
  default: {
    title: 'Plavecká škola | Kometa',
    keywords,
    description:
      'Pod hlavičkou KPSP Kometa Brno (KomBr) se připravují sportovci v bazénovém plavání, dálkovém plavání, synchronizovaném plavání a ve vodním póle',
  },
};
