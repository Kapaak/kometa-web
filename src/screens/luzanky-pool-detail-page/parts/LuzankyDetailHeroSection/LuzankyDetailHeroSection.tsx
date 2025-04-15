import { Flex, Headline, MaxWidth, Text } from '~/ui/components/atoms';
import { luzankyPoolDetailInformations } from '../../constants';
import * as S from './LuzankyDetailHeroSection.style';

export function LuzankyDetailHeroSection() {
  return (
    <S.Section>
      <MaxWidth>
        <S.SectionCard>
          <S.SectionContainer>
            <S.SectionDescriptionContainer>
              <S.SectionTextContainer>
                <Headline variant="h1">Kondiční plavání</Headline>
                <Text variant="body2">
                  Tento kurz je určen pro děti, které již zvládají základní
                  plavecké styly a chtějí se zaměřit na zlepšení své techniky a
                  vytrvalosti.
                </Text>
              </S.SectionTextContainer>

              <S.SectionInformationContainer>
                {luzankyPoolDetailInformations.map((information) => (
                  <Flex direction="column" gap="1rem" key={information.label}>
                    <Text variant="body3" as="h2">
                      {information.label}
                    </Text>

                    <ul>
                      {information.items.map((item) => (
                        <Flex gap="1rem" align="center" key={item.label}>
                          <p>icon</p>
                          <Text variant="body2">{item.label}</Text>
                        </Flex>
                      ))}
                    </ul>
                  </Flex>
                ))}
              </S.SectionInformationContainer>
            </S.SectionDescriptionContainer>
            <div class="calendar" style={{ flex: '0 0 30%' }}>
              TODO KALENDAR
            </div>
          </S.SectionContainer>
        </S.SectionCard>
      </MaxWidth>
    </S.Section>
  );
}
