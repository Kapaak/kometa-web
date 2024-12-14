import NextLink from 'next/link';
import { useCallback, useState } from 'react';

import { ArrowRight } from '@phosphor-icons/react';

import { GoogleMap } from '~/components/GoogleMap';
import {
  Headline,
  IconButton,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import * as S from './ContactSection.style';

interface ContactSectionProps {}

type SwimmingPoolBase = {
  id: string | null;
  name: string | null;
  url: string | null;
  address: string;
  isPrivate: boolean;
};

export function ContactSection({}: ContactSectionProps) {
  const [selectedSwimmingPool, setSelectedSwimmingPool] =
    useState<SwimmingPoolBase | null>(null);

  const handleClick = useCallback((swimmingPool: SwimmingPoolBase) => {
    setSelectedSwimmingPool(swimmingPool);
  }, []);

  return (
    <S.ContactSection>
      <MaxWidth>
        <S.ContactSectionContainer>
          <VerticalStack justify="space-between">
            <Headline>Podívejte se kde plaveme</Headline>

            {selectedSwimmingPool && (
              <VerticalStack gap="1rem" align="flex-start">
                <S.SwimmingPoolTitle>
                  Bazén {selectedSwimmingPool.name}
                </S.SwimmingPoolTitle>
                <S.SwimmingPoolContent>
                  <Text variant="body2">{selectedSwimmingPool.address}</Text>
                  <Text variant="body2">
                    {selectedSwimmingPool.isPrivate
                      ? 'Dostupný pro veřejnost'
                      : 'Školní bazén'}
                  </Text>
                </S.SwimmingPoolContent>
                <NextLink href={selectedSwimmingPool.url ?? ''}>
                  <IconButton
                    variant="outlined"
                    icon={<ArrowRight size={20} />}
                  >
                    Navštívit stránku bazénu
                  </IconButton>
                </NextLink>
              </VerticalStack>
            )}
          </VerticalStack>
          <GoogleMap onClick={handleClick} />
        </S.ContactSectionContainer>
      </MaxWidth>
    </S.ContactSection>
  );
}
