import NextLink from 'next/link';

import { CalendarBlank, Timer, User } from '@phosphor-icons/react';

import { Category, categoryTranslation } from '~/types';
import { NextSanityImage, VerticalStack } from '~/ui/components/atoms';
import { IconText } from '~/ui/components/molecules';
import { convertDateToString } from '~/utils/date';

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
  return (
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
          <NextSanityImage
            image={image}
            alt={imageAlt ?? ''}
            blurDataURL={imageBlurDataURL}
            placeholder={imageBlurDataURL ? 'blur' : 'empty'}
            loading="eager"
            sizes="(max-width: 768px) 25vw, 20vw"
            fill
            objectFit="contain"
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
            <VerticalStack gap="1rem">
              <IconText icon={User} text={author} />
              <IconText
                icon={CalendarBlank}
                text={convertDateToString(new Date(date ?? ''))}
              />
              <IconText icon={Timer} text={`${readTime} min`} />
            </VerticalStack>
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
}
