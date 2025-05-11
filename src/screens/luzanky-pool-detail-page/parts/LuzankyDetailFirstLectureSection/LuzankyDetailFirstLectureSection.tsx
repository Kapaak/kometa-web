import { CheckCircle } from '@phosphor-icons/react';
import FirstLectureImage from '~/public/images/swimming-pool/luzanky/service/service-advanced.png';
import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import { luzankyPoolDetailInformation } from '../../constants';
import { useSwimmingPoolDetailPageContext } from '../../contexts/SwimmingPoolDetailPageContext';
import * as S from './LuzankyDetailFirstLectureSection.style';

interface LuzankyDetailFirstLectureSectionProps {}

export function LuzankyDetailFirstLectureSection({}: LuzankyDetailFirstLectureSectionProps) {
  const { categoryId } = useSwimmingPoolDetailPageContext();

  const swimmingPoolDetailInformation =
    luzankyPoolDetailInformation?.[categoryId];

  const { arrivalTime, requiredEquipment, childHandoverProcess } =
    swimmingPoolDetailInformation?.initialLectureSection ?? {};

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

          <S.SectionWrapper>
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
                  {requiredEquipment?.items?.map((requiredItem) => (
                    <IconText
                      key={requiredItem}
                      icon={CheckCircle}
                      iconSize={17}
                      text={requiredItem}
                      as="li"
                    />
                  ))}
                </VerticalStack>

                {requiredEquipment?.description && (
                  <Text variant="body2">{requiredEquipment?.description}</Text>
                )}
              </S.DescriptionContainer>

              <S.DescriptionContainer>
                <Headline as="h3" size="small" color="inherit">
                  Kdy přijít
                </Headline>

                {arrivalTime?.descriptions?.map((description, index) => (
                  <Text variant="body2" key={index}>
                    {description}
                  </Text>
                ))}
              </S.DescriptionContainer>

              {childHandoverProcess?.descriptions && (
                <S.DescriptionContainer>
                  <Headline as="h3" size="small" color="inherit">
                    jak probíhá přebírání dětí
                  </Headline>
                  <VerticalStack gap="1rem">
                    {childHandoverProcess?.descriptions?.map(
                      (description, index) => (
                        <Text variant="body2" key={index}>
                          {description}
                        </Text>
                      )
                    )}
                  </VerticalStack>
                </S.DescriptionContainer>
              )}
            </VerticalStack>
          </S.SectionWrapper>
        </S.FirstLectureContainer>
      </MaxWidth>
    </S.Section>
  );
}
