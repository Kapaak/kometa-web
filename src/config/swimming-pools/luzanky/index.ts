import HeroImage from '~/public/images/banner/hero-img.jpg';

import { SwimmingCategoryId } from '~/types';
import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

import { luzankyPoolDetailInformation } from './detail-information';
import { luzankyServices } from './services';

export const luzankyConfig: SwimmingPoolConfig = {
  id: SwimmingPoolId.LUZANKY,
  name: 'Lužánky',
  title: 'Bazén za Lužánkami',
  hero: {
    image: HeroImage,
    imageAlt: 'Bazén za Lužánkami',
  },
  contact: {
    phone: '+420 773 708 287',
    phoneNote:
      'Mezi 14:00-18:00 se mi bohužel nedovoláte, jsem na bazéně, kde nemám signál. Napište mi prosím SMS zprávu nebo e-mail. Děkuji za pochopení.',
    email: 'plavaniluzanky@kometaplavani.cz',
  },
  location: {
    address: 'Sportovní 486/4, Brno 602 00',
    description:
      'Areál poskytuje skvělé podmínky pro milovníky plavání. Nachází se zde 25 metrový bazén a také revitalizovaný 50 metrový bazén.',
    image: '/images/swimming-pool/luzanky/pool/luzanky-pool.png',
    imageAlt: 'Obrázek bazénu Lužánky',
    parking: 'Kolem areálu jsou parkovací plochy pro návštěvníky.',
    publicTransport:
      'Nejbližší zastávky MHD jsou Sportovní a Reissigova, na kterých staví autobus číslo 67.',
  },
  contactPerson: {
    name: 'Anna Matušová',
    bio: 'Plavání se věnuji od malička a prošla jsem si celou plaveckou přípravku. Postupem času jsem se začala věnovat trénování dětí a nyní vedu plavecké kurzy a závodní přípravku plavců na Lužánkách.',
    image: '/images/portraits/anna-matusova-pool.png',
    imageAlt: 'Anna Matušová u bazénu Lužánky',
  },
  services: luzankyServices,
  categories: [
    SwimmingCategoryId.BASIC,
    SwimmingCategoryId.ADVANCED,
    SwimmingCategoryId.CONDITION,
    SwimmingCategoryId.ADULT,
    SwimmingCategoryId.KINDERGARTEN,
  ],
  //Schools will not be available to create and application
  applicationCategories: [
    SwimmingCategoryId.BASIC,
    SwimmingCategoryId.ADVANCED,
    SwimmingCategoryId.CONDITION,
    SwimmingCategoryId.ADULT,
    SwimmingCategoryId.KINDERGARTEN,
  ],
  detailInformation: luzankyPoolDetailInformation,
  firstLectureImageAlt: 'Děti na první lekci na bazénu Lužánky',
};
