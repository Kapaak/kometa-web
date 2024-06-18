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
  const { grey, error } = theme.colors;

  const content = (
    <S.MobileAvailableCoursesTableItem>
      <VerticalStack gap="1rem">
        <Flex justify="space-between">
          <Text variant="body2">
            <Strong>{availableCourse?.name}</Strong>
          </Text>
          <Text variant="body4" color={error.main}>
            {availableCourse?.isFull ? 'Obsazeno' : ''}
          </Text>
        </Flex>
        <Flex justify="space-between" gap="1.6rem">
          <VerticalStack>
            <Text variant="body5" color={grey['800']}>
              Úroveň:
            </Text>
            <Text variant="body2">{availableCourse?.skillLevelName}</Text>
          </VerticalStack>
          <VerticalStack justify="space-between">
            <Text variant="body5" color={grey['800']}>
              Věk:
            </Text>
            <Text variant="body2">
              {joinValues([availableCourse?.ageFrom, availableCourse?.ageTo], {
                separator: ' - ',
              })}{' '}
              let
            </Text>
          </VerticalStack>
        </Flex>
        <Flex justify="space-between" gap="1.6rem">
          <VerticalStack justify="space-between">
            <Text variant="body5" color={grey['800']}>
              Den:
            </Text>
            <Text variant="body2">{availableCourse?.day}</Text>
          </VerticalStack>
          <VerticalStack justify="space-between">
            <Text variant="body5" color={grey['800']}>
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
  );

  return availableCourse?.isFull ? (
    content
  ) : (
    <NextLink href={availableCourse?.isFull ? '' : availableCourse?.url ?? ''}>
      {content}
    </NextLink>
  );
}
