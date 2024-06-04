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
  isSchoolOrKindergartenAvailable: boolean;
  basic: boolean;
  advanced: boolean;
  condition: boolean;
  privateSwimmingPool: boolean;
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
