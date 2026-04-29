import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';

import { client } from '~/libs/sanity';

const builder = createImageUrlBuilder(client);

//currently usable in server -> not using env with NEXT_PUBLIC
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
