import { createClient } from 'next-sanity';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-05-19',
  useCdn: false,
};

export const client = createClient(config);
