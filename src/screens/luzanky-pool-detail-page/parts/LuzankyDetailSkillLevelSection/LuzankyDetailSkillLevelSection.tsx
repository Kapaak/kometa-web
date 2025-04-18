import Link from 'next/link';
import { Button, Flex, MaxWidth, Text } from '~/ui/components/atoms';
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
  return (
    <S.Section>
      <MaxWidth>
        <Flex gap="2rem">
          <S.ImageGaleryGrid>
            <S.ClickableImageContainer />
            <S.ClickableImageContainer />
            <S.ClickableImageContainer />
            <S.ClickableImageContainer hiddenImagesCount={2} />
          </S.ImageGaleryGrid>

          <Flex
            direction="column"
            justify="space-between"
            gap="4rem"
            flex="1 1 50%"
          >
            {about?.map((data) => (
              <Flex direction="column" gap=".5rem" key={data.title}>
                <S.Title>{data.title}</S.Title>

                <Flex>
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

            <Link href="/" download style={{ alignSelf: 'flex-start' }}>
              <Button>Stáhnout vzorový trénink</Button>
            </Link>
          </Flex>
        </Flex>
      </MaxWidth>
    </S.Section>
  );
}
