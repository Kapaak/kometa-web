import { NextApiRequest, NextApiResponse } from 'next';

import { getSwimmingPoolMainById } from '~/libs/sanity/api/swimming-pool-main';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    const swimmingPoolDetail = await getSwimmingPoolMainById(id as string);

    return res.status(200).json(swimmingPoolDetail);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
