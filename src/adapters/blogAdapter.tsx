import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { TransformedBlogPost } from '~/domains';
import { fetchGet } from '~/utils/fetch';

type BlogPostsProps = {
  filter?: {
    categories?: string[];
  };
  pageSize?: number;
};

// Must be the same as in the API
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
        const params = {
          ...filter,
          categories: filter?.categories?.join(','),
          lastId: String(pageParam),
          pageSize: pageSize.toString(),
        };

        return fetchGet<TransformedBlogPost[]>(
          '/api/blog-posts',
          params as Record<string, string>
        );
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
