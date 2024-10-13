import { useState } from 'react';

import { useGetBlogPosts } from '~/adapters/blogAdapter';
import { Category } from '~/types';
import {
  Headline,
  Hidden,
  MaxWidth,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import { BlogFilterDrawer, BlogLayout } from './components';

import { BlogArticle, BlogFilter, LoadingBlogArticle } from './parts';

import * as S from './BlogScreen.style';

export function BlogScreen() {
  const [selectedFilter, setSelectedFilter] = useState<Category[]>(
    Object.values(Category)
  );

  const { data, isLoading } = useGetBlogPosts({
    filter: { categories: selectedFilter },
  });

  const handleChange = (filterValue: Category) => {
    if (selectedFilter.includes(filterValue)) {
      return setSelectedFilter((prev) =>
        prev.filter((item) => item !== filterValue)
      );
    }

    setSelectedFilter((prev) => [...prev, filterValue]);
  };

  const handleSubmit = (data: Category[]) => {
    setSelectedFilter(data);
  };

  const getFilterCategoryActive = (filterCategory: Category) => {
    return selectedFilter.includes(filterCategory);
  };

  return (
    <BlogLayout>
      <S.BlogSection>
        <MaxWidth>
          <VerticalStack gap="2rem">
            <Headline>Blog</Headline>

            <Hidden up="md">
              <BlogFilterDrawer
                onSubmit={handleSubmit}
                defaultSelectedFilter={selectedFilter}
              />
            </Hidden>

            <Hidden down="md">
              <BlogFilter
                onChange={handleChange}
                getIsCategoryActive={getFilterCategoryActive}
              />
            </Hidden>

            <S.BlogPostsContainer>
              {data?.length > 0 &&
                data?.map((blog) => (
                  <BlogArticle
                    key={blog?.id}
                    title={blog?.title}
                    description={blog?.shortDescription}
                    imageAlt={blog?.alt}
                    date={blog?.createdAt}
                    author={blog?.author}
                    readTime={blog?.readTime}
                    image={blog?.image}
                    imageBlurDataURL={blog?.blurDataURL}
                    href={`/blog/${blog?.url}`}
                    categories={blog?.tags}
                  />
                ))}
            </S.BlogPostsContainer>

            {isLoading && (
              <>
                <LoadingBlogArticle />
                <LoadingBlogArticle />
                <LoadingBlogArticle />
              </>
            )}

            {data.length === 0 && !isLoading && (
              <S.EmptyFilterResults>
                <Text align="center">
                  Nebyly nalezeny žádné články. Zkuste vybrat jinou kategorii.
                </Text>
              </S.EmptyFilterResults>
            )}
          </VerticalStack>
        </MaxWidth>
      </S.BlogSection>
    </BlogLayout>
  );
}
