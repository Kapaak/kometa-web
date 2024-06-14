import NextLink from 'next/link';

import { useTheme } from 'styled-components';

import { GetAvailableCourse } from '~/domains';
import { Flex, Strong, Text, VerticalStack } from '~/ui/components/atoms';
import { joinValues } from '~/utils/format';

import * as S from './MobileAvailableCoursesTableItem.style';

interface MobileAvailableCoursesTableItemProps {
  availableCourse: GetAvailableCourse;
}

export function MobileAvailableCoursesTableItem({
  availableCourse,
}: MobileAvailableCoursesTableItemProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  return (
    <NextLink href={availableCourse?.url ?? ''}>
      <S.MobileAvailableCoursesTableItem>
        <VerticalStack gap="1rem">
          <Text variant="body2">
            <Strong>{availableCourse?.name}</Strong>
          </Text>
          <Flex justify="space-between" gap="1.6rem">
            <VerticalStack>
              <Text variant="body5" color={grey['700']}>
                Úroveň:
              </Text>
              <Text variant="body2">{availableCourse?.skillLevelName}</Text>
            </VerticalStack>
            <VerticalStack justify="space-between">
              <Text variant="body5" color={grey['700']}>
                Věk:
              </Text>
              <Text variant="body2">
                {joinValues(
                  [availableCourse?.ageFrom, availableCourse?.ageTo],
                  {
                    separator: ' - ',
                  }
                )}{' '}
                let
              </Text>
            </VerticalStack>
          </Flex>
          <Flex justify="space-between" gap="1.6rem">
            <VerticalStack justify="space-between">
              <Text variant="body5" color={grey['700']}>
                Den:
              </Text>
              <Text variant="body2">{availableCourse?.day}</Text>
            </VerticalStack>
            <VerticalStack justify="space-between">
              <Text variant="body5" color={grey['700']}>
                Čas:
              </Text>
              <Text variant="body2">
                {joinValues(
                  [availableCourse?.timeFrom, availableCourse?.timeTo],
                  { separator: ' - ' }
                )}
              </Text>
            </VerticalStack>
          </Flex>
        </VerticalStack>
      </S.MobileAvailableCoursesTableItem>
    </NextLink>
  );
}
