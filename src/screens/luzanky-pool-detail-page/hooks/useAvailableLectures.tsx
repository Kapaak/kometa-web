import { useGetLecturesForSwimmingPoolAndCategory } from '~/adapters/coursesAdapter';
import { useGetGoogleSheetById } from '~/adapters/sheetAdapter';
import { SwimmingPoolId } from '~/types';
import { getCapacityByCategoryId } from '~/utils/capacity';
import { getDayAbbreviationWithoutDiacritics } from '~/utils/day';
import { getSpreadsheetIdByCategoryId } from '~/utils/sheets';

export function useAvailableLectures(categoryId: string) {
  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
  const capacity = getCapacityByCategoryId(categoryId);

  const {
    data: lectures,
    isLoading: isLecturesLoading,
    isError: isLecturesError,
  } = useGetLecturesForSwimmingPoolAndCategory(
    categoryId,
    SwimmingPoolId.LUZANKY
  );

  const { data, isLoading, isError } = useGetGoogleSheetById(
    spreadsheetId,
    capacity
  );

  const availableLectures = lectures?.map((lecture) => {
    const filteredOutSet = new Set(data?.filteredOut ?? []);
    const dayTime = `${getDayAbbreviationWithoutDiacritics(Number(lecture.dayId))}_${lecture.timeFrom}`;
    if (filteredOutSet.has(dayTime)) {
      return { ...lecture, isFull: true };
    }
    return lecture;
  });

  return {
    availableLectures,
    isLoading: isLoading || isLecturesLoading,
    isError: isError || isLecturesError,
  };
}
