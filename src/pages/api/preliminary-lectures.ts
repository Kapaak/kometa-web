import { NextApiRequest, NextApiResponse } from 'next';
import { getPreliminaryLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';

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
    const preliminaryLectures =
      await getPreliminaryLecturesForSwimmingPoolAndCategory(
        categoryId as string,
        swimmingPoolId as string
      );

    return res.json(preliminaryLectures);
  } catch (error: any) {
    console.log(error, 'err');

    res.status(500).json({ error: error.message });
  }
}
