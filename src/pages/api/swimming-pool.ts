import { NextApiRequest, NextApiResponse } from 'next';

import {
  getSwimmingPoolById,
  getSwimmingPools,
} from '~/libs/sanity/api/swimming-pool';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (id) {
      const swimmingPool = await getSwimmingPoolById(id as string);
      console.log('🚀 ~ swimmingPool:', swimmingPool);
      return res.json(swimmingPool);
    }

    const swimmingPools = await getSwimmingPools();
    res.json(swimmingPools);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
