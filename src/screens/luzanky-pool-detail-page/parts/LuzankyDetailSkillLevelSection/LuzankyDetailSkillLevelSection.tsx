import NextLink from 'next/link';
import { useSwimmingPoolDetailPageContext } from '~/screens/luzanky-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import {
  Button,
  Flex,
  Headline,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { Gallery } from '../../components/Gallery';
import { luzankyPoolDetailInformation } from '../../constants';
import * as S from './LuzankyDetailSkillLevelSection.style';

export function LuzankyDetailSkillLevelSection() {
  const { swimmingPoolDetail, categoryId } = useSwimmingPoolDetailPageContext();

  const swimmingPoolDetailInformation =
    luzankyPoolDetailInformation?.[categoryId];

  const { data, actionButtonLabel = 'Stáhnout vzorový trénink' } =
    swimmingPoolDetailInformation?.skillLevelSection ?? {};

  const hasImages = swimmingPoolDetail?.imageGallery?.length ?? 0;

  if (!data) {
    return null;
  }

  return (
    <S.SkillLevelSection>
      <MaxWidth variant={hasImages ? 'main' : 'small'}>
        <S.SectionContainer>
          <Gallery images={swimmingPoolDetail?.imageGallery} />

          <S.SectionDescriptionContainer>
            {data?.map((data) => (
              <Flex direction="column" gap=".5rem" key={data.title}>
                <Headline size="small" as="h3">
                  {data.title}
                </Headline>

                <VerticalStack gap="2rem" padding="2rem 0 0">
                  {data?.descriptions?.map((description) => (
                    <div key={description.text}>
                      <Flex gap=".5rem" direction="column">
                        {description?.label && (
                          <Text variant="body3">{description?.label}</Text>
                        )}
                        <Text variant="body2">{description?.text}</Text>
                      </Flex>
                    </div>
                  ))}

                  {swimmingPoolDetailInformation?.documents && (
                    <VerticalStack gap="2.5rem" padding="2rem 0 0">
                      <Headline size="small" as="h3">
                        Dokumenty ke stažení
                      </Headline>
                      <Flex gap="1rem" wrap="wrap">
                        {swimmingPoolDetailInformation.documents?.map(
                          (document) => (
                            <NextLink
                              key={document.title}
                              href="/files/GDPR.pdf"
                              download
                            >
                              <Button variant="outlined">
                                {document.title}
                              </Button>
                            </NextLink>
                          )
                        )}
                      </Flex>
                    </VerticalStack>
                  )}
                </VerticalStack>
              </Flex>
            ))}

            {swimmingPoolDetail?.sampleTraining && (
              <NextLink
                href={swimmingPoolDetail?.sampleTraining}
                download
                style={{ alignSelf: 'flex-start' }}
              >
                <Button>{actionButtonLabel}</Button>
              </NextLink>
            )}
          </S.SectionDescriptionContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.SkillLevelSection>
  );
}
