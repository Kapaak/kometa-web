import { createClient } from 'next-sanity';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2024-05-19',
  useCdn: false,
};

export const client = createClient(config);
