import { NextApiRequest, NextApiResponse } from 'next';
import {
  getLectures,
  getLecturesForSwimmingPoolAndCategory,
} from '~/libs/sanity/api/lecture';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    categoryId?: string;
    swimmingPoolId?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { categoryId, swimmingPoolId } = req.query ?? {};

  try {
    if (categoryId && swimmingPoolId) {
      const lecturesByCategory = await getLecturesForSwimmingPoolAndCategory(
        categoryId as string,
        swimmingPoolId as string
      );
      return res.json(lecturesByCategory);
    }

    const lectures = await getLectures();

    res.json(lectures);
  } catch (error: any) {
    console.log(error, 'err');

    res.status(500).json({ error: error.message });
  }
}
