import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import {
  IconButton,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import * as S from './PoolHeroSection.style';

export function PoolHeroSection() {
  const { title, hero } = useSwimmingPoolConfig();

  return (
    <S.HeroSection>
      <MaxWidth>
        <S.HeroSectionBanner>
          <S.HeroSectionBannerImage
            src={hero.image}
            placeholder="blur"
            fill
            alt={hero.imageAlt}
          />
          <S.HeroSectionBannerDescription>
            <VerticalStack gap=".5rem">
              <S.HeroSectionBannerDescriptionTitle>
                Plavecké kurzy
              </S.HeroSectionBannerDescriptionTitle>
              <S.HeroSectionBannerDescriptionSubtitle>
                {title}
              </S.HeroSectionBannerDescriptionSubtitle>
            </VerticalStack>

            <Text>
              Svěřte se do rukou profesionálů pod záštitou nejúspěšnějšího
              plaveckého klubu v České republice.
            </Text>

            <NextLink href="#service">
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
