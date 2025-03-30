import HeroImage from '~/public/images/banner/hero-img.jpg';

import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import { IconButton, MaxWidth, Text } from '~/ui/components/atoms';

import * as S from './LuzankyHeroSection.style';

export function LuzankyHeroSection() {
  return (
    <S.HeroSection>
      <MaxWidth>
        <S.HeroSectionBanner>
          <S.HeroSectionBannerImage
            src={HeroImage}
            placeholder="blur"
            fill
            alt="Bazén za Lužánkami"
          />
          <S.HeroSectionBannerDescription>
            <S.HeroSectionBannerDescriptionTitle>
              Plavecké kurzy TODO: vetsi text
            </S.HeroSectionBannerDescriptionTitle>
            <S.HeroSectionBannerDescriptionTitle>
              Bazén za Lužánkami
            </S.HeroSectionBannerDescriptionTitle>
            <Text>
              Základní plavání pro děti. Svěřte se do rukou profesionálů pod
              záštitou nejúspěšnějšího plaveckého klubu v České republice.
            </Text>

            <NextLink href="/dostupne-lekce">
              <IconButton
                variant="outlined"
                color="white"
                icon={<ArrowRight size={20} />}
              >
                Zobrazit více
              </IconButton>
            </NextLink>
          </S.HeroSectionBannerDescription>
        </S.HeroSectionBanner>
      </MaxWidth>
    </S.HeroSection>
  );
}
