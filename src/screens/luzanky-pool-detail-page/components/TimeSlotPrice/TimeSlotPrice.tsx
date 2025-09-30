import { Skeleton, Text } from '~/ui/components/atoms';
import { joinValues } from '~/utils/format';
import { formatToCurrency } from '~/utils/number';

import * as S from './TimeSlotPrice.style';

interface TimeSlotPriceProps {
  price: number;
  timeSlotName: string;
  isLoading?: boolean;
}
export function TimeSlotPrice({
  price,
  isLoading,
  timeSlotName,
}: TimeSlotPriceProps) {
  if (isLoading) {
    return <Skeleton height="4.2rem" width="18rem" />;
  }

  if (!price && price === 0) {
    return null;
  }

  return (
    <S.TimeSlotPrice>
      <Text variant="body3">
        {joinValues([price ? formatToCurrency(price) : '-', timeSlotName])}
      </Text>
    </S.TimeSlotPrice>
  );
}
