import { useMutation, useQuery } from '@tanstack/react-query';

import { SanityLecture } from '~/domains';
import { fetchGet, fetchPost } from '~/utils/fetch';

type AppendGoogleSheetParams = {
  swimmingPoolId: string;
  categoryId: string;
  preliminary?: boolean;
};

// The server picks the spreadsheet and tab based on the pool and category.
export function useAppendGoogleSheet({
  swimmingPoolId,
  categoryId,
  preliminary,
}: AppendGoogleSheetParams) {
  const {
    isPending: isLoading,
    isError,
    mutateAsync,
  } = useMutation({
    mutationFn: async (values: string[]) => {
      return fetchPost('/api/google-sheets/append', {
        swimmingPoolId,
        categoryId,
        preliminary,
        values,
      });
    },
  });

  return {
    appendGoogleSheet: mutateAsync,
    isError,
    isLoading,
  };
}

export function useGetAvailableLectures(
  categoryId: string,
  swimmingPoolId: string
) {
  const { data, isError, isLoading } = useQuery<SanityLecture[]>({
    queryKey: ['lectures-with-capacity', categoryId, swimmingPoolId],
    queryFn: async () => {
      return fetchGet('/api/google-sheets/lectures-with-capacity', {
        categoryId,
        swimmingPoolId,
      });
    },
  });

  return {
    data,
    isError,
    isLoading,
  };
}
