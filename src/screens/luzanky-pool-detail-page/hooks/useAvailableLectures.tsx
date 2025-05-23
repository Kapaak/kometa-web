import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { SwimmingPoolId } from '~/types';
import { getCapacityByCategoryId } from '~/utils/capacity';
import { getSpreadsheetIdByCategoryId } from '~/utils/sheets';

export function useAvailableLectures(categoryId: string) {
  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
  const capacity = getCapacityByCategoryId(categoryId);

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = useGetAvailableLectures(
    categoryId,
    SwimmingPoolId.LUZANKY,
    spreadsheetId,
    capacity
  );

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
