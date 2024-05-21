import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from '~/libs/sanity';

const builder = imageUrlBuilder(client);

//currently usable in server -> not using env with NEXT_PUBLIC
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
