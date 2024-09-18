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

export enum SwimmingVariant {
  BASIC = 'basic',
  ADVANCED = 'advanced',
  CONDITION = 'condition',
}

export enum SwimmingVariantTranslation {
  BASIC = 'Základní',
  ADVANCED = 'Zdokonalovací',
  CONDITION = 'Kondiční',
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
