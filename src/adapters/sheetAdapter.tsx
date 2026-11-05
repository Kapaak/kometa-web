import { useMutation, useQuery } from '@tanstack/react-query';

import { SanityLecture } from '~/domains';
import { fetchGet, fetchPost } from '~/utils/fetch';

export function useAppendGoogleSheetById(sheetTabId: number) {
  const {
    isPending: isLoading,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: async (values: string[]) => {
      return fetchPost(
        '/api/google-sheets/append',
        {
          values,
        },
        {
          gid: String(sheetTabId),
        }
      );
    },
  });

  //TODO: Fix in future
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  gid?: number,
  capacity?: number
) {
  const { data, isError, isLoading } = useQuery<SanityLecture[]>({
    queryKey: ['lectures-with-capacity', categoryId, swimmingPoolId],
    queryFn: async () => {
      return fetchGet('/api/google-sheets/lectures-with-capacity', {
        categoryId,
        swimmingPoolId,
        // Without a Google Sheet we can't count the remaining capacity
        ...(gid ? { gid: String(gid), capacity: String(capacity ?? 0) } : {}),
      });
    },
  });

  return {
    data,
    isError,
    isLoading,
  };
}
