import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ArrowRight } from '@phosphor-icons/react';

import {
  Headline,
  IconButton,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import * as S from './ContactSection.style';

const LazyGoogleMap = dynamic(
  () =>
    import('~/components/GoogleMap').then((component) => component.GoogleMap),
  {
    ssr: false,
  }
);

type SwimmingPoolBase = {
  id: string | null;
  name: string | null;
  url: string | null;
  address: string;
  isPrivate: boolean;
};

export function ContactSection() {
  const [selectedSwimmingPool, setSelectedSwimmingPool] =
    useState<SwimmingPoolBase | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback((swimmingPool: SwimmingPoolBase) => {
    setSelectedSwimmingPool(swimmingPool);
  }, []);

  useEffect(() => {
    const currentMapRef = mapRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentMapRef) {
      observer.observe(currentMapRef);
    }

    return () => {
      if (currentMapRef) {
        observer.unobserve(currentMapRef);
      }
    };
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
          <div ref={mapRef}>
            {isMapVisible && <LazyGoogleMap onClick={handleClick} />}
          </div>
        </S.ContactSectionContainer>
      </MaxWidth>
    </S.ContactSection>
  );
}
