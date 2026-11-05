import { useGetPreliminaryLectures } from '~/adapters/preliminaryAdapter';
import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import {
  getCapacityByCategoryId,
  getSheetTabIdByCategoryId,
} from '~/utils/swimming-pool-application';

export function useAvailableLectures(
  categoryId: string,
  swimmingPoolId: string,
  preliminary?: boolean
) {
  const sheetTabId = getSheetTabIdByCategoryId(swimmingPoolId, categoryId);
  const capacity = getCapacityByCategoryId(swimmingPoolId, categoryId);

  const hook = preliminary
    ? useGetPreliminaryLectures
    : useGetAvailableLectures;

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = hook(categoryId, swimmingPoolId, sheetTabId, capacity);

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
