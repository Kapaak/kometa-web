import { Strong, Text } from '~/ui/components/atoms';
import * as S from './IndividiualCourse.style';

export function IndividualCourse() {
  return (
    <S.IndividualCourse>
      <Text>
        Nevybrali jste si žádný z nabízených kurzů? Máte zájem o individuální
        plavání? Kontaktujte nás na tel.: <Strong>+420 773 708 287</Strong> nebo
        napište email na: <Strong>plavaniluzanky@kometaplavani.cz</Strong>
      </Text>
    </S.IndividualCourse>
  );
}
