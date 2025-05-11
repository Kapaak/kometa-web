import { useQuery } from '@tanstack/react-query';
import { SanitySwimmingPool } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetSwimmingPoolById(id?: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanitySwimmingPool>({
    queryKey: ['swimming-pool', id],
    enabled: Boolean(id),
    queryFn: async () => {
      return fetchGet<SanitySwimmingPool>('/api/swimming-pool', {
        id: id ?? '',
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

export function useGetSwimmingPools() {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanitySwimmingPool[]
  >({
    queryKey: ['swimming-pools'],
    queryFn: async () => {
      return fetchGet<SanitySwimmingPool[]>('/api/swimming-pool');
    },
  });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
