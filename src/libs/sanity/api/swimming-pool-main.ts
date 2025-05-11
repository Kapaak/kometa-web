import { groq } from 'next-sanity';

import { client } from '../config';

export async function getSwimmingPoolMainById(
  swimmingPoolId: string
): Promise<any> {
  const querySwimmingPoolMain = groq`*[_type == "swimmingPoolMainPage" && swimmingPool->slug.current == $swimmingPoolId][0]{faq,basicInformation,infoBar,announcements}`;

  const swimmingPoolMainById = await client.fetch(querySwimmingPoolMain, {
    swimmingPoolId,
  });

  return swimmingPoolMainById;
}
