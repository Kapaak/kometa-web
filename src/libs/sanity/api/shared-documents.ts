import { groq } from 'next-sanity';

import { SanitySharedDocuments } from '~/domains';

import { client } from '../config';

export async function getSharedDocuments(): Promise<SanitySharedDocuments> {
  const querySharedDocuments = groq`*[_type == "sharedDocument" && defined(file.asset)] | order(_createdAt asc){"id":_id,label,documentType,"file":file.asset->url}`;

  const sharedDocuments = await client.fetch(querySharedDocuments);

  return sharedDocuments;
}
