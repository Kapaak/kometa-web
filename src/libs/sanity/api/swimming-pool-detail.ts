import { groq } from 'next-sanity';

import { SanitySwimmingPoolDetail } from '~/domains';

import { client } from '../config';

export async function getSwimmingPoolDetailById(
  swimmingPoolId: string,
  categoryId: string
): Promise<SanitySwimmingPoolDetail> {
  const querySwimmingPoolDetail = groq`*[_type == "swimmingPoolDetail" && categoryId == $categoryId && swimmingPool->slug.current == $swimmingPoolId][0]{"id":_id,skillRequirement,announcements,"sampleTraining": sampleTraining.asset->url,imageGallery[]{asset->{...,metadata}},fileUploads,faq}`;

  const swimmingPoolDetailById = await client.fetch(querySwimmingPoolDetail, {
    swimmingPoolId,
    categoryId,
  });

  return swimmingPoolDetailById;
}
