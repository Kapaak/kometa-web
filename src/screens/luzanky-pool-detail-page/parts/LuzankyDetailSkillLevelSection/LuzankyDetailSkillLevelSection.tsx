import Link from 'next/link';
import { useSwimmingPoolDetailPageContext } from '~/contexts/SwimmingPoolDetailPageContext';
import { Button, Flex, Headline, MaxWidth, Text } from '~/ui/components/atoms';
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

  return (
    <S.Section>
      <MaxWidth variant={hasImages ? 'main' : 'small'}>
        <S.SectionContainer>
          <Gallery images={swimmingPoolDetail?.imageGallery} />

          <S.SectionDescriptionContainer>
            {data?.map((data) => (
              <Flex direction="column" gap=".5rem" key={data.title}>
                <Headline size="small" as="h3">
                  {data.title}
                </Headline>

                <Flex gap="2rem">
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
                </Flex>
              </Flex>
            ))}

            {swimmingPoolDetail?.sampleTraining && (
              <Link
                href={swimmingPoolDetail?.sampleTraining}
                download
                style={{ alignSelf: 'flex-start' }}
              >
                <Button>{actionButtonLabel}</Button>
              </Link>
            )}
          </S.SectionDescriptionContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
