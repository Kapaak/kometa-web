import { useQuery } from '@tanstack/react-query';

import { SanitySharedDocuments } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetSharedDocuments() {
  const { data, isError, isLoading, isSuccess } =
    useQuery<SanitySharedDocuments>({
      queryKey: ['sharedDocuments'],
      queryFn: async () => {
        return fetchGet<SanitySharedDocuments>('/api/shared-documents');
      },
      staleTime: Infinity,
    });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}
