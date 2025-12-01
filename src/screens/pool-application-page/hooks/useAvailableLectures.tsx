import { useGetPreliminaryLectures } from '~/adapters/preliminaryAdapter';
import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { getCapacityByCategoryId } from '~/utils/capacity';
import { getSpreadsheetIdByCategoryId } from '~/utils/sheets';

export function useAvailableLectures(
  categoryId: string,
  swimmingPoolId: string,
  preliminary?: boolean
) {
  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
  const capacity = getCapacityByCategoryId(categoryId);

  const hook = preliminary
    ? useGetPreliminaryLectures
    : useGetAvailableLectures;

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = hook(categoryId, swimmingPoolId, spreadsheetId, capacity);

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
