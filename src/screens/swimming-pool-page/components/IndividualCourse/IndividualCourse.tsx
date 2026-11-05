import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';
import { MaxWidth, Strong, Text } from '~/ui/components/atoms';

import * as S from './IndividiualCourse.style';

export function IndividualCourse() {
  const { contact } = useSwimmingPoolConfig();

  if (!contact.phone && !contact.email) return null;

  return (
    <MaxWidth variant="small">
      <S.IndividualCourse>
        <Text align="center">
          Nevybrali jste si žádný z nabízených kurzů? Máte zájem o individuální
          plavání?{' '}
          {contact.phone && (
            <>
              Kontaktujte nás na tel.: <Strong>{contact.phone}</Strong>{' '}
            </>
          )}
          {contact.phone && contact.email && 'nebo '}
          {contact.email && (
            <>
              napište email na: <Strong>{contact.email}</Strong>
            </>
          )}
        </Text>
      </S.IndividualCourse>
    </MaxWidth>
  );
}
