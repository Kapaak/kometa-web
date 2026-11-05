import AdvancedLecture from '~/public/images/swimming-pool/kravi-hora/service-advanced.jpeg';
import BasicLecture from '~/public/images/swimming-pool/kravi-hora/service-basic.jpeg';
import CompetitiveLecture from '~/public/images/swimming-pool/kravi-hora/service-competitive.jpeg';

import { SwimmingCategorySlug } from '~/types';
import { PoolService } from '~/types/swimming-pool';

// Texts are taken from https://www.plavanikometa.cz/kravi-hora/
export const kraviHoraServices: PoolService[] = [
  {
    id: SwimmingCategorySlug.BASIC,
    title: 'Rybičky a delfínci',
    description:
      'Učíme plavat děti již od 3 let na malém (hrátkovém) bazénku. Děti rozdělujeme dle šikovnosti na rybičky a delfíny.',
    tags: ['děti od 3 let'],
    src: BasicLecture,
    alt: 'Smějící se dítě ve vodě',
  },
  {
    id: SwimmingCategorySlug.ADVANCED,
    title: 'Začátečníci',
    description:
      'Šikovné děti přecházejí na velký 25m bazén na krajní dráhu. Chodí plavat 1 - 2x týdně. Zde se naučí tři plavecké způsoby (kraul, znak, prsa).',
    tags: ['děti'],
    src: AdvancedLecture,
    alt: 'Chlapec s plaveckými brýlemi plave v bazénu',
  },
  {
    id: SwimmingCategorySlug.CONDITION,
    title: 'Kondiční plavání',
    description:
      'Plavci od 7 do 15 let, kteří již umí 3 základní styly, mohou plavat 1 - 3x týdně.',
    tags: ['děti od 7 do 15 let'],
    src: AdvancedLecture,
    alt: 'Chlapec s plaveckými brýlemi plave v bazénu',
  },
  {
    id: 'competitive',
    title: 'Závodníci',
    description:
      'Sportovní plavání je určeno pro děti ve věku 8 až 10 let, které plavání baví a mají neutuchající chuť se zlepšovat.',
    tags: ['děti od 8 do 10 let'],
    href: 'https://klubova-zona.kometaplavani.cz/tymy/zavodni-pripravka',
    src: CompetitiveLecture,
    alt: 'Tři děti v plaveckých čepicích a brýlích u okraje bazénu',
    applicationDisabled: true,
  },
];
