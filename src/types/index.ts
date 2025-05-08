export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export enum DayInWeek {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
}

export type TransformedKidsCourse = {
  id: string;
  name: string;
  image: string;
  alt: string;
  url: string;
  swimmingPoolId: string;
  isSchoolOrKindergartenAvailable: boolean;
  privateSwimmingPool: boolean;
  categories: string[];
};

export enum SwimmingCategoryId {
  BASIC = 'basic',
  ADVANCED = 'advanced',
  CONDITION = 'condition',
  ADULT = 'adult',
  KINDERGARTEN = 'kindergarten',
  SCHOOL = 'school',
}

export enum SwimmingCategorySlug {
  BASIC = 'zakladni-plavani',
  ADVANCED = 'zdokonalovaci-plavani',
  CONDITION = 'kondicni-plavani',
  ADULT = 'plavani-pro-dospele',
  KINDERGARTEN = 'skolky',
  SCHOOL = 'skoly',
}

export enum SwimmingCategoryTranslation {
  BASIC = 'Základní plavání',
  ADVANCED = 'Zdokonalovací plavání',
  CONDITION = 'Kondiční plavání',
  ADULT = 'Plavání pro dospělé',
  KINDERGARTEN = 'Školky',
  SCHOOL = 'Školy',
}

export enum Category {
  EQUIPMENT = 'equipment',
  TRAINING = 'training',
  TIPS = 'tips',
  FUN_FACT = 'funFact',
}

export const categoryTranslation = (category: Category) => {
  switch (category) {
    case Category.EQUIPMENT:
      return 'Vybavení';
    case Category.TRAINING:
      return 'Trénink';
    case Category.TIPS:
      return 'Tipy';
    case Category.FUN_FACT:
      return 'Zajímavosti';
  }
};

export type LatLng = google.maps.LatLngLiteral;

export type AvailableCoursesFilterFormData = {
  gender?: string;
  day?: string[] | string;
  time?: string[] | string;
  place?: string[] | string;
  age?: string;
  skillLevel?: string;
};

export enum CookieConsentType {
  AD_STORAGE = 'ad_storage',
  AD_PERSONALIZATION = 'ad_personalization',
  AD_USER_DATA = 'ad_user_data',
  ANALYTICS_STORAGE = 'analytics_storage',
}

export type CookieConsentState = 'granted' | 'denied';

export type CookieConsent = Record<string, CookieConsentState>;

export enum SwimmingPoolId {
  LUZANKY = 'luzanky',
}
