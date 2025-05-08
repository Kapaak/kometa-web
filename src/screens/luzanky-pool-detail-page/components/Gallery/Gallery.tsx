import 'yet-another-react-lightbox/styles.css';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { TransformedSwimmingPoolDetail } from '~/domains';
import { GalleryImageSlide } from '../GalleryImageSlide';
import * as S from './Gallery.style';

const LightboxComponent = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

interface GalleryProps {
  images?: TransformedSwimmingPoolDetail['imageGallery'];
}

const MAX_DISPLAYED_IMAGES = 4;

export function Gallery({ images }: GalleryProps) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightBoxOpen(true);
  };
  const handleClose = () => {
    setLightBoxOpen(false);
    setSelectedImageIndex(0);
  };
  return (
    <>
      <S.ImageGaleryGrid hasImages={(images?.length ?? 0) > 0}>
        {images?.map(
          (image, index) =>
            image?.url && (
              <S.ClickableImageContainer
                key={index}
                onClick={() => handleImageClick(index)}
                hiddenImagesCount={
                  (images?.length ?? 0) > MAX_DISPLAYED_IMAGES &&
                  index === MAX_DISPLAYED_IMAGES - 1
                    ? (images?.length ?? 0) - MAX_DISPLAYED_IMAGES
                    : undefined
                }
              >
                <S.GalleryImage src={image.url} alt={image?.alt ?? ''} fill />
              </S.ClickableImageContainer>
            )
        )}
      </S.ImageGaleryGrid>
      <LightboxComponent
        open={lightBoxOpen}
        index={selectedImageIndex}
        close={handleClose}
        slides={images
          ?.filter((image) => image?.url)
          ?.map((image) => ({
            src: image.url as string,
            alt: image?.alt ?? '',
            width: image.dimensions.width,
            height: image.dimensions.height,
            blurDataURL: image?.blurDataURL,
          }))}
        render={{ slide: GalleryImageSlide }}
      />
    </>
  );
}
