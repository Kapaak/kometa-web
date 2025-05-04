import { useQuery } from '@tanstack/react-query';
import { SanitySwimmingPool } from '~/domains';

export function useGetSwimmingPoolById(id?: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanitySwimmingPool>({
    queryKey: ['swimming-pool'],
    enabled: Boolean(id),
    queryFn: async () => {
      const params = new URLSearchParams({
        id: id ?? '',
      });

      //TODO: upravit ten ep, aby vracel data pro swimming-pool s filtrem podle ID

      const response = await fetch(`/api/swimming-pool?${params.toString()}`);
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

export function useGetSwimmingPools() {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanitySwimmingPool[]
  >({
    queryKey: ['swimming-pools'],
    queryFn: async () => {
      const response = await fetch('/api/swimming-pool');
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
