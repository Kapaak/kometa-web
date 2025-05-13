import { Bus, Car, Envelope, Phone } from '@phosphor-icons/react';
import { Headline, MaxWidth, Strong, Text } from '~/ui/components/atoms';
import * as S from './LuzankyContactSection.style';

export function LuzankyContactSection() {
  return (
    <S.Section>
      <MaxWidth>
        <Headline>Kontakt</Headline>

        <S.SectionRow>
          <S.Column>
            <Text variant="body3">Sportovní 486/4, Brno 602 00</Text>

            <S.TextContainer>
              <Text variant="body2">
                Areál poskytuje skvělé podmínky pro milovníky plavání. Nachází
                se zde 25 metrový bazén a také revitalizovaný 50 metrový bazén.
              </Text>
              <S.BorderedRow>
                <Car size={22} weight="light" />
                <Text variant="body2">
                  Kolem areálu jsou parkovací plochy pro návštěvníky.
                </Text>
              </S.BorderedRow>
              <S.BorderedRow>
                <Bus size={22} weight="light" />
                <Text variant="body2">
                  Nejbližší zastávky MHD jsou Sportovní a Reissigova, na kterých
                  staví autobus číslo 67.
                </Text>
              </S.BorderedRow>
            </S.TextContainer>
          </S.Column>

          <S.Column>
            <Text variant="body3">Anna Matušová</Text>

            <S.TextContainer>
              <Text variant="body2">
                Plavání se věnuji od malička a prošla jsem si celou plaveckou
                přípravku. Postupem času jsem se začala věnovat trénování dětí a
                nyní vedu plavecké kurzy a závodní přípravku plavců na
                Lužánkách. Ve volném čase ráda cestuji a poznávám nová místa.
              </Text>
              <S.BorderedRow>
                <Phone size={22} weight="light" />
                <Text variant="body2">
                  <Strong>+420 773 708 287</Strong> (Mezi 14:00-18:00 se mi
                  bohužel nedovoláte, jsem na bazéně, kde nemám signál. Napište
                  mi prosím SMS zprávu nebo e-mail. Děkuji za pochopení.)
                </Text>
              </S.BorderedRow>
              <S.BorderedRow>
                <Envelope size={22} weight="light" />
                <Text variant="body3">plavaniluzanky@kometaplavani.cz</Text>
              </S.BorderedRow>
            </S.TextContainer>
          </S.Column>
        </S.SectionRow>
      </MaxWidth>
    </S.Section>
  );
}
