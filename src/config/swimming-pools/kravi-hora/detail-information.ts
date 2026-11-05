import AdvancedLecture from '~/public/images/swimming-pool/kravi-hora/service-advanced.jpeg';
import BasicLecture from '~/public/images/swimming-pool/kravi-hora/service-basic.jpeg';

import { SwimmingCategoryId } from '~/types';
import { PoolInformation } from '~/types/swimming-pool';

import { luzankyPoolDetailInformation } from '../luzanky/detail-information';

// Texts are taken from https://www.plavanikometa.cz/kravi-hora/ and its FAQ.

export const kraviHoraCategories = [
  SwimmingCategoryId.BASIC,
  SwimmingCategoryId.ADVANCED,
  SwimmingCategoryId.CONDITION,
];

// TODO(kravi-hora): dimensions, depth and temperature of both pools are not on the old website.
const LARGE_POOL = {
  poolLength: '25 m',
};

// Lesson length is the same as in Lužánky.
const DURATION = 55;

// General text about the club, shared with Lužánky.
const CLUB_DESCRIPTION =
  luzankyPoolDetailInformation[SwimmingCategoryId.BASIC]?.aboutSection
    ?.description;

// TODO(kravi-hora): when to arrive, changing rooms and handing over of children.
const FIRST_LECTURE: PoolInformation['initialLectureSection'] = {
  requiredEquipment: {
    items: [
      'Plavky a ručník',
      'Plavací čepici a brýle',
      'Přezůvky na bazén',
      'Mýdlo nebo sprchový gel',
    ],
    description:
      'Kartičku se jménem obdržíte na první hodině. Potápěčské brýle ani šnorchl v našich kurzech nepoužíváme.',
  },
  arrivalTime: {
    descriptions: [
      'Potvrzení pro zdravotní pojišťovny a průkazky ke vstupu na bazén budu vydávat 1. den kurzu ve vstupní hale bazénu (po předložení potvrzení o zaplacení).',
    ],
  },
};

export const kraviHoraPoolDetailInformation: Partial<
  Record<SwimmingCategoryId, PoolInformation>
> = {
  [SwimmingCategoryId.BASIC]: {
    image: BasicLecture,
    heroSection: {
      description:
        'Učíme plavat děti již od 3 let na malém (hrátkovém) bazénku. Děti rozdělujeme dle šikovnosti na rybičky a delfíny.',
      duration: DURATION,
    },
    aboutSection:
      luzankyPoolDetailInformation[SwimmingCategoryId.BASIC]?.aboutSection,
    skillLevelSection: {
      data: [
        {
          title: 'Rozdělení do skupin',
          descriptions: [
            {
              label: 'Rybičky (neplavci)',
              text: 'Pomáháme překonat strach z vody. Formou her a zábavného plavání děti učíme základním plaveckým dovednostem, kopání nohou a udržení těla na hladině.',
            },
            {
              label: 'Delfínci (plavci)',
              text: 'Zde se již děti učí základy plaveckých způsobů kraul a znak. Šikovné děti připravujeme na velký bazén.',
            },
          ],
        },
      ],
    },
    initialLectureSection: FIRST_LECTURE,
  },
  [SwimmingCategoryId.ADVANCED]: {
    image: AdvancedLecture,
    heroSection: {
      description:
        'Šikovné děti přecházejí na velký 25m bazén na krajní dráhu. Chodí plavat 1 - 2x týdně. Zde se naučí tři plavecké způsoby (kraul, znak, prsa).',
      duration: DURATION,
      poolParameters: LARGE_POOL,
    },
    aboutSection: { description: CLUB_DESCRIPTION },
    initialLectureSection: FIRST_LECTURE,
  },
  [SwimmingCategoryId.CONDITION]: {
    image: AdvancedLecture,
    heroSection: {
      description:
        '„Plavu rád, ale nechci chodit na závody.“ Pro tyto děti je vhodné kondiční plavání. Plavci od 7 do 15 let, kteří již umí 3 základní styly, mohou plavat 1 - 3x týdně.',
      duration: DURATION,
      poolParameters: LARGE_POOL,
    },
    aboutSection:
      luzankyPoolDetailInformation[SwimmingCategoryId.CONDITION]?.aboutSection,
    skillLevelSection:
      luzankyPoolDetailInformation[SwimmingCategoryId.CONDITION]
        ?.skillLevelSection,
    initialLectureSection: FIRST_LECTURE,
  },
};
