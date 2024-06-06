import { NextApiRequest, NextApiResponse } from 'next';

import { SanityKidsCourse } from '~/domains';
import { getAvailableCourses } from '~/libs/sanity';
import { Gender, SwimmingVariant, SwimmingVariantTranslation } from '~/types';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    age?: string;
    gender?: Gender;
    skillLevel?: SwimmingVariant;
    day?: string;
    time?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { age, gender, skillLevel, day, time } = req.query ?? {};

  const courses = await getAvailableCourses({
    age: Number(age),
    gender,
    skillLevel,
    day,
    time,
  });

  const transformedCourses = courses?.map(transformCourse);
  const transformedData = flattenDataStructure(transformedCourses);

  res.json(transformedData);
}

//flattens structure and removes sub array availableCourses
function flattenDataStructure(data: any[]) {
  return data?.flatMap((item) => {
    return item.availableCourses.map((course: any) => {
      return {
        ...item,
        ...course,
        availableCourses: undefined,
      };
    });
  });
}

//transforms object with basic,advanced,condition subobjects to array of availableCourses
function transformCourse(course: SanityKidsCourse) {
  const variants = ['basic', 'advanced', 'condition'] as SwimmingVariant[];
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

  const availableCourses = variants.flatMap((variant) => {
    return (
      course?.[variant]?.availableCourses?.map((availableCourse) => ({
        id: availableCourse.id,
        dayId: availableCourse.dayId,
        day: availableCourse?.dayId
          ? dayTranslation[availableCourse.dayId]
          : '-',
        isFull: availableCourse.isFull,
        priceYear: availableCourse.priceYear,
        priceSemester: availableCourse.priceSemester,
        timeFrom: availableCourse.timeFrom,
        timeTo: availableCourse.timeTo,
        ageFrom: course?.[variant]?.ageFrom,
        ageTo: course?.[variant]?.ageTo,
        skillLevel: variant,
        skillLevelName: variantTranslation[variant],
      })) || []
    );
  });

  return {
    id: course.id || '',
    name: course.name || '',
    url: course.url || '',
    alt: course.alt || '',
    isSchoolOrKindergartenAvailable:
      course.isSchoolOrKindergartenAvailable || false,
    privateSwimmingPool: course.privateSwimmingPool || false,
    availableCourses,
  };
}
