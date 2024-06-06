import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import { IconButton, MaxWidth, Text } from '~/ui/components/atoms';

import * as S from './HeroSection.style';

export function HeroSection() {
  return (
    <S.HeroSection>
      <MaxWidth>
        <S.HeroSectionBanner>
          <S.HeroSectionBannerImage
            src="/images/place/banner.jpeg"
            fill
            alt="Plavecký bazén Kraví hora, kde se pořádají kurzy pod záštitou Kometa Brno"
          />
          <S.HeroSectionBannerDescription>
            <S.HeroSectionBannerDescriptionTitle>
              Učíme malé neplavce od úplných základů až po šikovné závodníky.
            </S.HeroSectionBannerDescriptionTitle>
            <Text>
              Patříme k největším a nejúspěšnějším plaveckým klubům v ČR.
              Tradice, profesionalita, zkušenost a radost to je KOMETA BRNO.
            </Text>

            <NextLink href="/dostupne-lekce">
              <IconButton
                variant="outlined"
                transparent
                color="grey"
                customColor="#fff"
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
