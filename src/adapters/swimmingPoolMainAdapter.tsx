import { useQuery } from '@tanstack/react-query';
import { TransformedSwimmingPoolDetail } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetSwimmingPoolMainPageById(swimmingPoolId: string) {
  const { data, isError, isLoading, isSuccess } =
    //TODO: add correct typ
    useQuery<any>({
      enabled: Boolean(swimmingPoolId),
      queryKey: ['swimming-pool-main', swimmingPoolId],
      queryFn: async () => {
        return fetchGet<TransformedSwimmingPoolDetail>(
          '/api/swimming-pool-main',
          {
            id: swimmingPoolId,
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
