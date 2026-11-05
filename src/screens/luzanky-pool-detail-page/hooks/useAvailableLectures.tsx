import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { SwimmingPoolId } from '~/types/swimming-pool';

export function useAvailableLectures(categoryId: string) {
  const {
    data: availableLectures,
    isLoading,
    isError,
  } = useGetAvailableLectures(categoryId, SwimmingPoolId.LUZANKY);

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
