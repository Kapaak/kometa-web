import 'yet-another-react-lightbox/styles.css';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { useSwimmingPoolDetailPageContext } from '~/contexts/SwimmingPoolDetailPageContext';
import { Button, Flex, Headline, MaxWidth, Text } from '~/ui/components/atoms';
import { GalleryImageSlide } from '../../components';
import * as S from './LuzankyDetailSkillLevelSection.style';

const about = [
  {
    title: 'Co když dítě je dovednostmi na pomezí',
    descriptions: [
      {
        label: undefined,
        text: 'Pokud dítě není zcela připravené na tuto úroveň, ale již má některé dovednosti, doporučujeme přihlásit ho na termín, kde probíhají jak kurzy základního, tak zdokonalovacího plavání. Díky tomu bude moci dítě střídat malý a velký bazén podle potřeby, což mu pomáhá adaptovat se na nové prostředí vlastním tempem.',
      },
    ],
  },
  {
    title: 'Rozdělení do skupin',
    descriptions: [
      {
        label: 'Rybička',
        text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání',
      },
      {
        label: 'Delfínek',
        text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání',
      },
    ],
  },
];

const LightboxComponent = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

export function LuzankyDetailSkillLevelSection() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { swimmingPoolDetail } = useSwimmingPoolDetailPageContext();

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightBoxOpen(true);
  };
  const handleClose = () => {
    setLightBoxOpen(false);
    setSelectedImageIndex(0);
  };

  return (
    <S.Section>
      <MaxWidth>
        <S.SectionContainer>
          <S.ImageGaleryGrid>
            {swimmingPoolDetail?.imageGallery?.map(
              (image, index) =>
                image?.url && (
                  <S.ClickableImageContainer
                    key={index}
                    onClick={() => handleImageClick(index)}
                    hiddenImagesCount={
                      (swimmingPoolDetail?.imageGallery?.length ?? 0) > 4 &&
                      index === 3
                        ? (swimmingPoolDetail?.imageGallery?.length ?? 0) - 4
                        : undefined
                    }
                  >
                    <S.GalleryImage
                      src={image.url}
                      alt={image?.alt ?? ''}
                      fill
                    />
                  </S.ClickableImageContainer>
                )
            )}
          </S.ImageGaleryGrid>
          <LightboxComponent
            open={lightBoxOpen}
            index={selectedImageIndex}
            close={handleClose}
            slides={swimmingPoolDetail?.imageGallery
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

          <S.SectionDescriptionContainer>
            {about?.map((data) => (
              <Flex direction="column" gap=".5rem" key={data.title}>
                <Headline size="small" as="h3">
                  {data.title}
                </Headline>

                <Flex gap="2rem">
                  {data.descriptions.map((description) => (
                    <div key={description.text}>
                      <Flex gap=".5rem" direction="column">
                        {description?.label && (
                          <Text variant="body3">{description.label}</Text>
                        )}
                        <Text variant="body2">{description.text}</Text>
                      </Flex>
                    </div>
                  ))}
                </Flex>
              </Flex>
            ))}

            {swimmingPoolDetail?.sampleTraining && (
              <Link
                href={swimmingPoolDetail?.sampleTraining}
                download
                style={{ alignSelf: 'flex-start' }}
              >
                <Button>Stáhnout vzorový trénink</Button>
              </Link>
            )}
          </S.SectionDescriptionContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
