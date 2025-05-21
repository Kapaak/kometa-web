import { SanityImageObject } from '@sanity/image-url/lib/types/types';

import {
  QueryAvailableCoursesResult,
  QueryBlogPostsResult,
  QueryLecturesResult,
  QuerySwimmingPoolDetailResult,
  QuerySwimmingPoolMainResult,
  QuerySwimmingPoolsResult,
} from '~/libs/sanity/types';
import { Category, SwimmingCategoryId } from '~/types';

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

export type SanityLecture = QueryLecturesResult[0] & { discount?: number };

export type SanityAvailableLecture = QueryAvailableCoursesResult[0] & {
  name?: string;
  swimmingPoolUrl?: string;
  alt?: string;
  isSchoolOrKindergartenAvailable?: boolean;
  privateSwimmingPool?: boolean;
};

export type SanitySwimmingPool = QuerySwimmingPoolsResult[0];
export type SanitySwimmingPoolPage = QuerySwimmingPoolMainResult;
export type SanitySwimmingPoolDetail = QuerySwimmingPoolDetailResult;

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
  swimmingPoolUrl?: string;
  skillLevelId?: SwimmingCategoryId;
  skillLevel?: SwimmingCategoryId;
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

export type TransformedSwimmingPoolDetail = Omit<
  NonNullable<SanitySwimmingPoolDetail>,
  'imageGallery' | 'uploadedDocuments' | 'announcements' | 'faq'
> & {
  dateRange?: {
    dateFrom?: string;
    dateTo?: string;
  };
  uploadedDocuments?: {
    label?: string;
    file?: string;
  }[];
  imageGallery?: {
    url?: string;
    alt?: string;
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    blurDataURL?: string;
  }[];
};
