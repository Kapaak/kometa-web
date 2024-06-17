import { Text, VerticalStack } from '~/ui/components/atoms';

import * as S from './AvailableCoursesTableEmpty.style';

export function AvailableCoursesTableEmpty() {
  return (
    <S.MobileAvailableCoursesTableEmpty>
      <VerticalStack align="center" gap="1rem">
        <Text variant="body2">Žádné výsledky nebyly nalezeny.</Text>
        <Text variant="body2">Zkuste rozšířit vyhledávání.</Text>
      </VerticalStack>
    </S.MobileAvailableCoursesTableEmpty>
  );
}
