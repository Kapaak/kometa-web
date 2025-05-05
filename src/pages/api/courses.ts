import { NextApiRequest, NextApiResponse } from 'next';

import { getAvailableCourses } from '~/libs/sanity/api/course';
import { SwimmingVariant } from '~/types';
import { transformAvailableCourse } from '~/utils/transform-sanity-model';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    age?: string;
    skillLevel?: SwimmingVariant;
    day?: string;
    time?: string;
    place?: string;
    lastId?: string;
    pageSize?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { age, skillLevel, day, time, lastId, pageSize, place } =
    req.query ?? {};

  try {
    const courses = await getAvailableCourses({
      age: Number(age),
      skillLevel,
      day,
      time,
      lastId,
      place,
      pageSize: Number(pageSize),
    });
    const transformedCourses = courses?.map(transformAvailableCourse);

    res.json(transformedCourses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
