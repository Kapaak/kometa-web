import NextLink from 'next/link';

import { ArrowRight } from '@phosphor-icons/react';

import { IconButton, VerticalStack } from '~/ui/components/atoms';

import * as S from './MarkerInfo.style';

interface MarkerInfoProps {
  title?: string | null;
  address?: string | null;
  url?: string | null;
}

export function MarkerInfo({ title, address, url }: MarkerInfoProps) {
  return (
    <VerticalStack gap="1.7rem" align="flex-start">
      <S.MarkerInfoText variant="h3">{title}</S.MarkerInfoText>
      <S.MarkerInfoText variant="body2">{address}</S.MarkerInfoText>
      {url && (
        <NextLink href={url}>
          <IconButton variant="outlined" icon={<ArrowRight size={20} />}>
            Navštívit stránku bazénu
          </IconButton>
        </NextLink>
      )}
    </VerticalStack>
  );
}
