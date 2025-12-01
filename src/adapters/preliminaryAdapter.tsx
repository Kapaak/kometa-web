import { useQuery } from '@tanstack/react-query';
import { SanityLecture } from '~/domains';
import { fetchGet } from '~/utils/fetch';

export function useGetPreliminaryLectures(
  categoryId: string,
  swimmingPoolId: string
) {
  const { data, isError, isLoading } = useQuery<SanityLecture[]>({
    queryKey: ['preliminary-lectures', categoryId, swimmingPoolId],
    queryFn: async () => {
      return fetchGet('/api/preliminary-lectures', {
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
