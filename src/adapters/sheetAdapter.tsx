import { useMutation, useQuery } from '@tanstack/react-query';
import { SanityLecture } from '~/domains';
import { fetchGet, fetchPost } from '~/utils/fetch';

export function useGetGoogleSheetById(sheetId: number, capacity?: number) {
  const { data, isError, isLoading, isSuccess } = useQuery<string[]>({
    queryKey: ['googleSheet', sheetId],
    enabled: Boolean(sheetId),
    queryFn: async () => {
      return fetchGet<string[]>('/api/sheets', {
        gid: String(sheetId),
        capacity: String(capacity),
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

export function useGetAvailableLectures(
  categoryId: string,
  swimmingPoolId: string,
  gid: number,
  capacity: number
) {
  const { data, isError, isLoading } = useQuery<SanityLecture[]>({
    queryKey: ['lectures-with-capacity', categoryId, swimmingPoolId],
    queryFn: async () => {
      return fetchGet('/api/google-sheets/lectures-with-capacity', {
        categoryId,
        swimmingPoolId,
        gid: String(gid),
        capacity: String(capacity),
      });
    },
  });

  return {
    data,
    isError,
    isLoading,
  };
}
