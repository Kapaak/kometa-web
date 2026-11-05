import { useGetPreliminaryLectures } from '~/adapters/preliminaryAdapter';
import { useGetAvailableLectures } from '~/adapters/sheetAdapter';

export function useAvailableLectures(
  categoryId: string,
  swimmingPoolId: string,
  preliminary?: boolean
) {
  const hook = preliminary
    ? useGetPreliminaryLectures
    : useGetAvailableLectures;

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = hook(categoryId, swimmingPoolId);

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
