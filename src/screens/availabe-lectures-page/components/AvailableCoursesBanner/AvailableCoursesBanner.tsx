import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import { IconButton, VerticalStack } from '~/ui/components/atoms';

import * as S from './AvailableCoursesBanner.style';

interface AvailableCoursesBannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  actionLabel?: string;
}

export function AvailableCoursesBanner({
  title,
  description,
  imageUrl,
  url,
  actionLabel,
}: AvailableCoursesBannerProps) {
  return (
    <S.AvailableCoursesBanner>
      <S.AvailableCoursesBannerWrapper>
        <VerticalStack gap="3rem">
          <S.AvailableCoursesTitle as="h1">{title}</S.AvailableCoursesTitle>
          <S.AvailableCoursesBannerDescription>
            {description}
          </S.AvailableCoursesBannerDescription>
        </VerticalStack>
        {url && (
          <NextLink href={url}>
            <IconButton
              transparent
              customColor="#fff"
              variant="outlined"
              icon={<ArrowRight size={20} />}
            >
              {actionLabel}
            </IconButton>
          </NextLink>
        )}
      </S.AvailableCoursesBannerWrapper>

      <S.AvailableCoursesBannerImageWrapper>
        {imageUrl && (
          <S.AvailableCoursesBannerImage
            src={imageUrl}
            placeholder="blur"
            blurDataURL={imageUrl}
            fill
            alt="Ženy ve vodě při synchronizovaném plavání na bazéně Komety."
          />
        )}
      </S.AvailableCoursesBannerImageWrapper>
    </S.AvailableCoursesBanner>
  );
}
