import { useQuery } from '@tanstack/react-query';
import { SanityUploadedFile } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetDocumentsBySwimmingPoolId(id: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanityUploadedFile[]
  >({
    queryKey: ['documents', id],
    enabled: Boolean(id),
    queryFn: async () => {
      return fetchGet<SanityUploadedFile[]>('/api/documents', {
        swimmingPoolId: id,
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
