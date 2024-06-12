import NextLink from 'next/link';

import { useTheme } from 'styled-components';

import { GetAvailableCourse } from '~/domains';
import {
  Button,
  Divider,
  Flex,
  Strong,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';
import { joinValues } from '~/utils/format';

import * as S from './MobileAvailableCoursesTableItem.style';

interface MobileAvailableCoursesTableItemProps {
  availableCourse: GetAvailableCourse;
}

export function MobileAvailableCoursesTableItem({
  availableCourse,
}: MobileAvailableCoursesTableItemProps) {
  const theme = useTheme();
  const { secondary } = theme.colors;

  return (
    <S.MobileAvailableCoursesTableItem>
      <VerticalStack gap="1rem">
        <Text variant="body1">
          <Strong>{availableCourse?.name}</Strong>
        </Text>
        <Divider color={secondary.main} />
        <Flex justify="space-between">
          <Text variant="body4">Uroveň</Text>
          <Text variant="body3">{availableCourse?.skillLevelName}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text variant="body4">Den</Text>
          <Text variant="body3">{availableCourse?.day}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text variant="body4">Čas</Text>
          <Text variant="body3">
            {joinValues([availableCourse?.timeFrom, availableCourse?.timeTo])}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text variant="body4">Věk</Text>
          <Text variant="body3">
            {joinValues([availableCourse?.ageFrom, availableCourse?.ageTo], {
              separator: ' - ',
            })}{' '}
            let
          </Text>
        </Flex>
        <Button color="primary" fullWidth>
          <NextLink href={availableCourse?.url ?? ''}>Zobrazit kurz</NextLink>
        </Button>
      </VerticalStack>
    </S.MobileAvailableCoursesTableItem>
  );
}
