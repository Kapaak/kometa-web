import { useGetAvailableLectures } from '~/adapters/sheetAdapter';
import { useSwimmingPoolConfig } from '~/contexts/SwimmingPoolConfigContext';

export function useAvailableLectures(categoryId: string) {
  const { id: swimmingPoolId } = useSwimmingPoolConfig();

  const {
    data: availableLectures,
    isLoading,
    isError,
  } = useGetAvailableLectures(categoryId, swimmingPoolId);

  return {
    availableLectures,
    isLoading,
    isError,
  };
}
