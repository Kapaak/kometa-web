import PoolImage from '~/public/images/swimming-pool/kravi-hora/pool.jpeg';

import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

import {
  kraviHoraCategories,
  kraviHoraPoolDetailInformation,
} from './detail-information';
import { kraviHoraServices } from './services';

export const kraviHoraConfig: SwimmingPoolConfig = {
  id: SwimmingPoolId.KRAVI_HORA,
  name: 'Kraví hora',
  title: 'Bazén Kraví hora',
  // TODO(kravi-hora): switch to true once the content is filled in Sanity and here.
  published: false,
  hero: {
    image: PoolImage,
    imageAlt: '25m bazén na Kraví hoře',
  },
  contact: {
    phone: '+420 777 645 517',
    email: 'plakaha@seznam.cz',
  },
  location: {
    address: 'Údolní 76, Brno 602 00',
    image: PoolImage,
    imageAlt: '25m bazén na Kraví hoře',
    // TODO(kravi-hora): venue description, parking and public transport
  },
  contactPerson: {
    name: 'Kateřina Hašková',
    // TODO(kravi-hora): short introduction and photo
  },
  services: kraviHoraServices,
  categories: kraviHoraCategories,
  applicationCategories: kraviHoraCategories,
  detailInformation: kraviHoraPoolDetailInformation,
  firstLectureImageAlt: 'Děti na první lekci na bazénu Kraví hora',
};
