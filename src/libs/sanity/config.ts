import { createClient } from 'next-sanity';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-05-19',
  useCdn: false,
};

export const client = createClient(config);
