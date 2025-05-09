import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetLecturesForSwimmingPoolAndCategory } from '~/adapters/coursesAdapter';
import { SanityLecture } from '~/domains';
import { getDayAbbreviation } from '~/utils/day';

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
  const { data, isLoading } = useGetLecturesForSwimmingPoolAndCategory(
    categoryId,
    swimmingPoolId
  );

  const availableLectures = data
    ?.filter((lecture) => !lecture?.isFull)
    ?.map(({ id, timeFrom, timeTo, discount, dayId }) => ({
      id,
      timeFrom: String(timeFrom),
      timeTo: String(timeTo),
      discount: discount ?? 0,
      dayId: dayId ?? 0,
    }));

  const availableLecturesOptions = availableLectures
    ?.sort((a, b) => a.dayId - b.dayId)
    ?.map((lecture) => ({
      label: `${getDayAbbreviation(lecture.dayId)}: ${lecture.timeFrom} - ${lecture.timeTo}`,
      value: lecture.id,
    }));

  const getLectureById = (id: string) => {
    return data?.find((lecture) => lecture.id === id) ?? null;
  };

  return (
    <ApplicationFormContext.Provider
      value={{
        categoryId,
        getLectureById,
        availableLecturesOptions,
        lectures: data,
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
