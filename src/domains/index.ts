import { SanityImageObject } from '@sanity/image-url/lib/types/types';

import {
  QueryAvailableCoursesResult,
  QueryBlogPostsResult,
  QueryKidsCoursesResult,
  QuerySwimmingPoolsResult,
} from '~/libs/sanity/types';
import { Category, SwimmingVariant } from '~/types';

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

export type SanitySwimmingPool = QuerySwimmingPoolsResult[0];

export type SanityUploadedFile = any[0];

export type SanityBlogPost = QueryBlogPostsResult[0];

export type SanityImage = SanityImageObject & {
  alt: string;
  asset: {
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
};

export type SanityCamps = {
  id?: string;
  name?: string;
  image?: string;
  alt?: string;
  url?: string;
  tags?: string[];
};

export type GetAvailableCourse = {
  id?: string;
  ageFrom?: number;
  ageTo?: number;
  alt?: string;
  day?: string;
  dayId?: number;
  isFull?: boolean;
  isSchoolOrKindergartenAvailable?: boolean;
  name?: string;
  priceSemester?: number;
  priceYear?: number;
  privateSwimmingPool?: boolean;
  timeFrom?: string;
  timeTo?: string;
  url?: string;
  skillLevelId?: SwimmingVariant;
  skillLevel?: SwimmingVariant;
  skillLevelName?: string;
};

export type TransformedBlogPost = {
  id?: string;
  title?: string;
  shortDescription?: string;
  description: any; //TODO -> is wysiwyg type from sanity
  createdAt?: string;
  author?: string;
  readTime?: number;
  image?: string;
  alt?: string;
  tags?: Category[];
  slug?: string;
  url?: string;
  aspectRatio?: number;
  blurDataURL?: string;
};
