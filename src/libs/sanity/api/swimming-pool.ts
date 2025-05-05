import { groq } from 'next-sanity';

import { SanitySwimmingPool } from '~/domains';

import { client } from '../config';

export async function getSwimmingPools(): Promise<SanitySwimmingPool[]> {
  const querySwimmingPools = groq`*[_type == "swimmingPool"]{"id":_id,name,"slug":slug.current,location,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool,totalLength,depth,temperature}[]`;

  const swimmingPools = await client.fetch(querySwimmingPools);

  return swimmingPools;
}

export async function getSwimmingPoolById(
  swimmingPoolId: string
): Promise<SanitySwimmingPool> {
  const querySwimmingPool = groq`*[_type == "swimmingPool" && slug.current == $swimmingPoolId][0]{"id":_id,name,"slug":slug.current,location,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool,totalLength,depth,temperature}`;

  const swimmingPoolById = await client.fetch(querySwimmingPool, {
    swimmingPoolId,
  });

  return swimmingPoolById;
}
