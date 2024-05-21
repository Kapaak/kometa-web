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
  image?: string;
  alt?: string;
  url?: string;
  privateSwimmingPool?: boolean;
  isSchoolOrKindergartenAvailable?: boolean;
  basic?: SanityKidsCourseVariant;
  advanced?: SanityKidsCourseVariant;
  condition?: SanityKidsCourseVariant;
};

export type SanityCamps = {
  id?: string;
  name?: string;
  image?: string;
  alt?: string;
  url?: string;
  tags?: string[];
};
