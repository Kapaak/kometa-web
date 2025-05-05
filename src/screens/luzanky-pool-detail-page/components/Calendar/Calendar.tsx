import { Prohibit, UserPlus } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { getDayAbbreviation } from '~/utils/day';
import * as S from './Calendar.style';

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
}

export function Calendar({ data, days, times, onClick }: CalendarProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  const getTimeByDayIdAndTime = (dayId: number, time: number) => {
    return data.find(
      (lecture) => lecture.day === dayId && lecture.time === time
    );
  };

  return (
    <S.Calendar columns={times.length}>
      <S.CalendarRowContainer>
        {times.map((time) => (
          <S.CalendarTime key={time}>{time}:00</S.CalendarTime>
        ))}
      </S.CalendarRowContainer>

      {days.map((day) => (
        <S.CalendarRowContainer label={getDayAbbreviation(day)} key={day}>
          {times.map((time, index) => {
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
