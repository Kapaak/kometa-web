import { useQuery } from '@tanstack/react-query';
import { SanitySwimmingPoolPage } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetSwimmingPoolMainPageById(swimmingPoolId: string) {
  const { data, isError, isLoading, isSuccess } =
    useQuery<SanitySwimmingPoolPage>({
      enabled: Boolean(swimmingPoolId),
      queryKey: ['swimming-pool-main', swimmingPoolId],
      queryFn: async () => {
        return fetchGet<SanitySwimmingPoolPage>('/api/swimming-pool-main', {
          id: swimmingPoolId,
        });
      },
    });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
