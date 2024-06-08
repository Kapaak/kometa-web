import {
  QueryAvailableCoursesResult,
  QueryKidsCoursesResult,
} from '~/libs/sanity/types';
import { SwimmingVariant } from '~/types';

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

export type SanityKidsCourse = QueryKidsCoursesResult[0];

export type SanityAvailableCourse = QueryAvailableCoursesResult[0];

export type SanityCamps = {
  id?: string;
  name?: string;
  image?: string;
  alt?: string;
  url?: string;
  tags?: string[];
};

export type GetAPICourse = {
  ageFrom: number;
  ageTo: number;
  alt: string;
  day: string;
  dayId: number;
  id: string;
  isFull: boolean;
  isSchoolOrKindergartenAvailable: boolean;
  name: string;
  priceSemester: number;
  priceYear: number;
  privateSwimmingPool: boolean;
  timeFrom: string;
  timeTo: string;
  url: string;
  skillLevel: SwimmingVariant;
  skillLevelName: string;
};
