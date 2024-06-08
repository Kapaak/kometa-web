import { NextApiRequest, NextApiResponse } from 'next';

import { getAvailableCourses } from '~/libs/sanity';
import { Gender, SwimmingVariant } from '~/types';
import { transformAvailableCourse } from '~/utils/transform';

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

  const transformedCourses = courses?.map(transformAvailableCourse);
  res.json(transformedCourses);
}
