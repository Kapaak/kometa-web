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

export type SanityKidsCourseVariant = {
  url?: string;
  ageFrom?: number;
  ageTo?: number;
  availableCourses?: {
    id: string;
    dayId?: number;
    isFull?: boolean;
    priceYear?: number;
    priceSemester?: number;
    timeFrom: string;
    timeTo: string;
  }[];
};

export type SanityKidsCourse = {
  id?: string;
  name?: string;
  url?: string;
  privateSwimmingPool?: boolean;
  isSchoolOrKindergartenAvailable?: boolean;
  basic?: SanityKidsCourseVariant;
  advanced?: SanityKidsCourseVariant;
  condition?: SanityKidsCourseVariant;
};

export type TransformedKidsCourse = {
  id: string;
  name: string;
  url: string;
  isSchoolOrKindergartenAvailable: boolean;
  basic: boolean;
  advanced: boolean;
  condition: boolean;
  privateSwimmingPool: boolean;
};

export enum SwimmingVariantTranslation {
  BASIC = 'Základní',
  ADVANCED = 'Zdokonalovací',
  CONDITION = 'Kondiční',
}
