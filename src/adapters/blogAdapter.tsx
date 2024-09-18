import { useMemo } from 'react';

import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { TransformedBlogPost } from '~/domains';

type BlogPostsProps = {
  filter?: {
    categories?: string[];
  };
  pageSize?: number;
};

//must be the same as in the API
const DEFAULT_PAGE_SIZE = 20;

export function useGetBlogPosts({
  filter,
  pageSize = DEFAULT_PAGE_SIZE,
}: BlogPostsProps = {}) {
  const { data, isError, isLoading, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery<TransformedBlogPost[]>({
      initialPageParam: '',
      queryKey: ['blogPosts', filter],
      queryFn: async ({ pageParam = '' }: QueryFunctionContext) => {
        const params = new URLSearchParams(filter as Record<string, string>);
        params.append('lastId', String(pageParam));
        params.append('pageSize', pageSize.toString());

        const response = await fetch(`/api/blog-posts?${params.toString()}`);
        const data = await response.json();

        return data;
      },
      getNextPageParam(lastPage) {
        return lastPage.length === pageSize
          ? lastPage[lastPage.length - 1].id
          : undefined;
      },
    });

  const blogPosts = useMemo(() => {
    if (!Array.isArray(data?.pages)) {
      return [];
    }

    return data.pages.flat();
  }, [data]);

  return {
    data: blogPosts,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isLoading,
  };
}
