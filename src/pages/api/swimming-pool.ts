import { NextApiRequest, NextApiResponse } from 'next';

import { getSwimmingPools } from '~/libs/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const courses = await getSwimmingPools();
    res.json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
