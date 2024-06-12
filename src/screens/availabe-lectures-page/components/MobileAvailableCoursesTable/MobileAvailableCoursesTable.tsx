import { useRouter } from 'next/router';

import { GetAvailableCourse } from '~/domains';
import { Button, Text, VerticalStack } from '~/ui/components/atoms';

import { MobileAvailableCoursesTableItem } from '../MobileAvailableCoursesTableItem';

import * as S from './MobileAvailableCoursesTable.style';

interface MobileAvailableCoursesTableProps {
  availableCourses: GetAvailableCourse[];
  isLoading?: boolean;
}

export function MobileAvailableCoursesTable({
  availableCourses,
  isLoading,
}: MobileAvailableCoursesTableProps) {
  const router = useRouter();

  if (!availableCourses.length && !isLoading) {
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

  return (
    <S.MobileAvailableCoursesTable>
      {availableCourses?.map((course) => (
        <MobileAvailableCoursesTableItem
          key={course?.id}
          availableCourse={course}
        />
      ))}
    </S.MobileAvailableCoursesTable>
  );
}
