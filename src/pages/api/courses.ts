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
    lastId?: string;
    pageSize?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { age, gender, skillLevel, day, time, lastId, pageSize } =
    req.query ?? {};

  const courses = await getAvailableCourses({
    age: Number(age),
    gender,
    skillLevel,
    day,
    time,
    lastId,
    pageSize: Number(pageSize),
  });

  const transformedCourses = courses?.map(transformAvailableCourse);
  res.json(transformedCourses);
}
