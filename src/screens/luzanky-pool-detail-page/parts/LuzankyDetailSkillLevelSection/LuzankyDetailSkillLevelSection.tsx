import Link from 'next/link';
import { useSwimmingPoolDetailPageContext } from '~/contexts/SwimmingPoolDetailPageContext';
import { Button, Flex, Headline, MaxWidth, Text } from '~/ui/components/atoms';
import * as S from './LuzankyDetailSkillLevelSection.style';

const about = [
  {
    title: 'Co když dítě je dovednostmi na pomezí',
    descriptions: [
      {
        label: undefined,
        text: 'Pokud dítě není zcela připravené na tuto úroveň, ale již má některé dovednosti, doporučujeme přihlásit ho na termín, kde probíhají jak kurzy základního, tak zdokonalovacího plavání. Díky tomu bude moci dítě střídat malý a velký bazén podle potřeby, což mu pomáhá adaptovat se na nové prostředí vlastním tempem.',
      },
    ],
  },
  {
    title: 'Rozdělení do skupin',
    descriptions: [
      {
        label: 'Rybička',
        text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání',
      },
      {
        label: 'Delfínek',
        text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání',
      },
    ],
  },
];

export function LuzankyDetailSkillLevelSection() {
  const { swimmingPoolDetail } = useSwimmingPoolDetailPageContext();
  return (
    <S.Section>
      <MaxWidth>
        <S.SectionContainer>
          <S.ImageGaleryGrid>
            <S.ClickableImageContainer />
            <S.ClickableImageContainer />
            <S.ClickableImageContainer />
            <S.ClickableImageContainer hiddenImagesCount={2} />
          </S.ImageGaleryGrid>

          <S.SectionDescriptionContainer>
            {about?.map((data) => (
              <Flex direction="column" gap=".5rem" key={data.title}>
                <Headline size="small" as="h3">
                  {data.title}
                </Headline>

                <Flex gap="2rem">
                  {data.descriptions.map((description) => (
                    <div key={description.text}>
                      <Flex gap=".5rem" direction="column">
                        {description?.label && (
                          <Text variant="body3">{description.label}</Text>
                        )}
                        <Text variant="body2">{description.text}</Text>
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
                <Button>Stáhnout vzorový trénink</Button>
              </Link>
            )}
          </S.SectionDescriptionContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
