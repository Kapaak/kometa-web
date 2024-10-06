import { useState } from 'react';

import { SlidersHorizontal } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { useGetBlogPosts } from '~/adapters/blogAdapter';
import { Category, categoryTranslation } from '~/types';
import {
  Checkbox,
  Flex,
  Headline,
  Hidden,
  Loader,
  MaxWidth,
  Popover,
  Text,
  VerticalStack,
} from '~/ui/components/atoms';

import { BlogLayout } from './components';

import { BlogArticle, BlogFilter } from './parts';

import * as S from './BlogScreen.style';

export function BlogScreen() {
  const [selectedFilter, setSelectedFilter] = useState<Category[]>(
    Object.values(Category)
  );

  const theme = useTheme();
  const { primary } = theme.colors;

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
              <Popover
                title="Nastavení filtru"
                action={
                  <S.FilterButton>
                    <Text variant="body2">Filtr</Text> <SlidersHorizontal />
                  </S.FilterButton>
                }
              >
                <Flex
                  padding="1.6rem 2rem .6rem"
                  direction="column"
                  gap=".8rem"
                >
                  {Object.values(Category).map((category) => (
                    <Checkbox
                      key={category}
                      label={categoryTranslation(category)}
                      checked={getFilterCategoryActive(category)}
                      onChange={() => handleChange(category)}
                    />
                  ))}
                </Flex>
              </Popover>
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
              <S.LoadingWrapper>
                <Loader color={primary.main} />
              </S.LoadingWrapper>
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
