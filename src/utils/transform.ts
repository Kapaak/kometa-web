import { SanityCamps, SanityKidsCourse } from '~/domains';
import { QueryAvailableCoursesResult } from '~/libs/sanity/types';
import { SwimmingVariantTranslation, TransformedKidsCourse } from '~/types';

import { urlForImage } from './sanity';

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
  course: QueryAvailableCoursesResult[0]
) {
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
    dayId: course?.dayId,
    day: course?.dayId ? dayTranslation[course.dayId] : '-',
    isFull: course?.isFull,
    priceYear: course?.priceYear,
    priceSemester: course?.priceSemester,
    timeFrom: course?.timeFrom,
    timeTo: course?.timeTo,
    ageFrom: course?.ageFrom,
    ageTo: course?.ageTo,
    skillLevelId: course?.categoryId,
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
