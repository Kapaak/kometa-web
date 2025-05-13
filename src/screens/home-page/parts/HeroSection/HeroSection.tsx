import HeroImage from '~/public/images/banner/hero-img.jpg';

import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import {
  IconButton,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import * as S from './HeroSection.style';

export function HeroSection() {
  return (
    <S.HeroSection>
      <MaxWidth>
        <S.HeroSectionBanner>
          <S.HeroSectionBannerImage
            src={HeroImage}
            placeholder="blur"
            fill
            alt="Plavecký bazén Kraví hora, kde se pořádají kurzy pod záštitou Kometa Brno"
          />
          <S.HeroSectionBannerDescription>
            <VerticalStack gap=".5rem">
              <S.HeroSectionBannerDescriptionTitle>
                Kometa plavání
              </S.HeroSectionBannerDescriptionTitle>
              <S.HeroSectionBannerDescriptionSubtitle>
                Učíme malé neplavce od úplných základů až po šikovné závodníky.
              </S.HeroSectionBannerDescriptionSubtitle>
            </VerticalStack>
            <Text>
              Patříme k největším a nejúspěšnějším plaveckým klubům v ČR.
              Tradice, profesionalita, zkušenost a radost. To je KOMETA BRNO!
            </Text>

            <NextLink href="/dostupne-lekce">
              <IconButton
                variant="outlined"
                color="white"
                icon={<ArrowRight size={20} />}
              >
                Dostupné lekce
              </IconButton>
            </NextLink>
          </S.HeroSectionBannerDescription>
        </S.HeroSectionBanner>
      </MaxWidth>
    </S.HeroSection>
  );
}
