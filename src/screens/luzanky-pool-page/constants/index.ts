import { StaticImageData } from 'next/image';
import Camps from '~/public/images/service/camps.png';
import AdultLecture from '~/public/images/swimming-pool/luzanky/service/service-adult.jpg';
import AdvancedLecture from '~/public/images/swimming-pool/luzanky/service/service-advanced.png';
import BasicLecture from '~/public/images/swimming-pool/luzanky/service/service-basic.png';
import ConditionLecture from '~/public/images/swimming-pool/luzanky/service/service-condition.jpg';
import KindergardenLecture from '~/public/images/swimming-pool/luzanky/service/service-kindergarden.png';
import { SwimmingCategorySlug } from '~/types';

interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  src: StaticImageData;
  alt: string;
  applicationDisabled?: boolean;
}

export const services: Service[] = [
  {
    id: SwimmingCategorySlug.BASIC,
    title: 'Základní plavání',
    description:
      'Kurzy jsou určené pro děti, které se potřebují naučit plavat.',
    tags: ['děti od 4 let'],
    href: '/bazeny/luzanky/zakladni-plavani',
    src: BasicLecture,
    alt: 'Děti v bazénu pod vodou s brýlemi',
  },
  {
    id: SwimmingCategorySlug.ADVANCED,
    title: 'Zdokonalovací plavání',
    description:
      'Kurzy jsou určené pro děti, které se v plavání chtějí zdokonalit.',
    tags: ['děti'],
    href: '/bazeny/luzanky/zdokonalovaci-plavani',
    src: AdvancedLecture,
    alt: 'Dítě na plavecké lekci',
  },
  {
    id: SwimmingCategorySlug.CONDITION,
    title: 'Kondiční plavání',
    description:
      'Vhodné pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání.',
    tags: ['děti'],
    href: '/bazeny/luzanky/kondicni-plavani',
    src: ConditionLecture,
    alt: 'Plavkyně uprostřed dráhy na plavecké lekci pro děti',
  },
  {
    id: SwimmingCategorySlug.ADULT,
    title: 'Plavání pro dospělé',
    description:
      'Určeno všem nadšencům, kterým bylo již 18 let a chtějí si zlepšit své plavecké dovednosti.',
    tags: ['dospělí'],
    href: '/bazeny/luzanky/plavani-pro-dospele',
    src: AdultLecture,
    alt: 'Dospělý plavec u konce dráhy na plavecké lekci pro dospělé',
  },
  {
    id: SwimmingCategorySlug.KINDERGARTEN,
    title: 'Školy a Školky',
    description: 'Cílem naší výuky je adaptovat dítě na vodní prostředí.',
    tags: ['organizace MŠMT'],
    href: '/bazeny/luzanky/skolky',
    src: KindergardenLecture,
    alt: 'Plavkyně ve vodě na bazénu Lužánky, která se nadechuje',
  },
  {
    id: 'camps',
    title: 'Příměstské tábory',
    description:
      'Přijďte si s námi užít spoustu zábavy na sportovních příměstských táborech!',
    tags: ['děti od 4 let'],
    href: 'https://www.primestak-brno.cz/',
    src: Camps,
    alt: 'Účastnice příměstského tábora na bazénu Lužánky.',
    applicationDisabled: true,
  },
];
