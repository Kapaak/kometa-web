import { useQuery } from '@tanstack/react-query';
import { SanitySwimmingPoolDetail } from '~/domains';

export function useGetSwimmingPoolDetailPageById(
  swimmingPoolId: string,
  categoryId?: string
) {
  const { data, isError, isLoading, isSuccess } =
    useQuery<SanitySwimmingPoolDetail>({
      enabled: Boolean(swimmingPoolId && categoryId),
      queryKey: ['swimming-pool-detail'],
      queryFn: async () => {
        const params = new URLSearchParams({
          id: swimmingPoolId,
          categoryId: categoryId ?? '',
        });

        const response = await fetch(
          `/api/swimming-pool-detail?${params.toString()}`
        );
        const data = await response.json();

        return data;
      },
    });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
