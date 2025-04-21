import { Prohibit, UserPlus } from '@phosphor-icons/react';
import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import * as S from './Calendar.style';

const lecturesInDays = [
  {
    day: 1,
    time: 15,
    discount: 20,
    full: false,
  },
  {
    day: 1,
    time: 16,
    discount: 20,
    full: false,
  },
  {
    day: 1,
    time: 17,
    discount: 35,
    full: false,
  },
  {
    day: 1,
    time: 19,
    discount: 35,
    full: true,
  },
  {
    day: 2,
    time: 16,
    discount: 20,
    full: false,
  },
  {
    day: 3,
    time: 17,
    discount: 20,
    full: true,
  },
  {
    day: 4,
    time: 19,
    discount: 20,
    full: false,
  },
];

const days = [
  {
    label: 'PO',
    dayId: 1,
  },
  {
    label: 'ÚT',
    dayId: 2,
  },
  {
    label: 'ST',
    dayId: 3,
  },
  {
    label: 'ČT',
    dayId: 4,
  },
  {
    label: 'PÁ',
    dayId: 5,
  },
];

const getTimeByDayIdAndTime = (dayId: number, time: number) => {
  return lecturesInDays.find((day) => day.day === dayId && day.time === time);
};

interface CalendarProps {}

export function Calendar({}: CalendarProps) {
  const theme = useTheme();
  const { grey } = theme.colors;

  const times = useMemo(() => {
    const times = lecturesInDays.map((day) => day.time).sort((a, b) => a - b);
    return Array.from(new Set(times));
  }, []);

  return (
    <S.Calendar columns={times.length}>
      <S.CalendarRowContainer>
        {times.map((time) => (
          <S.CalendarTime key={time}>{time}:00</S.CalendarTime>
        ))}
      </S.CalendarRowContainer>

      {days.map((day) => (
        <S.CalendarRowContainer label={day.label} key={day.dayId}>
          {times.map((time, index) => {
            const columnItem = getTimeByDayIdAndTime(day.dayId, time);

            if (!columnItem) {
              return <div key={`${day.dayId}_${index}`} />;
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
              >
                <UserPlus size={24} color={grey['800']} />
              </S.CalendarDay>
            );
          })}
        </S.CalendarRowContainer>
      ))}
    </S.Calendar>
  );
}
