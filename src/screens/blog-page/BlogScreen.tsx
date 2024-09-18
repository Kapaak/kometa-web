// import { BLOG_CATEGORIES } from "~/constants/category";
// import { useSanityBlogContext } from "~/contexts";
// import { Category, SanityBlog } from "~/domains";

import { useState } from 'react';

import { useGetBlogPosts } from '~/adapters';
import { Category } from '~/types';
import { Headline, MaxWidth, Text, VerticalStack } from '~/ui/components/atoms';

import { BlogLayout } from './components';

import { BlogArticle, BlogFilter } from './parts';

import * as S from './BlogScreen.style';

interface BlogScreenProps {}

export function BlogScreen({}: BlogScreenProps) {
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

  const getFilterCategoryActive = (filterCategory: Category) => {
    return selectedFilter.includes(filterCategory);
  };

  return (
    <BlogLayout>
      <S.BlogSection>
        <MaxWidth>
          <VerticalStack gap="2rem">
            <Headline>Blog</Headline>
            <S.Scrollable>
              <BlogFilter
                onChange={handleChange}
                getIsCategoryActive={getFilterCategoryActive}
              />
            </S.Scrollable>
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
