import { useMemo } from 'react';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { SanityLecture } from '~/domains';

type AvailableCoursesProps = {
  filter?: {
    age?: number;
    gender?: string;
    skillLevel?: string;
    day?: string[] | string;
    time?: string[] | string;
    place?: string[] | string;
  };
  pageSize?: number;
};

//must be the same as in the API
const DEFAULT_PAGE_SIZE = 20;

export function useGetAvailableCourses({
  filter,
  pageSize = DEFAULT_PAGE_SIZE,
}: AvailableCoursesProps) {
  const { data, isError, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: '',
      queryKey: ['available-courses', filter],
      queryFn: async ({ pageParam = '' }) => {
        const params = new URLSearchParams(filter as Record<string, string>);
        params.append('lastId', pageParam);
        params.append('pageSize', pageSize.toString());

        const response = await fetch(
          `/api/available-courses?${params.toString()}`
        );
        const data = await response.json();
        return data;
      },
      getNextPageParam(lastPage) {
        return lastPage.length === pageSize
          ? lastPage[lastPage.length - 1].id
          : undefined;
      },
    });

  const courses = useMemo(() => {
    if (!Array.isArray(data?.pages)) {
      return [];
    }

    return data.pages.flat();
  }, [data]);

  return {
    data: courses,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isLoading,
  };
}

export function useGetLecturesForSwimmingPoolAndCategory(
  category?: string,
  swimmingPool?: string
) {
  const { data, isError, isLoading, isSuccess } = useQuery<SanityLecture[]>({
    queryKey: ['lectures-by-category'],
    enabled: Boolean(category && swimmingPool),
    queryFn: async () => {
      const params = new URLSearchParams({
        categoryId: category as string,
        swimmingPoolId: swimmingPool as string,
      });

      const response = await fetch(`/api/lectures?${params.toString()}`);

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
