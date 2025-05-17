import { Prohibit, UserPlus } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { getDayAbbreviation } from '~/utils/day';
import * as S from './Calendar.style';
import { getFilledTimes } from './utils';

interface CalendarProps {
  onClick?: (dayId: number, time: number) => void;
  days: number[];
  times: number[];
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
  onClick,
  maxBlankTimes = 2,
}: CalendarProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  const getTimeByDayIdAndTime = (dayId: number, time: number) => {
    return data.find(
      (lecture) => lecture.day === dayId && lecture.time === time
    );
  };

  if (!data || data.length === 0) {
    return;
  }

  const filledTimes = getFilledTimes(times, maxBlankTimes);

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
