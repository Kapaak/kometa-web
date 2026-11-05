import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { SwimmingPoolId } from '~/types/swimming-pool';
import {
  getCapacityByCategoryId,
  getSheetTabIdByCategoryId,
} from '~/utils/swimming-pool-application';

export function useAvailableLectures(categoryId: string) {
  const sheetTabId = getSheetTabIdByCategoryId(
    SwimmingPoolId.LUZANKY,
    categoryId
  );
  const capacity = getCapacityByCategoryId(SwimmingPoolId.LUZANKY, categoryId);

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = useGetAvailableLectures(
    categoryId,
    SwimmingPoolId.LUZANKY,
    sheetTabId,
    capacity
  );

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
