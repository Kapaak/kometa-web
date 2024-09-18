import { NextApiRequest, NextApiResponse } from 'next';

import { getBlogPosts } from '~/libs/sanity';
import { transformBlogPost } from '~/utils/transform-sanity-model';

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    // its encoded in the URL as a string
    categories?: string;
    lastId?: string;
    pageSize?: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const { lastId, pageSize, categories } = req.query ?? {};

  const categoriesArray = categories?.split(',');

  try {
    const blogPosts = await getBlogPosts({
      categories: categoriesArray,
      lastId,
      pageSize: Number(pageSize),
    });
    const transformedBlogPosts = blogPosts?.map(transformBlogPost);

    res.json(transformedBlogPosts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
