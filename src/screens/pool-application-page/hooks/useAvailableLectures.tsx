import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { getCapacityByCategoryId } from '~/utils/capacity';
import { getSpreadsheetIdByCategoryId } from '~/utils/sheets';

export function useAvailableLectures(
  categoryId: string,
  swimmingPoolId: string
) {
  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
  const capacity = getCapacityByCategoryId(categoryId);

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = useGetAvailableLectures(
    categoryId,
    swimmingPoolId,
    spreadsheetId,
    capacity
  );

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
