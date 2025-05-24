import { Prohibit, UserPlus } from '@phosphor-icons/react';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { getDayAbbreviation } from '~/utils/day';
import * as S from './Calendar.style';
import { getFilledTimes } from './utils';

interface CalendarProps {
  onClick?: (dayId: number, time: number) => void;
  days: number[];
  times: number[];
  isLoading?: boolean;
  data: {
    day: number;
    time: number;
    full?: boolean;
    discount?: number;
  }[];
  //If times length is smaller than 4, then we add some blank times
  maxBlankTimes?: number;
}

export function Calendar({
  data,
  days,
  times,
  isLoading,
  maxBlankTimes = 2,
  onClick,
}: CalendarProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  const getTimeByDayIdAndTime = (dayId: number, time: number) => {
    return data.find(
      (lecture) => lecture.day === dayId && lecture.time === time
    );
  };

  const filledTimes = getFilledTimes(times, maxBlankTimes);
  const loadingFilledTimes = getFilledTimes([15, 16, 17, 18], maxBlankTimes);

  if (isLoading) {
    return (
      <S.Calendar columns={loadingFilledTimes.length}>
        <S.CalendarRowContainer>
          {loadingFilledTimes.map((time) => (
            <S.CalendarTime key={time}>{time}:00</S.CalendarTime>
          ))}
        </S.CalendarRowContainer>
        {days.map((day, rowIdx) => (
          <S.CalendarRowContainer label={getDayAbbreviation(day)} key={rowIdx}>
            {loadingFilledTimes.map((_, colIdx) => (
              <Skeleton key={colIdx} height="100%" width="100%" />
            ))}
          </S.CalendarRowContainer>
        ))}
      </S.Calendar>
    );
  }

  return (
    <S.Calendar columns={filledTimes.length}>
      <S.CalendarRowContainer>
        {filledTimes.map((time) => (
          <S.CalendarTime key={time}>{time}:00</S.CalendarTime>
        ))}
      </S.CalendarRowContainer>

      {days.map((day) => (
        <S.CalendarRowContainer label={getDayAbbreviation(day)} key={day}>
          {filledTimes.map((time, index) => {
            const columnItem = getTimeByDayIdAndTime(day, time);

            if (!columnItem) {
              return <div key={`${day}_${index}`} />;
            }

            if (columnItem?.full) {
              return (
                <S.CalendarDayFull key={`${columnItem.day}_${columnItem.time}`}>
                  <Prohibit size={24} color={grey['600']} />
                </S.CalendarDayFull>
              );
            }

            return (
              <S.CalendarDay
                key={`${columnItem.day}_${columnItem.time}`}
                discount={columnItem?.discount}
                as="button"
                type="button"
                onClick={() => onClick?.(day, columnItem.time)}
              >
                <UserPlus size={24} />
              </S.CalendarDay>
            );
          })}
        </S.CalendarRowContainer>
      ))}
    </S.Calendar>
  );
}
