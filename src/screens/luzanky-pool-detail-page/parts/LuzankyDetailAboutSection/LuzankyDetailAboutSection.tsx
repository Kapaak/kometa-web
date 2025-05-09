import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';

import AboutImage from '~/public/images/swimming-pool/luzanky/service/service-kindergarden.png';

import { CheckCircle } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { IconText } from '~/ui/components/molecules';
import * as S from './LuzankyDetailAboutSection.style';

interface LuzankyDetailAboutSectionProps {}

export function LuzankyDetailAboutSection({}: LuzankyDetailAboutSectionProps) {
  const theme = useTheme();
  const { success } = theme.colors;

  return (
    <S.Section>
      <MaxWidth>
        <S.SectionContainer>
          <S.SectionDescriptionContainer>
            <VerticalStack gap="1rem">
              <Headline size="small">Naše filozofie</Headline>
              <Text variant="body2">
                Od prvních temp u rybiček až po závodní družstvo se snažíme
                vytvářet prostředí, kde děti nejen zdokonalují své plavecké
                dovednosti, ale zároveň si užívají cestu k vlastním cílům a mají
                z plavání radost. V našem klubu mohou zůstat po celý život – ať
                už se rozhodnou pro dráhu závodního plavce, nebo si plavání
                ponechají jako sport, který jim přináší pohyb a radost z vody.
              </Text>
            </VerticalStack>

            <VerticalStack gap="1rem">
              <Headline size="small">Co zde děti učíme</Headline>
              <VerticalStack as="ul" gap=".5rem">
                <IconText
                  icon={CheckCircle}
                  iconColor={success.main}
                  iconSize={17}
                  text="Hravou formou se seznamujeme s vodním prostředím."
                  as="li"
                />
                <IconText
                  icon={CheckCircle}
                  iconColor={success.main}
                  iconSize={17}
                  text="Děti se naučí základy plaveckých stylů, jako je znak a kraul."
                  as="li"
                />
                <IconText
                  icon={CheckCircle}
                  iconColor={success.main}
                  iconSize={17}
                  text="Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci."
                  as="li"
                />
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
