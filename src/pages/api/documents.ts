import { NextApiRequest, NextApiResponse } from 'next';

import { getDocumentsBySwimmingPoolId } from '~/libs/sanity/api/document';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    swimmingPoolId: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { swimmingPoolId } = req.query ?? {};

  try {
    const documents = await getDocumentsBySwimmingPoolId(swimmingPoolId);

    res.json(documents);
  } catch (error: any) {
    console.log(error, 'err');

    res.status(500).json({ error: error.message });
  }
}
