import { Bus, Car, Envelope, Phone } from '@phosphor-icons/react';
import { MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';
import { BorderedLabelText } from '../../components/BorderedLabelText';
import * as S from './LuzankyContactSection.style';

export function LuzankyContactSection() {
  return (
    <S.ContactSection>
      <MaxWidth>
        <S.ContactHeadline>Kontakt</S.ContactHeadline>

        <S.SectionRow>
          <S.Column>
            <VerticalStack gap="1.2rem">
              <S.ContactSubheadline>Kde plaveme</S.ContactSubheadline>
              <S.ImageContainer>
                <S.Image
                  fill
                  alt="Obrázek bazénu Lužánky"
                  src="/images/swimming-pool/luzanky/pool/luzanky-pool.png"
                />
              </S.ImageContainer>
              <S.TextContainer>
                <Text variant="body3">Sportovní 486/4, Brno 602 00</Text>
                <Text variant="body2">
                  Areál poskytuje skvělé podmínky pro milovníky plavání. Nachází
                  se zde 25 metrový bazén a také revitalizovaný 50 metrový
                  bazén.
                </Text>
              </S.TextContainer>
            </VerticalStack>

            <S.BorderedItemsContainer>
              <BorderedLabelText
                label="Parkování"
                description="Kolem areálu jsou parkovací plochy pro návštěvníky."
                icon={Car}
              />
              <BorderedLabelText
                label="MHD"
                description="Nejbližší zastávky MHD jsou Sportovní a Reissigova, na kterých staví autobus číslo 67."
                icon={Bus}
              />
            </S.BorderedItemsContainer>
          </S.Column>

          <S.Column>
            <VerticalStack gap="1.2rem">
              <S.ContactSubheadline>Kontaktní osoba</S.ContactSubheadline>
              <S.ImageContainer>
                <S.Image
                  fill
                  alt="Anna Matušová u bazénu Lužánky"
                  src="/images/portraits/anna-matusova-pool.png"
                />
              </S.ImageContainer>
              <S.TextContainer>
                <Text variant="body3">Anna Matušová</Text>
                <Text variant="body2">
                  Plavání se věnuji od malička a prošla jsem si celou plaveckou
                  přípravku. Postupem času jsem se začala věnovat trénování dětí
                  a nyní vedu plavecké kurzy a závodní přípravku plavců na
                  Lužánkách.
                </Text>
              </S.TextContainer>
            </VerticalStack>

            <S.BorderedItemsContainer>
              <BorderedLabelText
                label="+420 773 708 287"
                description="Mezi 14:00-18:00 se mi bohužel nedovoláte, jsem na bazéně, kde nemám signál. Napište mi prosím SMS zprávu nebo e-mail. Děkuji za pochopení."
                icon={Phone}
              />
              <BorderedLabelText
                label="plavaniluzanky@kometaplavani.cz"
                icon={Envelope}
              />
            </S.BorderedItemsContainer>
          </S.Column>
        </S.SectionRow>
      </MaxWidth>
    </S.ContactSection>
  );
}
