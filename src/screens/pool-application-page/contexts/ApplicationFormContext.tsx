import { createContext, PropsWithChildren, useContext } from 'react';
import { SanityLecture } from '~/domains';

import { getDayAbbreviation } from '~/utils/day';
import { useAvailableLectures } from '../hooks/useAvailableLectures';

type ApplicationFormContextType = {
  categoryId: string;
  lectures?: SanityLecture[];
  getLectureById: (id: string) => SanityLecture | null;
  availableLecturesOptions?: {
    label: string;
    value: string;
  }[];
  isLoading?: boolean;
};

const ApplicationFormContext = createContext<ApplicationFormContextType>({
  categoryId: '',
  lectures: [],
  getLectureById: () => null,
  availableLecturesOptions: [],
  isLoading: false,
});

interface Props extends PropsWithChildren {
  swimmingPoolId: string;
  categoryId: string;
}

export function ApplicationFormContextProvider({
  swimmingPoolId,
  categoryId,
  children,
}: Props) {
  const { availableLectures, isLoading } = useAvailableLectures(
    categoryId,
    swimmingPoolId
  );

  const filteredLectures = availableLectures
    ?.filter((lecture) => !lecture?.isFull)
    ?.map(({ id, timeFrom, timeTo, discount, dayId }) => ({
      id,
      timeFrom: String(timeFrom),
      timeTo: String(timeTo),
      discount: discount ?? 0,
      dayId: dayId ?? 0,
    }));

  const availableLecturesOptions = filteredLectures
    ?.sort((a, b) => {
      if (a.dayId !== b.dayId) return a.dayId - b.dayId;
      return a.timeFrom.localeCompare(b.timeFrom);
    })
    ?.map((lecture) => ({
      label: `${getDayAbbreviation(lecture.dayId)}: ${lecture.timeFrom} - ${lecture.timeTo}`,
      value: lecture.id,
    }));

  const getLectureById = (id: string) => {
    return availableLectures?.find((lecture) => lecture.id === id) ?? null;
  };

  return (
    <ApplicationFormContext.Provider
      value={{
        categoryId,
        getLectureById,
        availableLecturesOptions,
        lectures: availableLectures,
        isLoading,
      }}
    >
      {children}
    </ApplicationFormContext.Provider>
  );
}

export const useApplicationFormContext = () => {
  return useContext(ApplicationFormContext);
};
