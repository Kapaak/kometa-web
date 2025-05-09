import {
  GetAvailableCourse,
  SanityAvailableCourse,
  SanityBlogPost,
  SanityCamps,
  SanityKidsCourse,
  TransformedBlogPost,
} from '~/domains';
import {
  Category,
  SwimmingVariant,
  SwimmingVariantTranslation,
  TransformedKidsCourse,
} from '~/types';

import { urlForImage } from './sanity';

//Needs to be separated, because I am using here "urlForImage" which is available only on server
//else I would need to pass env as public, which I dont want to

export function transformKidsCourses(
  courses: SanityKidsCourse[]
): TransformedKidsCourse[] {
  return courses.reduce(
    (acc: TransformedKidsCourse[], course: SanityKidsCourse) => {
      let pool = acc.find(
        (pool) => pool.swimmingPoolId === course.swimmingPoolId
      );

      if (!pool) {
        pool = {
          id: course.id ?? '',
          name: course.name ?? '',
          url: course.url ?? '',
          alt: course.alt ?? '',
          image: course?.image
            ? urlForImage(course.image)?.url()
            : '/images/place/generic-swimming-pool.jpeg',
          isSchoolOrKindergartenAvailable:
            course.isSchoolOrKindergartenAvailable ?? false,
          swimmingPoolId: course.swimmingPoolId ?? '',
          privateSwimmingPool: course.privateSwimmingPool ?? false,
          categories: [],
        };
        acc.push(pool);
      }

      if (!pool.categories.includes(course.categoryId ?? '')) {
        pool.categories.push(course.categoryId ?? '');
      }

      return acc;
    },
    []
  );
}

export function transformCamp(course: SanityCamps): SanityCamps {
  return {
    id: course.id || '',
    name: course.name || '',
    url: course.url || '',
    alt: course.alt || '',
    image: course?.image
      ? urlForImage(course.image)?.url()
      : '/images/place/generic-swimming-pool.jpeg',
    tags: course.tags || [],
  };
}

export function transformAvailableCourse(
  course: SanityAvailableCourse
): GetAvailableCourse {
  const variantTranslation = {
    basic: SwimmingVariantTranslation.BASIC,
    advanced: SwimmingVariantTranslation.ADVANCED,
    condition: SwimmingVariantTranslation.CONDITION,
  };
  const dayTranslation: Record<number, string> = {
    1: 'Pondělí',
    2: 'Úterý',
    3: 'Středa',
    4: 'Čtvrtek',
    5: 'Pátek',
  };

  return {
    id: course?.id,
    dayId: Number(course?.dayId),
    day: course?.dayId ? dayTranslation[course.dayId] : '-',
    isFull: course?.isFull ?? false,
    priceYear: course?.priceYear ?? 0,
    priceSemester: course?.priceSemester ?? 0,
    timeFrom: course?.timeFrom ?? '-',
    timeTo: course?.timeTo ?? '-',
    ageFrom: course?.ageFrom ?? 0,
    ageTo: course?.ageTo ?? 0,
    skillLevelId: course?.categoryId as SwimmingVariant,
    skillLevelName: course?.categoryId
      ? variantTranslation[course.categoryId]
      : '-',
    name: course?.name ?? '',
    url: course?.url ?? '',
    alt: course?.alt ?? '',
    isSchoolOrKindergartenAvailable:
      course.isSchoolOrKindergartenAvailable ?? false,
    privateSwimmingPool: course.privateSwimmingPool ?? false,
  };
}

export function transformBlogPost(
  blogPost: SanityBlogPost
): TransformedBlogPost {
  return {
    id: blogPost?.id,
    title: blogPost?.title ?? '',
    shortDescription: blogPost?.shortDescription ?? '',
    description: blogPost?.description,
    createdAt: blogPost?.createdAt ?? '',
    author: blogPost?.author ?? '',
    readTime: blogPost?.readTime ?? NaN,
    image: blogPost?.image
      ? urlForImage(blogPost.image)?.url()
      : '/images/place/generic-swimming-pool.jpeg',
    aspectRatio:
      blogPost?.image?.asset?.metadata?.dimensions?.aspectRatio ?? NaN,
    alt: blogPost?.alt ?? '',
    tags: (blogPost?.tags as Category[]) ?? [],
    url: blogPost?.slug ?? '',
    slug: blogPost?.slug ?? '',
    blurDataURL: blogPost?.image?.asset?.metadata?.lqip,
  };
}
