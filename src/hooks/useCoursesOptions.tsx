import { useMemo } from 'react';

import { useGetSwimmingPools } from '~/adapters/swimmingPoolAdapter';

export function useGetSwimmingPoolOptions() {
  const { data, isLoading, isError, isSuccess } = useGetSwimmingPools();

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
