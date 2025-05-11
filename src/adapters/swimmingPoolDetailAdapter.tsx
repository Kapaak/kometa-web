import { useQuery } from '@tanstack/react-query';
import { TransformedSwimmingPoolDetail } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetSwimmingPoolDetailPageById(
  swimmingPoolId: string,
  categoryId?: string
) {
  const { data, isError, isLoading, isSuccess } =
    useQuery<TransformedSwimmingPoolDetail>({
      enabled: Boolean(swimmingPoolId && categoryId),
      queryKey: ['swimming-pool-detail', swimmingPoolId, categoryId],
      queryFn: async () => {
        return fetchGet<TransformedSwimmingPoolDetail>(
          '/api/swimming-pool-detail',
          {
            id: swimmingPoolId,
            categoryId: categoryId ?? '',
          }
        );
      },
    });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
