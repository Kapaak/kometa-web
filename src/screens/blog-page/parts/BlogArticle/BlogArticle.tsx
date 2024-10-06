import NextLink from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { useTheme } from 'styled-components';

import { Category, categoryTranslation } from '~/types';
import { VerticalStack } from '~/ui/components/atoms';
import { maxBreakpoint } from '~/utils/dimensions';

import { BlogInfo } from '../../components';

import * as S from './BlogArticle.style';

interface BlogArticleProps {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  readTime?: number;
  image?: string;
  imageAlt?: string;
  imageBlurDataURL?: string;
  href?: string;
  categories?: Category[];
}

export function BlogArticle({
  author,
  categories,
  date,
  description,
  image,
  imageAlt,
  imageBlurDataURL,
  readTime,
  href,
  title,
}: BlogArticleProps) {
  const { breakpoints } = useTheme();

  const isTouchDevice = useMediaQuery({ query: maxBreakpoint(breakpoints.md) });

  const articleContent = (
    <S.BlogArticle>
      <S.ImageContainer>
        <S.CategoryContainer>
          {categories?.map((category) => {
            return (
              <S.BlogChip key={category}>
                {categoryTranslation(category)}
              </S.BlogChip>
            );
          })}
        </S.CategoryContainer>
        {image && (
          <S.BlogImage
            image={image}
            alt={imageAlt ?? ''}
            blurDataURL={imageBlurDataURL}
            placeholder={imageBlurDataURL ? 'blur' : 'empty'}
            loading="eager"
            sizes="(max-width: 768px) 25vw, 20vw"
            fill
            objectFit="cover"
          />
        )}
      </S.ImageContainer>
      <S.Container>
        <S.TextContainer>
          <S.BlogArticleHeadline>{title}</S.BlogArticleHeadline>
          <S.BlogArticleDescription>{description}</S.BlogArticleDescription>
        </S.TextContainer>
        <S.InfoContainer>
          <VerticalStack gap="3rem">
            <BlogInfo author={author} readTime={readTime} date={date} />
            <NextLink href={href ?? '#'} passHref>
              <S.BlogArticleButton variant="outlined">
                Číst článek
              </S.BlogArticleButton>
            </NextLink>
          </VerticalStack>
        </S.InfoContainer>
      </S.Container>
    </S.BlogArticle>
  );

  return isTouchDevice ? (
    <NextLink href={href ?? '#'} passHref>
      {articleContent}
    </NextLink>
  ) : (
    articleContent
  );
}
