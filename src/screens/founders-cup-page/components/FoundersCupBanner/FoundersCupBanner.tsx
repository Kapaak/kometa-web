import { ArrowRight } from '@phosphor-icons/react';

import { IconButton, VerticalStack } from '~/ui/components/atoms';

import * as S from './FoundersCupBanner.style';

interface FoundersCupBannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  actionLabel?: string;
}

export function FoundersCupBanner({
  title,
  description,
  imageUrl,
  url,
  actionLabel,
}: FoundersCupBannerProps) {
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
          <S.Link href={url}>
            <IconButton
              transparent
              color="white"
              variant="outlined"
              icon={<ArrowRight size={20} />}
            >
              {actionLabel}
            </IconButton>
          </S.Link>
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
