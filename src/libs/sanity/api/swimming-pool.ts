import { groq } from 'next-sanity';

import { SanitySwimmingPool } from '~/domains';
import { resolveSwimmingPoolUrl } from '~/utils/swimming-pool';

import { client } from '../config';

export async function getSwimmingPools(): Promise<SanitySwimmingPool[]> {
  const querySwimmingPools = groq`*[_type == "swimmingPool"]{"id":_id,name,"slug":slug.current,"location":latLng,address,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool}[]`;

  const swimmingPools: SanitySwimmingPool[] =
    await client.fetch(querySwimmingPools);

  return swimmingPools.map((swimmingPool) => ({
    ...swimmingPool,
    url: resolveSwimmingPoolUrl(swimmingPool.slug, swimmingPool.url),
  }));
}

export async function getSwimmingPoolById(
  swimmingPoolId: string
): Promise<SanitySwimmingPool> {
  const querySwimmingPool = groq`*[_type == "swimmingPool" && slug.current == $swimmingPoolId][0]{"id":_id,name,"slug":slug.current,"location":latLng,address,"alt":image.alt,image{asset->{...,metadata}},url,privateSwimmingPool}`;

  const swimmingPoolById: SanitySwimmingPool = await client.fetch(
    querySwimmingPool,
    {
      swimmingPoolId,
    }
  );

  if (!swimmingPoolById) return swimmingPoolById;

  return {
    ...swimmingPoolById,
    url: resolveSwimmingPoolUrl(swimmingPoolById.slug, swimmingPoolById.url),
  };
}
