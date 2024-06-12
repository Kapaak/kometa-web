import { useMemo } from 'react';

import { useGetSwimmingPool } from '~/adapters';
import { formatStringToOption } from '~/utils/format';

export function useGetSwimmingPoolOptions() {
  const { data, isLoading, isError, isSuccess } = useGetSwimmingPool();

  const options = useMemo(
    () =>
      data?.map((pool) => ({
        label: pool.name ?? '',
        value: formatStringToOption(pool?.name ?? ''),
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
