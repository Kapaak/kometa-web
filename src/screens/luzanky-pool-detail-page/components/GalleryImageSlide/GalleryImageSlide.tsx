import {
  SlideImage,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox';

import { NextSanityImage } from '~/ui/components/atoms';
import * as S from './GalleryImageSlide.style';

type Rect = {
  width: number;
  height: number;
};

function isGalleryImage(slide: SlideImage) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  );
}

interface GalleryImageProps {
  slide: SlideImage & {
    blurDataURL?: string;
  };
  rect: Rect;
}

export function GalleryImageSlide({ slide, rect }: GalleryImageProps) {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isGalleryImage(slide)) return undefined;

  const slideWidth = slide.width || 1;
  const slideHeight = slide.height || 1;

  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slideHeight) * slideWidth))
    : rect.width;

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slideWidth) * slideHeight))
    : rect.height;

  if (!slide.src) return null;

  return (
    <S.GalleryImageSlide width={width} height={height}>
      <NextSanityImage
        fill
        alt={slide.alt ?? ''}
        image={slide.src}
        loading="eager"
        objectFit="contain"
        draggable={false}
        placeholder="blur"
        blurDataURL={slide?.blurDataURL}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </S.GalleryImageSlide>
  );
}
