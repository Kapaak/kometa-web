import { CheckCircle } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { useSwimmingPoolDetailPageContext } from '~/screens/swimming-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { SwimmingCategoryId } from '~/types';
import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';

import * as S from './PoolDetailAboutSection.style';

export function PoolDetailAboutSection() {
  const theme = useTheme();
  const { success } = theme.colors;

  const { categoryId } = useSwimmingPoolDetailPageContext();

  const { detailInformation, name } = useSwimmingPoolConfig();

  const swimmingPoolDetailInformation =
    detailInformation?.[categoryId as SwimmingCategoryId];

  const { description, lectureFocus } =
    swimmingPoolDetailInformation?.aboutSection ?? {};

  return (
    <S.AboutSection>
      <MaxWidth>
        <S.SectionContainer>
          <S.SectionDescriptionContainer>
            <VerticalStack gap="1rem">
              <Headline size="small">Naše filozofie</Headline>
              <Text variant="body2">{description}</Text>
            </VerticalStack>

            {lectureFocus && (
              <VerticalStack gap="1rem">
                <Headline size="small">Co zde děti učíme</Headline>
                <VerticalStack as="ul" gap=".5rem">
                  {lectureFocus?.map((focus) => (
                    <IconText
                      key={focus}
                      icon={CheckCircle}
                      iconColor={success.main}
                      iconSize={17}
                      text={focus}
                      as="li"
                    />
                  ))}
                </VerticalStack>
              </VerticalStack>
            )}
          </S.SectionDescriptionContainer>

          {swimmingPoolDetailInformation?.image && (
            <S.SectionImageContainer>
              <S.Image
                src={swimmingPoolDetailInformation.image}
                alt={`Obrázek s dětmi na bazénu ${name}`}
                fill
              />
            </S.SectionImageContainer>
          )}
        </S.SectionContainer>
      </MaxWidth>
    </S.AboutSection>
  );
}
