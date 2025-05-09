import { NextApiRequest, NextApiResponse } from 'next';

import { getSwimmingPoolDetailById } from '~/libs/sanity/api/swimming-pool-detail';
import { transformSwimmingPoolDetail } from '~/utils/transform-sanity-model';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
    categoryId: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, categoryId } = req.query;

    const swimmingPoolDetail = await getSwimmingPoolDetailById(
      id as string,
      categoryId as string
    );
    return res.json(transformSwimmingPoolDetail(swimmingPoolDetail));
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
