import { useRouter } from 'next/router';

import { Button, Text, VerticalStack } from '~/ui/components/atoms';

import * as S from './AvailableCoursesTableError.style';

export function AvailableCoursesTableError() {
  const router = useRouter();

  return (
    <S.MobileAvailableCoursesTableError>
      <VerticalStack align="center" gap="1.6rem">
        <VerticalStack align="center" gap="1rem">
          <Text variant="body2">Dostupné lekce nebyly načteny.</Text>
          <Text variant="body2">Zkuste to prosím později.</Text>
        </VerticalStack>
        <Button onClick={() => router.reload()}>Znovu načíst</Button>
      </VerticalStack>
    </S.MobileAvailableCoursesTableError>
  );
}
