import { useMemo } from 'react';

import { useGetSwimmingPool } from '~/adapters';

export function useGetSwimmingPoolOptions() {
  const { data, isLoading, isError, isSuccess } = useGetSwimmingPool();

  const options = useMemo(
    () =>
      data?.map((pool) => ({
        label: pool.name ?? '',
        value: String(pool.slug) ?? '',
      })),
    [data]
  );

  return {
    data: options,
    isLoading,
    isError,
    isSuccess,
  };
}
