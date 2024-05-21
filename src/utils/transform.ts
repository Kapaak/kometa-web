import { SanityCamps, SanityKidsCourse } from '~/domains';
import { TransformedKidsCourse } from '~/types';

import { urlForImage } from './sanity';

export function transformKidsCourse(
  course: SanityKidsCourse
): TransformedKidsCourse {
  return {
    id: course.id || '',
    name: course.name || '',
    url: course.url || '',
    alt: course.alt || '',
    image: course?.image
      ? urlForImage(course.image)?.url()
      : '/images/place/generic-swimming-pool.jpeg',
    isSchoolOrKindergartenAvailable:
      course.isSchoolOrKindergartenAvailable || false,
    basic:
      (course.basic &&
        course.basic.availableCourses &&
        course.basic.availableCourses.length > 0) ||
      false,
    advanced:
      (course.advanced &&
        course.advanced.availableCourses &&
        course.advanced.availableCourses.length > 0) ||
      false,
    condition:
      (course.condition &&
        course.condition.availableCourses &&
        course.condition.availableCourses.length > 0) ||
      false,
    privateSwimmingPool: course.privateSwimmingPool || false,
  };
}

export function transformCamps(course: SanityCamps): SanityCamps {
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
