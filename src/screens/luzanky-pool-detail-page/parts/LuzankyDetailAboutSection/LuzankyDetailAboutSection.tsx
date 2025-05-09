import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';

import AboutImage from '~/public/images/swimming-pool/luzanky/service/service-kindergarden.png';

import { CheckCircle } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useSwimmingPoolDetailPageContext } from '~/screens/luzanky-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { IconText } from '~/ui/components/molecules';
import { luzankyPoolDetailInformation } from '../../constants';
import * as S from './LuzankyDetailAboutSection.style';

interface LuzankyDetailAboutSectionProps {}

export function LuzankyDetailAboutSection({}: LuzankyDetailAboutSectionProps) {
  const theme = useTheme();
  const { success } = theme.colors;

  const { categoryId } = useSwimmingPoolDetailPageContext();

  const swimmingPoolDetailInformation =
    luzankyPoolDetailInformation?.[categoryId];

  const { description, lectureFocus } =
    swimmingPoolDetailInformation?.aboutSection ?? {};

  return (
    <S.Section>
      <MaxWidth>
        <S.SectionContainer>
          <S.SectionDescriptionContainer>
            <VerticalStack gap="1rem">
              <Headline size="small">Naše filozofie</Headline>
              <Text variant="body2">{description}</Text>
            </VerticalStack>

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
          </S.SectionDescriptionContainer>

          <S.SectionImageContainer>
            <S.Image
              src={AboutImage}
              alt="Obrázek s dětmi na bazénu Lužánky"
              fill
            />
          </S.SectionImageContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
