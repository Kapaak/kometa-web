import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchGet, fetchPost } from '~/utils/fetch';

export function useGetGoogleSheetById(sheetId: string) {
  const { data, isError, isLoading, isSuccess } = useQuery<string[]>({
    queryKey: ['googleSheet', sheetId],
    enabled: Boolean(sheetId),
    queryFn: async () => {
      return fetchGet<string[]>('/api/sheets', { gid: sheetId });
    },
  });

  return {
    data,
    isError,
    isSuccess,
    isLoading,
  };
}

export function useAppendGoogleSheetById(sheetId: number) {
  const {
    isPending: isLoading,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: async (values: string[]) => {
      return fetchPost(
        '/api/sheets',
        {
          values,
        },
        {
          gid: String(sheetId),
        }
      );
    },
  });

  const handleAppendGoogleSheet = async (values: any[]) => {
    return await mutateAsync(values);
  };

  return {
    appendGoogleSheetById: handleAppendGoogleSheet,
    isError,
    isLoading,
  };
}
