import { CheckCircle } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import FirstLectureImage from '~/public/images/swimming-pool/luzanky/service/service-advanced.png';
import {
  Flex,
  Headline,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import * as S from './LuzankyDetailFirstLectureSection.style';

interface LuzankyDetailFirstLectureSectionProps {}

export function LuzankyDetailFirstLectureSection({}: LuzankyDetailFirstLectureSectionProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  return (
    <S.Section>
      <MaxWidth>
        <S.FirstLectureContainer>
          <VerticalStack align="center" gap="1rem">
            <Headline color="inherit">První hodina</Headline>
            <Text variant="body2">
              Základní instrukce toho, co potřebujete vědět, než půjdete na
              první hodinu.
            </Text>
          </VerticalStack>

          <Flex gap="4.8rem">
            <S.ImageContainer>
              <S.Image
                src={FirstLectureImage}
                alt="Děti na první lekci na bazénu Lužánky"
                fill
              />
            </S.ImageContainer>

            <VerticalStack flex="1 1 50%" gap="2.4rem">
              <S.DescriptionContainer>
                <Headline size="small" as="h3" color="inherit">
                  Co si mám vzít s sebou
                </Headline>

                <VerticalStack as="ul" gap="1rem">
                  <IconText
                    icon={CheckCircle}
                    iconColor={grey['100']}
                    iconSize={17}
                    text="Plavky, ručník, plavecké brýle (bez zakrytí nosu)"
                  />
                  <IconText
                    icon={CheckCircle}
                    iconColor={grey['100']}
                    iconSize={17}
                    text="Plavecká čepice (není povinná, ale pomáhá udržet vlasy z očí)"
                  />
                  <IconText
                    icon={CheckCircle}
                    iconColor={grey['100']}
                    iconSize={17}
                    text="Volitelně můžete přibalit mýdlo a pantofle"
                  />
                </VerticalStack>

                <Text variant="body2">
                  Doporučujeme vybírat plavky, které dobře přiléhají k tělu a
                  neomezují pohyb. U dívek je vhodné vyhnout se volánkům, u
                  chlapců pak dlouhým kraťasovým plavkám, které zvyšují odpor
                  vody a mohou ztěžovat plavání.
                </Text>
              </S.DescriptionContainer>

              <S.DescriptionContainer>
                <Headline as="h3" size="small" color="inherit">
                  Kdy přijít
                </Headline>
                <Text variant="body2">
                  Doporučujeme přijít 15 minut před začátkem lekce. Trenér bude
                  čekat u turniketu poblíž pokladen a rozdá dětem čipy (modré)
                  pro vstup do areálu bazénu. Příchod je možný nejpozději 5
                  minut před začátkem lekce, aby děti měly dostatek času na
                  převlečení a přípravu. Pozdní příchody mohou narušit časový
                  harmonogram lekce.
                </Text>
              </S.DescriptionContainer>

              <S.DescriptionContainer>
                <Headline as="h3" size="small" color="inherit">
                  jak probíhá přebírání dětí
                </Headline>
                <VerticalStack gap="1rem">
                  <Text variant="body2">
                    Děti mají k dispozici společné šatny, kde si je převezme
                    trenér. Doprovod má nárok na doprovodný čip (černý), který
                    je platný na 15 minut a slouží k pomoci s převlékáním nebo
                    oblékáním dítěte.
                  </Text>
                  <Text variant="body2">
                    Doprovod obdrží první čip při vstupu, který umožní vstup do
                    areálu a následně se při odchodu vloží do turniketu pro
                    opuštění bazénu. Po skončení lekce dostane doprovod druhý
                    čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako
                    u prvního čipu je nutné ho při odchodu vložit do turniketu
                    stejně jako modrý čip dítěte. Černý čip nesmí být použit k
                    uzamčení skříňky, jinak nebude možné opustit areál.
                  </Text>
                </VerticalStack>
              </S.DescriptionContainer>
            </VerticalStack>
          </Flex>
        </S.FirstLectureContainer>
      </MaxWidth>
    </S.Section>
  );
}
