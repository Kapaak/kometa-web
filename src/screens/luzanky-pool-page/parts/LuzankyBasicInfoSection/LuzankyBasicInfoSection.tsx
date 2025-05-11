import {
  Headline,
  MaxWidth,
  Strong,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import * as S from './LuzankyBasicInfoSection.style';

interface LuzankyBasicInfoSectionProps {}

export function LuzankyBasicInfoSection({}: LuzankyBasicInfoSectionProps) {
  return (
    <S.Section id="basic-information">
      <MaxWidth>
        <S.SectionContainer>
          <S.SectionDescriptionContainer>
            <Headline as="h3" size="small">
              Placení a vouchery
            </Headline>

            <VerticalStack>
              <Text variant="body2">Platbu prosím proveďte na účet:</Text>
              <Text variant="body3">1345418319 / 0800</Text>
              <Text variant="body3">Specifický symbol: 1555</Text>
              <Text variant="body2">
                Do zprávy pro příjemce uveďte jméno a příjmení účastníka kurzu.
                Každý účastník musí mít platbu odeslanou samostatně.
              </Text>
              <br />

              <Text variant="body2">
                Pro využití <Strong>rodičovských voucherů z Brno ID</Strong> nás
                prosím kontaktujte na plavaniluzanky@kometaplavani.cz, kde vám
                rádi poskytneme podrobnosti.
              </Text>
            </VerticalStack>
          </S.SectionDescriptionContainer>
          <S.SectionDescriptionContainer>
            <Headline as="h3" size="small">
              Absence a náhrady
            </Headline>

            <VerticalStack>
              <Text variant="body2">
                Omlouvání dítěte z lekce není nutné. Snažíme se nabízet náhrady,
                pokud je to možné, v termínech, které nejsou obsazené. Pokud
                jsou veškeré lekce obsazené nemůžeme z kapacitních důvodů
                náhrady provozovat.
              </Text>
              <br />
              <Text variant="body2">
                Pokud máte zájem o náhradní lekci, napište nám e-mail na{' '}
                <Strong>plavaniluzanky@kometaplavani.cz</Strong> s požadovaným
                datem a časem. Náhrady jsou možné pouze během období, na které
                je dítě přihlášeno do kurzu.
              </Text>
            </VerticalStack>
          </S.SectionDescriptionContainer>

          <S.SectionDescriptionContainer>
            <Headline as="h3" size="small">
              Kdy neplaveme
            </Headline>

            <VerticalStack gap="1rem">
              <Text variant="body2">
                Naše kurzy odpovídají školním prázdninám a státním svátkům. V
                těchto obdobích neplaveme:
              </Text>

              <S.SectionNotSwimmingList>
                <li>28. 10. 2024</li>
                <li>29. 10. až 3. 11. 2024</li>
                <li>23. 12. 2024 až 5. 1. 2025</li>
                <li>31. 1. 2025</li>
                <li>10. 2. až 16. 2. 2025</li>
                <li>17. 4. až 21. 4. 2025</li>
                <li>1. 5. 2025</li>
                <li>8. 5. 2025</li>
              </S.SectionNotSwimmingList>
            </VerticalStack>
          </S.SectionDescriptionContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
