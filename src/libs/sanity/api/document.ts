import { groq } from 'next-sanity';
import { SanityUploadedFile } from '~/domains';
import { client } from '../config';

export async function getDocumentsBySwimmingPoolId(
  swimmingPoolId: string
): Promise<SanityUploadedFile[]> {
  const queryDocuments = groq`*[_type == "fileUpload"  &&  swimmingPool->slug.current == $swimmingPoolId]{"id":_id,title,file{
    asset->{...,metadata}
  },order,
    swimmingPool -> {"slug":slug.current}
  }[] | order(order)`;

  const course = await client.fetch(queryDocuments, { swimmingPoolId });

  return course;
}
