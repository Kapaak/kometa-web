import { StaticImageData } from 'next/image';
import AdultLecture from '~/public/images/swimming-pool/luzanky/service/service-adult.jpg';
import AdvancedLecture from '~/public/images/swimming-pool/luzanky/service/service-advanced.png';
import BasicLecture from '~/public/images/swimming-pool/luzanky/service/service-basic.png';
import ConditionLecture from '~/public/images/swimming-pool/luzanky/service/service-condition.jpg';
import KindergardenLecture from '~/public/images/swimming-pool/luzanky/service/service-kindergarden.png';
import SchoolLecture from '~/public/images/swimming-pool/luzanky/service/service-school.png';

interface Service {
  title: string;
  description: string;
  href: string;
  tags: string[];
  src: StaticImageData;
  alt: string;
}

export const services: Service[] = [
  {
    title: 'Základní plavání',
    description:
      'Kurzy jsou určené pro děti, které se potřebují naučit plavat.',
    tags: ['děti od 4 let'],
    href: '/bazeny/luzanky/zakladni-plavani',
    src: BasicLecture,
    alt: 'Děti v bazénu pod vodou s brýlemi',
  },
  {
    title: 'Zdokonalovací plavání',
    description:
      'Kurzy jsou určené pro děti, které se v plavání chtějí zdokonalit.',
    tags: ['děti'],
    href: '/bazeny/luzanky/zdokonalovaci-plavani',
    src: AdvancedLecture,
    alt: 'Dítě na plavecké lekci',
  },
  {
    title: 'Kondiční plavání',
    description:
      'Vhodné pro děti, co se nebojí plavat ve velkém bazénu, navíc již ovládají základy plavání.',
    tags: ['děti'],
    href: '/bazeny/luzanky/kondicni-plavani',
    src: ConditionLecture,
    alt: 'Plavkyně uprostřed dráhy na plavecké lekci pro děti',
  },
  {
    title: 'Plavání pro dospělé',
    description:
      'Určeno všem nadšencům, kterým bylo již 18 let a chtějí si zlepšit své plavecké dovednosti.',
    tags: ['dospělí'],
    href: '/bazeny/luzanky/plavani-pro-dospele',
    src: AdultLecture,
    alt: 'Dospělý plavec u konce dráhy na plavecké lekci pro dospělé',
  },
  {
    title: 'Školky',
    description: 'Cílem naší výuky je adaptovat dítě na vodní prostředí.',
    tags: ['organizace MŠMT'],
    href: '/bazeny/luzanky/skolky',
    src: KindergardenLecture,
    alt: 'Plavkyně ve vodě na bazénu Lužánky, která se nadechuje',
  },
  {
    title: 'Školy',
    description: 'Cílem je naučit plavce základům plavání.',
    tags: ['organizace MŠMT'],
    href: '/bazeny/luzanky/skoly',
    src: SchoolLecture,
    alt: 'Plavec s plaveckými brýlemi v mělké vodě na bazénu Lužánky',
  },
];
