import { SanityKidsCourse, TransformedKidsCourse } from '~/domains';

export function transformKidsCourse(
  course: SanityKidsCourse
): TransformedKidsCourse {
  return {
    id: course.id || '',
    name: course.name || '',
    url: course.url || '',
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
