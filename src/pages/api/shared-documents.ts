import { NextApiRequest, NextApiResponse } from 'next';

import { getSharedDocuments } from '~/libs/sanity/api/shared-documents';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sharedDocuments = await getSharedDocuments();

    res.setHeader(
      'Cache-Control',
      's-maxage=300, stale-while-revalidate=86400'
    );

    return res.status(200).json(sharedDocuments);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    res.status(500).json({ error: message });
  }
}
