import { useQuery } from '@tanstack/react-query';
import { SanityUploadedFile } from '~/domains';

export function useGetDocumentsBySwimmingPoolId(id: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<
    SanityUploadedFile[]
  >({
    queryKey: ['documents'],
    enabled: Boolean(id),
    queryFn: async () => {
      const params = new URLSearchParams({
        swimmingPoolId: id,
      });

      const response = await fetch(`/api/documents?${params.toString()}`);

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
